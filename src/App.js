import { render } from "@testing-library/react";
import React, {Component, useRef, useState} from "react";
import Overview from "./components/Overview";
import uniqid from "uniqid"

class App extends Component {

  constructor() {
    super();

    this.state = {
      tasks: [],
      task: {
        value: "",
        id: uniqid()
       }
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      task: {
        value: e.target.value,
        id: this.state.task.id
      }});
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      tasks: [...this.state.tasks, this.state.task],
      task: {
        value: "",
        id: uniqid()
       }
    })
  }

  render() {
    return (
          <div className="App">
          <form>
            <label htmlFor="input">Task</label>
            <input type="text" id="input" name="input" value={this.state.task.value} onChange={this.handleChange}></input>
            <button type="button" onClick={this.handleSubmit}>Submit</button>
          </form>
          <Overview tasks={this.state.tasks}/>
        </div>)
  }
}

export default App;
