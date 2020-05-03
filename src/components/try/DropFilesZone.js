import React, { Component } from "react";
import Dropzone from "./Dropzone";
import ButtonContainer from "./ButtonContainer";
import AudioSource from "./AudioSource";
import Button from "@material-ui/core/Button";

class DropFilesZone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      buttonEnabled: false,
      url: null,
      prediction: null,
      predictionOriginal: null,
      audioOutput: null,
    };
  }

  useDataFromFileDrop = (file) => {
    this.setState({ file }, () => {
      if (this.state.file !== undefined) this.setState({ buttonEnabled: true });
      else this.setState({ buttonEnabled: false });
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
      });
    });
  };

  removeImage = () => {
    this.setState({
      url: null,
      prediction: null,
      audioOutput: null,
      predictionoriginal: null,
    });
  };

  translateText = (text) => {
    const TO_LANG = "es";
    const API_KEY = process.env.REACT_APP_GOOGLE_TRANSLATION_API_KEY;
    console.log(API_KEY);
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
        });
      })
      .catch((error) => {
        console.log("There was an error with the translation request: ", error);
      });
  };

  render() {
    return (
      <div>
        <section className="body-container">
          {this.state.url !== null ? (
            <div className="preview-container">
              <div className="image-container">
                <img className="image-to-use" src={this.state.url} alt="" />
              </div>
              <Button
                className="dropzone-button"
                variant="contained"
                color="secondary"
                size="medium"
                onClick={this.removeImage}
              >
                PROBAR CON OTRA IMÁGEN
              </Button>
            </div>
          ) : (
            <div>
              <Dropzone dataFromFileDrop={this.useDataFromFileDrop} />
            </div>
          )}
          <ButtonContainer
            fileToScript={this.getCurlResponse}
            enabled={this.state.buttonEnabled}
          />
          <AudioSource audioSource={this.state.audioOutput} />
        </section>
        {this.state.prediction !== null ? (
          <div>
            <p className="prediction">{this.state.prediction}</p>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

export default DropFilesZone;
