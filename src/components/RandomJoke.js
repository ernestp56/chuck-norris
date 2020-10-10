import React, { Component } from 'react';
import JokeCard from '../components/JokeCard';

class RandomJoke extends Component {
    constructor() {
        super();
        this.state = { joke: [], fetching: false }
    }

    componentDidMount() {
        fetch('https://api.chucknorris.io/jokes/random')
        .then(res => res.json())
        .then(data => this.setState({ joke: data }))
        .catch((err) => {
            console.log(err)
        })
    }

    fetchRandom() {
        this.state.fetching ? this.setState({ fetching: false }) : this.setState({ fetching: true });
        fetch('https://api.chucknorris.io/jokes/random')
        .then(res => res.json())
        .then(data => this.setState({ joke: data, fetching: false }))
        // test
    }
    
    render() {
        return (
            <div className='container-wrapper random' onClick={this.fetchRandom.bind(this)}>
                <div className='title'>Random Joke</div>
                {this.state.joke ? ( 
                    <JokeCard joke = { this.state.joke } fetching = {this.state.fetching} />
                ) : ( 
                    <div>loading...</div>
                )}
            </div>
        )
    }
}

export default RandomJoke