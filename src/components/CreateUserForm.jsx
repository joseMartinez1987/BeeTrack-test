import React, {Component} from 'react';


export default class CreateUserForm extends Component {
    render() {
        return (
            <div className="formulario">
                <p className="agregar-contacto">Agregar nuevo contacto</p>
                <form onSubmit={this.props.handleSubmit}>
                    <label htmlFor="">URL imagen de perfil*</label>
                    <br/>
                    <input onChange={(event) => this.props.onChangeInput(event, "photo")} type="text" required/>
                    <br/>
                    <label htmlFor="nombre">Nombre*</label>
                    <br/>
                    <input onChange={(event) => this.props.onChangeInput(event, "name")} type="text" name="" required/>
                    <br/>
                    <label htmlFor="">Descripcion</label>
                    <br/>
                    <textarea onChange={(event) => this.props.onChangeInput(event, "description")} name="" id=""
                              cols="61" rows="5" required/>
                    <br/>
                    <input type="submit" className="btn"/>
                </form>
            </div>
        );
    }
}