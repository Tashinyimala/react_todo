import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layout/Header'
import ToDos from './components/ToDos';
import AddToDo from './components/AddToDo';
import About from './components/pages/About';
import axios from 'axios';
import './App.css';
// import uuid from 'uuid';

const url = 'https://jsonplaceholder.typicode.com/todos';

class App extends Component {
  state = {
    todos: []
  }

  // Toggle Complete
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }

      return todo;
    })});
   }  

  // Delete toDo
  deleteTodo = (id) => {
    axios.delete(url+`/${id}`)
    .then(response => this.setState({todos:[...this.state.todos
      .filter(todo => todo.id !== id)] }));
  }

  // Add toDo
  addToDo = (title) => {
    // const newToDo = {
    //   id: uuid.v4(),
    //   title,
    //   completed: false
    // }

    axios.post(url, {
      title,
      completed: false
    })
      .then(response => this.setState({
        todos: [...this.state.todos, response.data]
      }));
  }

  componentDidMount() {
     axios.get(url+'?_limit=10')
        .then(response => this.setState({todos: response.data}));
  }

  render() {
    return (
    <Router>
      <div className="App">
        <div className="container">
          <Header />

          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddToDo addToDo={this.addToDo}/>
              <ToDos todos={this.state.todos} 
                markComplete={this.markComplete} 
                deleteTodo={this.deleteTodo}/>
            </React.Fragment>
          )} />

          <Route path="/About" component={About} />
        </div>
      </div>
     </Router>
    );
  }
}

export default App;
