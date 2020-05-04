import React, { Component } from "react";
import Dropzone from "./Dropzone";
import ButtonContainer from "./ButtonContainer";
import AudioSource from "./AudioSource";

class DropFilesZone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      url: null,
      prediction: null,
      predictionOriginal: null,
      audioOutput: null,
      waitingFile: false,
      enabledButton: false,
    };
  }

  useDataFromFileDrop = (file) => {
    this.setState({ file }, () => {
      if (this.state.file !== undefined)
        this.setState({ waitingFile: true, enabledButton: true });
      else this.setState({ waitingFile: false });
    });
  };

  getCurlResponse = () => {
    this.setUrl();

    const body = new FormData();
    body.append("image", this.state.file);

    fetch(
      "http://max-image-caption-generator.codait-prod-41208c73af8fca213512856c7a09db52-0000.us-east.containers.appdomain.cloud/model/predict",
      {
        body,
        headers: {
          accept: "application/json",
        },
        credentials: "same-origin",
        method: "POST",
      }
    )
      .then((response) => response.json())
      .then((success) => {
        this.setState({
          predictionOriginal: success.predictions[0].caption,
        });
        this.translateText(success.predictions[0].caption);
      })
      .catch((error) => console.log("Error:", error));
  };

  getBase64 = (file, cb) => {
    let reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = function () {
      cb(reader.result);
    };

    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  };

  setUrl = () => {
    this.getBase64(this.state.file, (result) => {
      this.setState({
        url: result,
        enabledButton: false,
      });
    });
  };

  removeImage = () => {
    this.setState({
      url: null,
      prediction: null,
      audioOutput: null,
      predictionoriginal: null,
      enabledButton: false,
    });
  };

  translateText = (text) => {
    const TO_LANG = "es";
    const API_KEY = process.env.REACT_APP_GOOGLE_TRANSLATION_API_KEY;
    const TEXT = encodeURI(text);
    let traduccion;

    let url = `https://translation.googleapis.com/language/translate/v2?target=${TO_LANG}&key=${API_KEY}&q=${TEXT}`;

    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        traduccion = response.data.translations[0].translatedText;
        this.setState({
          prediction: traduccion,
        });
        this.textToSpeech(traduccion);
      })
      .catch((error) => {
        console.log("There was an error with the translation request: ", error);
      });
  };

  textToSpeech = (traduccion) => {
    const API_KEY = process.env.REACT_APP_GOOGLE_TEXT_TO_SPEECH_API_KEY;
    let url = `https://texttospeech.googleapis.com/v1beta1/text:synthesize?key=${API_KEY}`;

    fetch(url, {
      body: JSON.stringify({
        input: {
          text: traduccion,
        },
        voice: {
          languageCode: "es-ES",
          name: "es-ES-Standard-A",
        },
        audioConfig: {
          audioEncoding: "MP3",
        },
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((res) => res.json())
      .then((response) => {
        let audio64 = "data:audio/mp3;base64,";
        audio64 += response.audioContent;
        this.setState({
          audioOutput: audio64,
          enabledButton: true,
        });
      })
      .catch((error) => {
        console.log("There was an error with the translation request: ", error);
      });
  };

  render() {
    return (
      <div className="try-holder">
        <div className="try-data-handler">
          {this.state.url !== null ? (
            <div className="try-preview-container">
              <img src={this.state.url} alt="" />
            </div>
          ) : (
            <div className="try-data-dropzone">
              <Dropzone dataFromFileDrop={this.useDataFromFileDrop} />
            </div>
          )}
          <ButtonContainer
            fileToScript={this.getCurlResponse}
            removeImage={this.removeImage}
            enabled={this.state.waitingFile}
            text={
              this.state.url !== null
                ? "PROBAR CON OTRA IMÁGEN"
                : "CONVERTIR IMÁGEN A AUDIO"
            }
            buttonIsDisabled={this.state.enabledButton}
          />
          <AudioSource audioSource={this.state.audioOutput} />
        </div>
        {this.state.prediction !== null && (
          <div className="try-text-respond">
            <p className="prediction">{this.state.prediction}</p>
          </div>
        )}
      </div>
    );
  }
}

export default DropFilesZone;
