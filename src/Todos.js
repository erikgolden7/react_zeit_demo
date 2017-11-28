import React, { Component } from "react";
import axios from "axios";
//import './Todos.css';
const mainContainer = {
  height: "75.5vh",
  backgroundColor: "darkgrey"
};
const div = {
  position: "relative",
  top: "50px"
};

class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: "",
      todos: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitTodo = this.submitTodo.bind(this);
  }
  handleChange(val, prop) {
    this.setState({ [prop]: val });
  }
  submitTodo() {
    axios
      .post("/api/todos", { todo: this.state.newTodo })
      .then(res => {
        this.setState({ todos: res.data, newTodo: "" });
      })
      .catch(console.log);
  }
  componentDidMount() {
    axios
      .get("/api/todos")
      .then(res => {
        this.setState({ todos: res.data });
      })
      .catch(console.log);
  }
  render() {
    const todos = this.state.todos.map((todo, i) => (
      <div className="" key={i}>
        {todo.todo}
      </div>
    ));
    return (
      <div style={mainContainer}>
        <div style={div}>
          <input
            type="text"
            placeholder="Write a new Todo"
            value={this.state.newTodo}
            onChange={e => this.handleChange(e.target.value, "newTodo")}
          />
          <br />
          <button onClick={this.submitTodo}>Submit</button>
          {todos}
        </div>
      </div>
    );
  }
}
export default Todos;
