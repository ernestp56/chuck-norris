import React, { Component } from 'react';
import './App.css';
import Categories from './components/categories/categories'
import RandomJokeCard from './components/random-joke-card/random-joke-card';
import Search from './components/search/search'

class App extends Component {
  constructor() {
    super();
    this.state = { searchValue: '' };

    this.handleKeyDown.bind(this);
  }

  handleChange(e) {
    this.setState({ input: e.target.value });
  }

  handleClick() {
    this.setState({ searchValue: this.input });
  }
  
  clearInput() {
    this.setState({ searchValue: '', input: '' })
  }
  
  handleKeyDown(e) {
    if (e.key === 'Enter') {
      this.setState({ searchValue: e.target.value });
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className='title'>
            Chuck Norris Jokes
          </div>
          <input
            type="text"
            placeholder="Search by word..."
            onChange={this.handleChange.bind(this)}
            onKeyPress={this.handleKeyDown.bind(this)}
          />
          <input
            type="button"
            value="Search"
            onClick={this.handleClick.bind(this)}
          />
          {this.state.searchValue ? <div className='container-padding'><input type="button" value="Go back to categories" onClick={this.clearInput.bind(this)} /></div> : <div></div>}
        </header>
        <RandomJokeCard />
        {this.state.searchValue ? (
              <Search searchValue = { this.state.searchValue } />
        ) : (
          <Categories />
        )}
      </div>
    );
  }
}

export default App;
