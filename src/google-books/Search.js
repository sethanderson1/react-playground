import React from 'react';
import SearchBar from './SearchBar';

export default class Search extends React.Component {

    render() {


        return (
            <div>
                search component
                <SearchBar
                handleSearchTerm={this.props.handleSearchTerm}
                />
                {/* <PrintType />
                <BookType /> */}
            </div>
        )
    }
}