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
            <Link to={`/edit/${props.exercise._id}`}>edit</Link> | <a href="#" onClick={() => {props.deleteExercise(props.exercise._id)}}>delete</a>
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
                this.setState(() => ({
                    exercises: result.data
                }))
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
                        {this.exerciseList()}
                    </tbody>
                </table>
            </div>
        )
    }
}
