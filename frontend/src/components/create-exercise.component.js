import React, { Component } from 'react';
import { DatePicker} from "antd";
import moment from 'moment';
import axios from "axios";

export default class CreateExercises extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            description: '',
            duration: 0,
            date: new Date(),
            users: []
        }
        this.onChange = this.onChange.bind(this)
    }

    componentDidMount() {
        axios.get('http://localhost:5000/users/')
            .then(response => {
                if (response.data.length) {
                    this.setState(() => ({
                        users: response.data.map(user => user.username),
                        username: response.data[0].username
                    }))
                }
            })
    }

    onChangeUserName = (e) => {
        let {name, value } = e.target
        this.setState(() => ({
            [name]: value
        }))
    }

    onChange = (date) => {
        console.log(moment(date).format('ll'))
    }

    onSubmit = e => {
        e.preventDefault();
        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        }
        axios.post('http://localhost:5000/exercises/add', exercise)
            .then(res => console.log())
    }

    // componentDidMount() {
    //     axios.get('http://localhost:5000/exercises/')
    //         .then((result) => {
    //             this.setState({
    //                 exercises: result.data
    //             })
    //         }).catch((err) => {
    //             console.log(err);
    //         });
    // }
    
    render() {
        const dateFormat = 'YYYY/MM/DD';
        return (
            <div>
                <h3>Creations des Documents</h3>
                
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Nom</label>
                        <select ref="userInput" required value={this.state.username} onChange={this.onChangeUserName}>
                            {
                                this.state.users.map(function (user) {
                                    return <option key={user} value={user}>{user}</option>
                                })
                            }
                        </select>
                    </div>
                    <div>
                        <label>Description:</label>
                        <input type="text" name="description" required value={this.state.description} onChange={this.onChangeUserName} />
                    </div>
                    <div>
                        <label>Duré de la retard  minutes</label>
                        <input type="text" name="duration" value={this.state.duration} onChange={this.onChangeUserName} />
                    </div>
                    <div>
                        <label>Date:</label>
                        <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} onChange={this.onChange} />
                    </div>
                    <div className="text-center">
                    <div className="text-center mb-3">
                  <button className="btn blue-gradient btn-block btn-rounded z-depth-1a" type="submit" color="#f3671f">
                    Ajouter
                    
                  </button>
                </div>
                </div>

                </form>
            </div>
        )
    }
}
