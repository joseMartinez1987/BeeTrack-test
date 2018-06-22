import React, {Component} from 'react';
import './App.css';
import SearchBar from "./components/SearchBar";
import CreateContactButton from "./components/CreateContactButton";
import CreateUserForm from "./components/CreateUserForm";
import UserInfoTable from "./components/UserInfoTable";
import ModalBox from "./components/ModalBox";



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            search: "",
            user: {
                name: "",
                photo: "",
                description: ""
            }
        };


        this.loadUser();
        console.log(this.state.users);
        this.searchFunction = this.searchFunction.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    openModal() {
        console.log("voy abrir");
    }

    render() {
        return (
            <div className="App">
                <SearchBar searchFunction={this.searchFunction}/>
                <CreateContactButton openModal={this.openModal}/>
                <UserInfoTable users={this.state.users}/>
                <CreateUserForm handleSubmit={this.handleSubmit} onChangeInput={this.onChangeInput}/>
                <ModalBox/>
            </div>


        );
    }

    searchFunction(event) {
        console.log(event.target.value);
        this.loadUser(event.target.value);
    }

    loadUser(query) {
        let customQuery = query ? ("?q=" + query) : "";
        fetch("http://localhost:3000/api/users" + customQuery).then(data => {
            data.json().then(jsonData => {
                console.log(jsonData);
                this.setState({users: jsonData});

            })
        })
    }

    handleSubmit() {
        fetch('http://localhost:3000/api/users', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(this.state.user)
        });
        console.log("Submit");
    };


    onChangeInput(event, fieldName) {
    this.state.user[fieldName] = event.target.value;
        console.log(this.state.user);


    }
}


export default App;
