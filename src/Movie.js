import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Movie extends Component{
    constructor(){
        super();
        this.state = {
            movies: [],
            searchTerm: "spider man",
            error: false
        };

        this.handleClick = this.handleClick.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
    }

    componentDidMount(){
        fetch('https://www.omdbapi.com/?s=' + this.state.searchTerm + '&apikey=51157d3')
        .then(results => results.json())
        .then(data => {
            this.setState({movies: data.Search});
        })
    }

    handleClick() {
        fetch('https://www.omdbapi.com/?s=' + this.state.searchTerm + '&apikey=51157d3')
        .then(results => results.json())
        .then(data => {
            if(data.Error){
                this.setState(
                    {
                        movies: [],
                        error: true,
                        searchTerm: this.state.searchTerm
                    });
            }
            else{
                this.setState({movies: data.Search});
            }
        })
      }

      onNameChange(event) {
        this.setState({
            searchTerm: event.target.value,
            movies: this.state.movies,
            error: false,
        });
      }

    render(){
        return (
            <div>
                <h1 className='header'>Search for Movies, TV Series and More!</h1>
                <div className="center container">
                    <div className="center">
                        <div>
                            <input className="searchBox" type="text" value={this.state.searchTerm} onChange={this.onNameChange}/>
                        </div>
                    </div>
                    
                    <div className="center">
                        <div>
                            <input className="btn btn-primary" type="button" value="Search By Title" onClick={this.handleClick} />
                        </div>
                    </div>
                    {
                        this.state.movies.map(movie => (
                        <div key={movie.imdbID} className="movie card center mx-auto">
                            <div className="movie top">
                                <img className="poster" alt={movie.Title + " poster"} src={movie.Poster === "N/A" ? "https://s18672.pcdn.co/wp-content/uploads/2018/01/Movie.jpg" : movie.Poster}></img>
                            </div>
                            <div className="movie bottom">
                                <p className="h2">{movie.Title}</p>
                                <p>({movie.Year}) {movie.Type}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Movie;