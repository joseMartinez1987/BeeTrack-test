import React, {Component} from 'react';


export default class SearchBar extends Component {
    render() {
        return (
            <a href="#">
                <span className="oi oi-magnifying-glass"/>
                <input onChange={this.props.searchFunction} type="text" id="buscador"
                       placeholder="Buscar contacto...."/>
            </a>);
    }
}