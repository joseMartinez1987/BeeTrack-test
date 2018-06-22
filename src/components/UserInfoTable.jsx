import React, {Component} from "react";
import UserInfoTableHeader from "./UserInfoTableHeader";
import UserNameCell from "./UserNameCell";
import UserDescriptionCell from "./UserDescriptionCell"
import ChangePages from "./ChangePages";


export default class UserInfoTable extends Component {
    render() {
        return (
            <div className="container">
                <UserInfoTableHeader/>
                {this.renderRows()}
                <ChangePages/>
            </div>
        );
    }

    renderRows() {
        let rows = [];
        console.log(this.props.users);
        for (let i = 0; i < this.props.users.length; i++) {
            rows.push(<UserNameCell key={this.props.users[i].id} userName={this.props.users[i].name}
                                    userImage={this.props.users[i].photo}/>);
            rows.push(<UserDescriptionCell key={this.props.users[i].id} value={this.props.users[i].description}/>);
        }
        return rows;
    }
}