import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { connect } from "react-redux";
import { editArticle } from "../actions/indexActions";
import "./EditModal.css";

const mapActionsToProps = {
  editArticle: editArticle
};

class ConnectedModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      modifiedText: ""
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  handleChange = e => {
    this.setState({
      modifiedText: e.target.value
    });
  };
  render() {
    return (
      <div>
        <Button color="warning" onClick={this.toggle}>
          {this.props.buttonLabel}
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Edit Movie</ModalHeader>
          <ModalBody>
            <form
              onSubmit={e => {
                e.preventDefault();
                this.toggle();
                this.props.editArticle({
                  index: this.props.index,
                  newTitle: this.state.modifiedText
                });
              }}
            >
              <input
                className="modalInput"
                defaultValue={this.props.toEdit}
                onChange={this.handleChange}
              ></input>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={() => {
                this.toggle();
                this.props.editArticle({
                  index: this.props.index,
                  newTitle: this.state.modifiedText
                });
              }}
            >
              Save
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const EditModal = connect(null, mapActionsToProps)(ConnectedModal);

export default EditModal;
