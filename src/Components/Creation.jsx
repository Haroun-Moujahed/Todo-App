import React, { Component } from "react";

export class Creation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      tasksArr: [],
      tasksComp: []
    };
  }

  handleChange = e => {
    this.setState({
      input: e.target.value
    });
  };
  handleAdd = () => {
    if (this.state.input !== "") {
      this.setState({
        tasksArr: this.state.tasksArr.concat(this.state.input),
        tasksComp: this.state.tasksComp.concat(false),
        input: ""
      });
    } else alert("No task to add");
  };
  handleComplete = index => {
    let arr = this.state.tasksComp.slice();
    arr[index] = !arr[index];
    // let arr2 = this.state.tasksArr.slice();
    // arr2[index] = arr2[index].strike();
    this.setState({
      tasksComp: arr
      // tasksArr: arr2
    });
  };
  handleDelete = index => {
    let arr = this.state.tasksArr.slice();
    arr.splice(index, 1);
    this.setState({
      tasksArr: arr
    });
  };

  render() {
    return (
      <div>
        <section className="container-fluid add-area">
          <div className="row">
            <div className="col-sm-10 add-elements">
              <h1>To-Do App!</h1>
              <p>add new To-do</p>
              <input
                type="text"
                id="input"
                value={this.state.input}
                onChange={this.handleChange}
              ></input>
              <button
                type="button"
                className="btn btn-primary"
                id="add"
                onClick={this.handleAdd}
              >
                Add
              </button>
            </div>
          </div>
        </section>
        <section className="container-fluid elements-area">
          <div className="row">
            <div
              className="col-sm-10 offset-sm-1 elements-todo"
              id="elementsArea"
            >
              <h1>Let's get some work done</h1>
              <ul id="ul">
                {this.state.tasksArr.map((el, i) => (
                  <li className="createdElement" key={i}>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => this.handleComplete(i)}
                    >
                      {!this.state.tasksComp[i] ? "Complete" : "Undo"}
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => this.handleDelete(i)}
                    >
                      Delete
                    </button>
                    <h2
                      style={
                        this.state.tasksComp[i]
                          ? {
                              textDecorationLine: "line-through",
                              textDecorationStyle: "solid"
                            }
                          : {}
                      }
                    >
                      {el}
                    </h2>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Creation;
