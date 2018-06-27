import React, {Component} from "react";

export default class UserNameCell extends Component {
    render() {
        return (
            <div>
                <img className="images" src={this.props.userImage} alt=""/>
                <p className="bold">{this.props.userName}</p><br/>
                <a onClick={(event)=>this.props.delete(this.props.id)} href="#" className="eliminar">Eliminar</a>
            </div>
        )
    }
}