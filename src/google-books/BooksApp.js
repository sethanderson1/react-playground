import React, { Component } from 'react';
import Search from './Search'
import BookList from './BookList'

export default class BooksApp extends Component {

    constructor(props) {
        super(props)
        this.state = {
            searchTerm: ''
        }
    }


    handleChange=(e)=>{
        this.setState({
            searchTerm: e.target.value
        })
        console.log(this.state.searchTerm)
    }



    render() {

        return (
            <div>
                <h1>Google Books Search</h1>
                <Search 
                handleSearchTerm={this.handleChange}
                />
                {/* <BookList /> */}
            </div>
        )
    }


}