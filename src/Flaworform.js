import React from "react";

class Flaworfrom extends React.Component {
  constructor(props) {
    super(props)

    this.state = {value: "cocount" }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    console.log("Send message" + this.state.value);
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Select your favorite taste:
          <select value={this.state.value} onChange={this.handleChange}/>
            <option value="grapefruit">grapefruit</option>
            <option value="cocount">cocount</option>
            <option value="lime">lime</option>
        </label>
        <input type="submit" value="Send!"/>
      </form>
    );
  }
}

export default Flaworfrom;