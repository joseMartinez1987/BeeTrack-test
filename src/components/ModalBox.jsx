import React from "react";
import {render} from "react-dom";
import Modal from "react-responsive-modal";
import CreateUserForm from "./CreateUserForm";

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
};

export default class ModalBox extends React.Component {

    render() {

        return (

            <Modal open={this.props.openModal} onClose={this.props.closeModal} center>
                <CreateUserForm handleSubmit={this.props.handleSubmit} onChangeInput={this.props.onChangeInput}/>
            </Modal>

        )
    }
}

// render(<ModalBox/>, document.getElementById("root"));