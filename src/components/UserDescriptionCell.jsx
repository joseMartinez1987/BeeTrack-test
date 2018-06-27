import React,{Component} from "react";


export default class UserDescriptionCell extends Component {
    render() {
        return (
            <div>
                <p className="descripcion-contact">{this.props.value}</p>
            </div>
        );
    }
}

