import React, {useRef, useState} from 'react';
import Webcam from "react-webcam";

const WebcamComponent = () => {
  const [msg, setMsg] = useState()
  const webcam = useRef()
  const imageDiv = useRef()

  function showImage() {
    window.imageBase64 = webcam.current.getScreenshot()
    setMsg("Загружено")
    imageDiv.current.style = "display:none"

  }

  function showWebcam() {
    imageDiv.current.style = "display:block"
  }

  return (
    <div>
      <button onClick={(e) => {
        e.preventDefault()
        showWebcam()
      }}> фото по веб-камере
      </button>

      <div ref={imageDiv} style={{display: "none"}}>
        <button onClick={(e) => {
          e.preventDefault()
          showImage()
        }}>Webcam
        </button>
        <Webcam ref={webcam}/>
      </div>

      <div>{msg}</div>
    </div>
  );
};

export default WebcamComponent;
