import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        }
    }
    componentDidMount() {
        axios.get('http://localhost:5000/users/')
            .then(res => console.log(res.data))
    }
    onChange = e => {
        let username = e.target.value
        this.setState(() => ({
            username
        }))
    }
    onSubmit = e => {
        e.preventDefault();
        const user = {
            username: this.state.username
        }
        console.log(user)
        axios.post('http://localhost:5000/users/add', user)
            .then(result => console.log(result.data))
        this.setState(() => ({
            username: ''
        }))
    }
    render() {
        return (
            <div>
                <h3>Créer un Utilisateur</h3>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Votre nom</label>
                        <input type="text" required value={this.state.user} onChange={this.onChange} />
                    </div>
                    <input type="submit" value="Create User" />
                </form>
            </div>
        )
    }
}
