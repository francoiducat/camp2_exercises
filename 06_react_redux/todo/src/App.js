import React, { Component } from 'react';
import './App.css';
import Table from './Table';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value : '',
      tasksList : [{content : "Task Exemple", completed:true}]
    }
  }


  modifyCompletedState = (indexToModify) => {

    const table = this.state.tasksList.map( (element,index) => {

       if(element.completed && index === indexToModify) {
          element.completed = false;
          return element;
       } else if(index === indexToModify) {
         element.completed = true
         return element;
       } else {
         return element;
       }
    })

    this.setState({tasksList: table});

  }

  removeCompletedTasks = () => {
    const table = this.state.tasksList.filter(element => !element.completed);

    this.setState({tasksList: table});

  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let table = this.state.tasksList;
    table.push({content : this.state.value, completed : false});
    this.setState({tasksList: table, value : ''});
}

render() {
  return (
    <div className="container mt-2">
      <div className="container">
        <div className="d-flex justify-content-center p-2">
          <form onSubmit={this.handleSubmit}>
          <input type="text" required placeholder="Take a note" value={this.state.value} onChange={this.handleChange}/>
          <button type="submit" className="btn btn-success" value="Submit">Add task</button>
          </form>
        </div>

      </div>
    <Table tasksList={this.state.tasksList} completed={this.modifyCompletedState}/>
    <button className="btn btn-danger float-right" onClick={this.removeCompletedTasks}>Remove Completed Tasks</button>
    </div>
  );
}
}

export default App;
