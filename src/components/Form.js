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
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    this.props.isSent(false);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    fetch("api/index.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: this.state,
    }).then((response) => {
      if (response.status === 200) {
        this.props.isSent(true);
        this.resetForm();
      } else {
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
    });
  };

  render() {
    return (
      <>
        <form
          className="form-box"
          autoComplete="off"
          onSubmit={this.handleSubmit}
        >
          <TextField
            type="text"
            name="name"
            value={this.state.name}
            placeholder="Ana Martínez"
            onChange={this.handleChange.bind(this)}
            label="Nombre"
            required={true}
            error={this.state.name === ""}
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
            error={this.state.email === ""}
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
            error={this.state.message === ""}
          />
          <Button type="submit" variant="contained" color="primary">
            Enviar
          </Button>
        </form>
      </>
    );
  }
}
