import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Movie extends Component{
    constructor(){
        super();
        this.state = {
            movies: [],
        };
    }

    componentDidMount(){
        fetch('https://www.omdbapi.com/?s=bond&apikey=51157d3')
        .then(results => results.json())
        .then(data => {
            this.setState({movies: data.Search});
        })
    }

    render(){
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Title</th>
                        <th>Year</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.movies.map(movie => (
                        <tr key={movie.imdbID}>
                            <td><img className="Poster" src={movie.Poster === "N/A" ? "https://s18672.pcdn.co/wp-content/uploads/2018/01/Movie.jpg" : movie.Poster}></img></td>
                            <td>{movie.Title}</td>
                            <td>{movie.Year}</td>
                            <td>{movie.Type}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
}


export default Movie;