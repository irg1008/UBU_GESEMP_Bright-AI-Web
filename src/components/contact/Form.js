import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      company: "",
      message: "",
      started: false,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      started: true,
    });
    this.props.isSent(false);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    fetch("api/contact.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    })
      .then((response) => response.json())
      .then((responseJ) => {
        if (responseJ.sent === true) {
          this.props.isSent(true);
          this.resetForm();
        } else if (responseJ.sent === false) {
          alert("No se ha podido enviar el formulario.");
        }
      });
  };

  resetForm = () => {
    this.setState({
      name: "",
      email: "",
      company: "",
      message: "",
      started: false,
    });
  };

  render() {
    return (
      <>
        <form
          className="form-box"
          method="POST"
          onSubmit={this.handleSubmit.bind(this)}
        >
          <TextField
            type="text"
            name="name"
            value={this.state.name}
            placeholder="Ana Martínez"
            onChange={this.handleChange.bind(this)}
            label="Nombre"
            required={true}
            error={this.state.name === "" && this.state.started}
            autoFocus={true}
          />
          <TextField
            type="email"
            name="email"
            value={this.state.email}
            placeholder="bright@ai.com"
            onChange={this.handleChange.bind(this)}
            label="Email"
            required={true}
            error={this.state.email === "" && this.state.started}
          />
          <TextField
            type="text"
            name="company"
            value={this.state.company}
            placeholder="Ejemplo S.L."
            onChange={this.handleChange.bind(this)}
            label="Empresa"
          />
          <TextField
            multiline={true}
            rows="10"
            type="text"
            name="message"
            value={this.state.message}
            placeholder=""
            onChange={this.handleChange.bind(this)}
            label="Mensaje"
            variant="outlined"
            required={true}
            error={this.state.message === "" && this.state.started}
          />
          <Button type="submit" variant="contained" color="primary">
            Enviar
          </Button>
        </form>
      </>
    );
  }
}
