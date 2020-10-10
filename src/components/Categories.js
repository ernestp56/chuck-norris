import React, { Component } from 'react';
import './style/Categories.css';
import Category from './Category';

class Categories extends Component {
    constructor() {
        super();
        this.state = { categories: [] }
    }

    componentDidMount() {
        fetch('https://api.chucknorris.io/jokes/categories')
            .then(res => res.json())
            .then(data => this.setState({ categories: data }))
    }

    listCategories() {
        return this.state.categories.map((category, index) => {
            return (
                <Category key={ index } category={ category } />
            )
        })
    }

    render() {
        return (
            <div>
                <div className='category-title'>Categories</div>
                <div className='categories-wrapper'>{this.listCategories()}</div>
            </div>
        )
    }

}

export default Categories