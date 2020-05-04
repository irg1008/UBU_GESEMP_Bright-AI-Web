import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import AudioPlayer from "material-ui-audio-player";

const muiTheme = createMuiTheme({});

class AudioSource extends React.Component {
  setAutoplay = (audio) => {
    return audio !== null ? true : false;
  };

  render() {
    return (
      <div className="try-audio">
        <ThemeProvider theme={muiTheme}>
          <AudioPlayer
            src={this.props.audioSource}
            autoplay={this.setAutoplay(this.props.audioSource)}
            variation="primary"
          />
        </ThemeProvider>
      </div>
    );
  }
}

export default AudioSource;
