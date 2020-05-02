import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default class Form extends Component {
  constructor() {
    super();
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
  };

  render() {
    return (
      <form
        //method="POST"
        //action="../php/sendData.php"
        className="form-box"
        autoComplete="off"
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
        <Button type="submit"
        variant="contained" color="primary">
          Enviar
        </Button>
      </form>
    );
  }
}
