import React from 'react';

const apiKey = 'AIzaSyAIG8uWMZmn5qAP_boGoD8chYEcrYw5FPc';

export default class SearchBar extends React.Component {

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         searchTerm: ''
    //     }
    // }

    // handleSubmit= (e) => {
    //     e.preventDefault();
    //     console.log('handleSubmit() called')
    //     // const searchTerm = e.target.value;
    //     const searchTerm = this.state.searchTerm;
    //     console.log('searchTerm',searchTerm)
    //     const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${apiKey}`;
    //     console.log('url',url)

    //     // fetch(url)
    //     // .then(response => {
    //     //     if (!response.ok) {
    //     //         throw new Error('something went wrong, please try again later')
    //     //     } 
    //     //     return response.json();
    //     // })
    //     // .then(data => {
            
    //     // })

    // }

    // handleChange=(e)=>{
    //     this.setState({
    //         searchTerm: e.target.value
    //     })
    //     console.log(this.state.searchTerm)
    // }

    render() {
        return (
            <div>
                <form 
                // onSubmit={this.handleSubmit}
                >
                    <label htmlFor='search'>Search: </label>
                    <input
                        type='text'
                        id='search'
                        onChange={this.props.handleSearchTerm}
                        placeholder='Infinite Jest'
                        autoFocus
                    />
                    <button type="submit">
                        Search
                    </button>
                </form>

            </div>
        )
    }

}