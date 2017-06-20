import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';
import Buttons from './Buttons';
import InputHello from './InputHello';
import PassCheck from './PassCheck';
import Timer from './Timer';
import ProgressBar from './ProgressBar';
import LoadMoreBlocks from './LoadMoreBlocks';

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
            todoList.push(e.target.value);
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
          <div className="container">
              <h2 className="left">Задание 1: </h2>
              <p className="left">Написать простой To Do List на react</p>
              <p className="left">При нажании на Enter в инпуте текст должен добавляться к списку заданий</p>
              <p className="left">При нажатии на кнопку DEL, - удалять соответствующую строку.</p>

          <div className="answer center">
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

              <Buttons />
              <InputHello />
              <PassCheck />
              <Timer />
              <ProgressBar />
              <LoadMoreBlocks />

          </div>

      </div>
    );
  }
}

export default App;
