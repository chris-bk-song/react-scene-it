import React, { Component } from 'react';
import styles from './MovieSearch.module.css';
import MoviePoster from './MoviePoster';

export default class MovieSearch extends Component {
  constructor(props) {
    super(props)

    this.state = {
      movieTitle: '',
      movies: [],
    }
    
  }

  handleFormSubmit = (e) => {
    const title = this.state.movieTitle
    e.preventDefault();
    fetch(`https://www.omdbapi.com/?apikey=b43843a0&s=${title}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.Search) {
          this.setState({
            movies: data.Search
          })
        }
      })
  }

  handleChange = (e) => {
    this.setState({
      movieTitle: e.target.value
    })
  }

  render() {
    return (
      <div className={styles.Background}>
        <header className={styles.Header}>
          <h1>Scene It II</h1>
          <p>Search for movies you want to watch</p>
          <p>Save them to your list</p>
        </header>
        <form onSubmit= { this.handleFormSubmit }>
          <label htmlFor="moviesearch"></label>
          <input className={styles.SearchInput} type="text" id="moviesearch" name="moviesearch" value={ this.state.movieTitle } onChange={ this.handleChange } placeholder="Search for movies!"/>
          <button className={styles.SearchButton} type="submit">Movie Search</button>
        </form>
        <div>
          { this.state.movies.map((movie, index ) => {
            return (
              <MoviePoster movie={movie} key={index} />
            )
          })}
        </div>
        <div>
          <button className={styles.LinkButton}>go to my savelist</button>
        </div>
      </div>
    )
  }
}