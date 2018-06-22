import React, {Component} from 'react';
import ModalBox from "./ModalBox"

export default class CreateContactButton extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.openModal} id="crear-contacto"><span className="oi oi-plus"/>Crear Contacto
                </button>
                <ModalBox/>
            </div>
        );
    }
}