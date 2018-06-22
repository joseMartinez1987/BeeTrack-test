import React, {Component} from "react";

export default class UserNameCell extends Component {
    render() {
        return (
            <div>
                <img src={this.props.userImage} alt=""/>
                <p className="bold">{this.props.userName}</p><br/>
                <a href="#" className="eliminar">Eliminar</a>
            </div>
        )
    }
}