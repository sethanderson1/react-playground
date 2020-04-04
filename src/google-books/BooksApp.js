import React, { Component } from 'react';
import Search from './Search'
import BookList from './BookList'

// const apiKey = 'AIzaSyAIG8uWMZmn5qAP_boGoD8chYEcrYw5FPc';


export default class BooksApp extends Component {

    constructor(props) {
        super(props)
        this.state = {
            searchTerm: '',
            printType: [
                'all',
                'books',
                'magazines'
            ],
            bookType: [
                "partial",
                "paid-ebooks",
                "full",
                "free-ebooks",
                "ebooks"
            ],
            apiKey: 'AIzaSyAIG8uWMZmn5qAP_boGoD8chYEcrYw5FPc',
            books: [],
            selectedPrintType: 'all',
            setSelectedBookType: 'free-ebooks'
        }
    }

    handleChange = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
        console.log(this.state.searchTerm)
    }

    setSelectedPrintType = (selected) => {
        this.setState({
            selectedPrintType: selected
        });
    }

    setSelectedBookType = (selected) => {
        this.setState({
            setSelectedBookType: selected
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('handleSubmit() called')
        // const searchTerm = e.target.value;
        const searchTerm = this.state.searchTerm;
        console.log('searchTerm', searchTerm)
        const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${this.state.apiKey}&printType=${this.state.selectedPrintType}&filter=${this.state.setSelectedBookType}`;
        console.log('url', url)
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('something went wrong, please try again later')
                }
                return response.json();
            })
            .then(data => {
                console.log('fetch data', data)
                this.setState({
                    books: [{ ...data.items }]
                })
                console.log('state', this.state)
            })
            .catch(err => {
                this.setState({
                    error: err.message
                })
            })
    }

    render() {

        return (
            <div>
                <h1>Google Books Search</h1>
                <Search
                    handleSearchTerm={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    printType={this.state.printType}
                    bookType={this.state.bookType}                    
                    setSelectedPrintType={this.setSelectedPrintType}
                    setSelectedBookType={this.setSelectedBookType}
                />
                <BookList
                    state={this.state}
                />
            </div>
        )
    }


}