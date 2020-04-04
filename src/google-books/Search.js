import React from 'react';
import SearchBar from './SearchBar';
import PrintType from './PrintType';
import BookType from './BookType';

export default class Search extends React.Component {

    render() {
        return (
            <div>
                <SearchBar
                    handleSearchTerm={this.props.handleSearchTerm}
                    handleSubmit={this.props.handleSubmit}
                />
                <PrintType
                    printType={this.props.printType}
                    printTypeHandler={this.props.setSelectedPrintType}
                />
                <BookType
                    bookType={this.props.bookType}
                    bookTypeHandler={this.props.setSelectedBookType}
                />
            </div>
        )
    }
}