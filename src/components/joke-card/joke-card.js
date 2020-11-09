import React, { Component } from 'react';
import './joke-card.css'

class JokeCard extends Component {
    render() {
        return (
            <div className='joke-wrapper'>
                {this.props.fetching ? (
                    <span className="material-icons jokeCard">loop</span>
                ) : (
                    <div>
                        <div className='joke-category'>
                            {this.props.joke.categories ? this.props.joke.categories[0] ? this.props.joke.categories[0][0].toUpperCase() + this.props.joke.categories[0].slice(1) : 'Uncategorized' : 'Uncategorized'}
                        </div>
                        <div>{this.props.joke.value}</div>
                    </div>
                )}
            </div>
        )
    }
}

export default JokeCard