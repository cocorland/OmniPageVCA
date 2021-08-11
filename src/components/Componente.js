import React from "react";

const Componente = (props) => <h2>{props.msg}</h2>;

/* function Componente(props) {
  return <h2>{  props.msg}</h2>
} */

/* class Componente extends Component {
  render() {
    return <h2>{this.props.msg}</h2>
  }
} */

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Componente;
export {NameForm};