import React, { Component } from "react";
import axios from "axios";
//import './EditTodos.css';

class EditTodos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.deleteTodo = this.deleteTodo.bind(this);
  }
  componentDidMount() {
    axios.get("/api/todos").then(res => {
      this.setState({ todos: res.data });
    });
  }
  deleteTodo(id) {
    axios
      .delete(`/api/todos/${id}`)
      .then(res => this.setState({ todos: res.data }))
      .catch(console.log);
  }

  render() {
    const todos = this.state.todos.map(todo => (
      <div key={todo.id} className="">
        <button onClick={e => this.deleteTodo(todo.id)}>{todo.todo}</button>
      </div>
    ));
    return <div className="">{todos}</div>;
  }
}
export default EditTodos;
