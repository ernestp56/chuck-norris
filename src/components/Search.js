import React, { Component } from 'react';
import JokeCard from './JokeCard';
import './style/Container.css'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = ({ jokes: [], searchValue: this.props.searchValue })

        this.renderJokes.bind(this)
    }

    componentDidMount() {
        const url = 'https://api.chucknorris.io/jokes/search?query=' + this.state.searchValue;
        fetch(url)
            .then(res => res.json())
            .then(data => this.setState({ jokes: data }))
            .catch((err) => {
                console.log(err)
            })
    }

    renderJokes() {
        return this.state.jokes.result.map((joke, index) => {
            return (
                <JokeCard key = { index } joke = { joke } />
            ) 
        })
    }

    render() {
        return(
            <div className='container-wrapper'>
                {this.props.searchValue.length > 2 ? (
                    <div>
                        <div className='title'>Searched by word: {this.state.searchValue}</div>
                        {this.state.jokes.length !== 0 ? this.renderJokes() : 'loading...'}
                    </div>
                ) : (
                    <div>Too short search query</div>
                )}
            </div>
        )
    }
}

export default Search