import React from "react";
import Button from "@material-ui/core/Button";

class ButtonContainer extends React.Component {
  render() {
    return (
      <Button
        variant="contained"
        size="medium"
        disabled={!this.props.buttonIsDisabled}
        onClick={
          this.props.enabled ? this.props.fileToScript : this.props.removeImage
        }
      >
        {this.props.text}
      </Button>
    );
  }
}

export default ButtonContainer;
