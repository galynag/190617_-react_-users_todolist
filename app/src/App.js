import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';

let todoList = [];

class App extends Component {

    constructor(props){
        super(props);
        this.state = ({
                text:'',
                list: []
            });
    };
    addItem=(e) => {
        if (e.charCode === 13) {
            this.setState({text:e.target.value});
            console.log(e.target.value);
            todoList.push(e.target.value);
            console.log(todoList);
            this.setState({text:''});
        }
    };
    valueItem=(e) => {
        this.setState({text:e.target.value});
    }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Task / React</h2>
        </div>
          <h1>To Do List</h1>
        <input
            type="text"
            placeholder="type new item & press Enter"
            value={this.state.text}
            onChange={this.valueItem}
            onKeyPress={this.addItem}
        />
          <List data={todoList}/>
      </div>
    );
  }
}

export default App;
