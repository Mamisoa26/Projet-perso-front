import React, { Component } from 'react';
import { Link } from "react-router-dom";

import axios from 'axios';

const Exercise = props => (
    <tr>
        <td>{props.exercise.username}</td>
        <td>{props.exercise.description}</td>
        <td>{props.exercise.duration}</td>
        <td>{props.exercise.date.substring(0, 10)}</td>
        <td>
            
            
        </td>
    </tr>
)

export default class ExercisesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            exercises: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:5000/exercises/')
            .then((result) => {
                this.setState({
                    exercises: result.data
                })
            }).catch((err) => {
                console.log(err);
            });
    }
    deleteExercise = id => {
        axios.delete(`http://localhost:5000/exercises/${id}`)
            .then(res => console.log(res.data));
        this.setState(() => ({
            exercises: this.state.exercises.filter(el => el._id !== id)
        }))
    }
    exerciseList = () => {
        return this.state.exercises.map(current => {
            return <Exercise exercise={current} deleteExercise={this.deleteExercise} key={current._id} />
        })
    }
    render() {
        return (
            <div>
                <h1>Liste de personnes</h1>
                
                <table>
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.exercises.map((exo, _id) =>(
                        <tr key='_id'>
                            <td>{exo.username}</td>
                            <td>{exo.description}</td>
                            <td>{exo.duration}</td>
                            <td>{exo.date}</td>
                            <td><Link to={`/edit/:id`} className="btn btn-primary">edit</Link> | 
                            <button className='btn btn-danger' onClick={() => {this.deleteExercise(exo._id)}}>delete</button></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        )
    }
}
