import React, {Component} from 'react';

export default class UserInfoTableHeader extends Component {
    render(){
        return (
            <div className="nombre-descripcion">
                <p className="bold">Nombre</p>
                <p className="descripcion bold">Descripcion</p>
            </div>
        );
    }
}