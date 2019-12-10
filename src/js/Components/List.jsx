import React from "react";
import { connect } from "react-redux";
import {
  removeArticle,
  completeArticle,
  editArticle
} from "../actions/indexActions";
import EditModal from "./EditModal.jsx";
import "./List.css";

const mapStateToProps = state => {
  return { articles: state.articles };
};
const mapActionsToProps = {
  removeArticle: removeArticle,
  completeArticle: completeArticle,
  editArticle: editArticle
};
const ConnectedList = ({
  articles,
  removeArticle,
  completeArticle,
  editArticle
}) => (
  <section className="container-fluid elements-area">
    <div className="row">
      <div className="col-sm-10 offset-sm-1 elements-todo" id="elementsArea">
        <h1>Let's get some work done</h1>
        <ul id="ul">
          {articles.map((el, i) => (
            <li className="todoTask" key={i}>
              <span
                style={{
                  textDecoration: el.isComplete ? "line-through" : "none"
                }}
              >
                {el.input}
              </span>
              <div className="taskButtons">
                <button
                  className="btn btn-danger"
                  onClick={() => removeArticle(i)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-success"
                  onClick={() => completeArticle(i)}
                >
                  {!el.isComplete ? "Complete" : "Undo"}
                </button>
                <EditModal buttonLabel="Edit" toEdit={el.input} index={i} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

const List = connect(mapStateToProps, mapActionsToProps)(ConnectedList);

export default List;
