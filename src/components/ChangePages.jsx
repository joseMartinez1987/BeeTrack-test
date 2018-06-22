import React, {Component} from "react";

export default class ChangePages extends Component {
    render() {
        return (
            <nav aria-label="...">
                <ul className="pagination">
                    <li className="page-item">
                        <a className="page-link" href="test-trabajo.html"><span
                            className="oi oi-arrow-left"/>Anterior</a>
                    </li>
                    <li className="page-item derecha">
                        <a className="page-link" href="#">Siguiente <span className="oi oi-arrow-right"/></a>
                    </li>
                </ul>
            </nav>

        );
    }
}