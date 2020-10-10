import React, { Component } from 'react';
import './App.css';
import Categories from './components/Categories'
import RandomJoke from './components/RandomJoke';
import Search from './components/Search'

class App extends Component {
  constructor() {
    super();
    this.state = { searchValue: '' }
  }

  handleChange(e) {
    this.setState({ input: e.target.value });
  }

  handleClick() {
    this.setState({ searchValue: this.state.input });
  }

  clearInput() {
    this.setState({ searchValue: '', input: '' })
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
          />
          <input
            type="button"
            value="Search"
            onClick={this.handleClick.bind(this)}
          />
          {this.state.searchValue ? <div className='container-padding'><input type="button" value="Go back to categories" onClick={this.clearInput.bind(this)} /></div> : <div></div>}
        </header>
        <RandomJoke />
        {this.state.searchValue ? (
            this.state.searchValue && (this.state.searchValue === this.state.input) ? 
              <Search searchValue = { this.state.searchValue } /> : <div className='container-padding'>Press Search to see the results</div>
        ) : (
          <Categories />
        )}
      </div>
    );
  }
}

export default App;
