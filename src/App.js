import React, {Component} from 'react';
import './App.css';
import SearchBar from "./components/SearchBar";
import CreateContactButton from "./components/CreateContactButton";
import UserInfoTable from "./components/UserInfoTable";
import ModalBox from "./components/ModalBox";
import Pagination from "./components/Pagination";



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            search: "",
            user: {
                name: "",
                photo: "",
                description: "",
                id: "",
            },
            openModal: false,
            currentPage: 1,
            allPerPages:3,

        };
        this.loadUser();
        console.log(this.state.users);
        console.log(this.state.users.id);
        this.searchFunction = this.searchFunction.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changePage = this.changePage.bind(this);

    }
    changePage(event) {
        this.setState({currentPage: Number(event.target.id)
        });
    }

    openModal = () => {
        console.log(this);
        this.setState({openModal: true})
        console.log("voy abrir");
    };
    closeModal = () => {
        console.log("cierro");
        this.setState({openModal: false});
    }

    render() {
        return (
            <div className="App">
                <ModalBox openModal={this.state.openModal} closeModal={this.closeModal} handleSubmit={this.handleSubmit}
                          onChangeInput={this.onChangeInput}/>
                <SearchBar searchFunction={this.searchFunction}/>
                <CreateContactButton openModal={this.openModal}/>
                <UserInfoTable users={this.state.users} deleteContact={this.deleteContact}/>
                <Pagination users={this.state.users} currentPage={this.state.currentPage} allPerPages={this.state.allPerPages}/>

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
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.state.user)
        }).then(()=> {
            this.setState({
              users:[...this.state.users, this.state.user]
            })
            this.closeModal()
        })

        console.log("Submit");
    };

    deleteContact = (id) => {
        console.log(id);
        fetch('http://localhost:3000/api/users/'+id, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        }).then(()=>{
            let arrayUser = this.state.users.filter((user)=> {
               console.log(user.id != id)
                return user.id != id;
            })
            this.setState({users:arrayUser})
        })

    }


    onChangeInput(event, fieldName) {
        this.state.user[fieldName] = event.target.value;
        console.log(this.state.user);

    }
}



export default App;
