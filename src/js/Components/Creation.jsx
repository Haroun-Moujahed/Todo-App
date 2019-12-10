import React, { Component } from "react";
import { connect } from "react-redux";
import addArticle from "../actions/indexActions";

const mapActionsToProps = {
  addArticle: addArticle
};
export class ConnectedCreation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.state.input
      ? this.props.addArticle({
          input: this.state.input,
          id: Date.now(),
          isComplete: false
        })
      : alert("empty task");
    this.setState({ input: "" });
  };
  render() {
    return (
      <div>
        <section className="container-fluid add-area">
          <div className="row">
            <div className="col-sm-10 add-elements">
              <h1>To-Do App!</h1>
              <p>add new To-do</p>
              <form onSubmit={e => this.handleSubmit(e)}>
                <input
                  type="text"
                  id="input"
                  value={this.state.input}
                  onChange={e => this.handleChange(e)}
                ></input>
              </form>
              <button
                type="button"
                className="btn btn-success"
                style={{ border: "2px white solid" }}
                id="add"
                onClick={this.handleSubmit}
              >
                Add
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const Creation = connect(null, mapActionsToProps)(ConnectedCreation);
export default Creation;
