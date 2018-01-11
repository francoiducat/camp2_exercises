import React, { Component } from 'react';

class Table extends Component {

  Row = (task, indexToModify) => {
    return (
      <tr key={task.content}>
        <td className={"checked" + task.completed}>{task.content}</td>
          <td>
              <input type="checkbox" checked={task.completed}  onChange={() => this.props.completed(indexToModify)} />
          </td>
    </tr>
  );
  }

  render() {
    return (
      <div className="container mt-2">
        <h1>Todo List</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Tasks</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
          {this.props.tasksList.map(this.Row)}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
