import React, { Component } from 'react';

class Category extends Component {
    constructor() {
        super();
        this.state = { joke: "", fetching: false };
    }

    fetchRandom() {
        this.state.fetching ? this.setState({ fetching: false }) : this.setState({ fetching: true });
        fetch('https://api.chucknorris.io/jokes/random?category=' + this.props.category)
        .then(res => res.json())
        .then(data => this.setState({ joke: data.value, fetching: false }))
    }


    render () {
        return (
            <div className={this.state.fetching ? 'category clicked' : 'category'} onClick={ this.fetchRandom.bind(this) }>
                <div className="category-title">{this.props.category[0].toUpperCase() + this.props.category.slice(1)}</div>
                {this.state.joke ? ( 
                    this.state.fetching ? <span className="material-icons">loop</span> : <span>{this.state.joke}</span>
                ) : ( 
                    <div className='joke-placeholder'>Click to get a random joke.</div>
                )}
            </div>
        )
    }
}

export default Category