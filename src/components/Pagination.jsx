import React, {Component} from "react";


export default class Pagination extends Component {


    render() {

        return (
            <div>
                <h1> hola</h1>

                    {this.test()}

            </div>
        )
    }

    test = () => it{
        const {users, currentPage, allPerPages} = this.props;
        const indexOfLasusers = currentPage * allPerPages;
        const indexOfFirstusers = indexOfLasusers - allPerPages;
        const currentUsers = users.slice(indexOfFirstusers, indexOfLasusers);
        this.test = <li key={2 * 2}>Probando</li>;
        console.log(currentUsers);
        this.renderUsers = currentUsers.map((user, index) => {
            console.log(user)
            return <p key={index}>{user}</p>;
        })
        return this.renderUsers;
    }


}