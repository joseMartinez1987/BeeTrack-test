import React, {Component} from "react";

export default class ChangePages extends Component {
    render() {
        return (
            <nav className="main-pagination" aria-label="...">
                <ul className="pagination">
                    <li className="page-item">
                        <a className="page-link" href="#"><span
                            className="glyphicon glyphicon-arrow-left"/>Anterior</a>
                    </li>
                    <li className="page-item derecha">
                        <a className="page-link" href="#">Siguiente <span className="glyphicon glyphicon-arrow-right"/></a>
                    </li>
                </ul>
            </nav>

        );
    }
}