import React from "react";
import Button from "@material-ui/core/Button";

class ButtonContainer extends React.Component {
  render() {
    return (
      <div className="button-container">
        <Button
          className="button"
          variant="contained"
          color="primary"
          disabled={!this.props.enabled}
          size="medium"
          onClick={this.props.fileToScript}
        >
          CONVERTIR IMÁGEN A AUDIO
        </Button>
      </div>
    );
  }
}

export default ButtonContainer;
