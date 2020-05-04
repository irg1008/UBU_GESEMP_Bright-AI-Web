import React from "react";
import { DropzoneArea } from "material-ui-dropzone";

class DropzoneAreaExample extends React.Component {
  handleChange = (files) => {
    this.props.dataFromFileDrop(files[0]);
  };

  render() {
    return (
      <DropzoneArea
        dropzoneClass="dropzone-drop"
        acceptedFiles={["image/*"]}
        dropzoneText={"Arrastra la imágen a analizar"}
        filesLimit={1}
        fullWidth={true}
        maxFileSize={10000000}
        showPreviewsInDropzone={true}
        onChange={this.handleChange.bind(this)}
      />
    );
  }
}

export default DropzoneAreaExample;

/*
TODO: Hacerlo más bonito, para que quede bien, igual quitar el componente y mostrar la imagen con un boton abajo de mostrar otra.
*/
