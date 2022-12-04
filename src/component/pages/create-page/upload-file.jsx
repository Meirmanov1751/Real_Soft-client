import React, {Component} from "react";
import Dropzone from "react-dropzone";

import UploadService from "../../../services/upload-file";

export default class UploadFiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFiles: undefined,
      currentFile: undefined,
      progress: 0,
      message: "",

      fileInfos: [],
    };
  }

  componentDidMount() {
    UploadService.getFiles().then((response) => {

      this.setState({

        fileInfos: response.data,
      });
    });
  }

  onDrop = (files) => {
    if (files.length > 0) {
      this.setState({selectedFiles: files});
    }
  }

  upload = () => {
    var fileURL = new FileReader()
    fileURL.readAsDataURL(this.state.selectedFiles[0])
    fileURL.onload = function () {
      console.log(fileURL.result);
      window.imageBase64 = fileURL.result
    };

    let currentFile = this.state.selectedFiles[0];

    this.setState({
      progress: 0,
      currentFile: currentFile,
    });

    UploadService.upload(currentFile, (event) => {
      this.setState({
        progress: Math.round((100 * event.loaded) / event.total),
      });
    })
      .then((response) => {
        this.setState({
          message: response.data.message,
        });
        return UploadService.getFiles();
      })
      .then((files) => {
        this.setState({
          fileInfos: files.data,
        });
      })
      .catch(() => {
        this.setState({
          progress: 0,
          message: "Could not upload the file!",
          currentFile: undefined,
        });
      });

    this.setState({
      selectedFiles: undefined,
    });
  }

  render() {
    const {selectedFiles, currentFile, progress, message, fileInfos} = this.state;

    return (
      <div>

        {currentFile && (
          <div className="progress mb-3">
            <div
              className="progress-bar progress-bar-info progress-bar-striped"
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin="0"
              aria-valuemax="100"
              style={{width: progress + "%"}}
            >
              {progress}%
            </div>
          </div>
        )}

        <Dropzone onDrop={this.onDrop} multiple={true}>
          {({getRootProps, getInputProps}) => (
            <section>
              <div {...getRootProps({className: "dropzone"})}>
                <input  {...getInputProps()} />
                {selectedFiles && selectedFiles[0].name ? (
                  <div className="selected-file">
                    {selectedFiles && selectedFiles[0].name}
                  </div>
                ) : (
                  "Drag and drop file here, or click to select file"
                )}
              </div>
              <aside className="selected-file-wrapper">
                <button
                  className="btn btn-success"
                  disabled={!selectedFiles}
                  onClick={e => {
                    e.preventDefault();
                    this.upload()
                  }}
                >
                  Upload
                </button>
              </aside>
            </section>
          )}
        </Dropzone>

        <div className="alert alert-light" role="alert">
          {message}
        </div>


      </div>
    );
  }

}
