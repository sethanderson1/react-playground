import React from 'react';
import BookItem from './BookItem';

export default class BookList extends React.Component {

    render() {
        const books = this.props.state.books
        const bookFirstEl = books[0]
        console.log('bookFirstEl', bookFirstEl)

        const bookList = bookFirstEl
            ? Object.values(bookFirstEl).map((book) => {
                let img;
                let title;
                let authors;
                let textSnippet;
                let url;
                if (book.volumeInfo.imageLinks) {
                    if (book.volumeInfo.imageLinks.thumbnail) {
                        img = <img src={book.volumeInfo.imageLinks.thumbnail}
                            alt={book.volumeInfo.title}
                        />
                    }
                    // ask tudor about this. about best way to implement logic
                } else {
                    img = <img src={""}
                        alt={book.volumeInfo.title}
                        className="book-img"
                    />
                }

                if (book.volumeInfo.title) {
                    title = <h2>{book.volumeInfo.title}</h2>
                } else {
                    title = <h2>{'no title found'}</h2>
                }

                if (book.volumeInfo.authors) {
                    authors = <h3>{book.volumeInfo.authors}</h3>
                } else {
                    authors = <h3>{'no authors found'}</h3>
                }

                if (book.searchInfo) {
                    if (book.searchInfo.textSnippet) {
                        textSnippet = <p>{book.searchInfo.textSnippet}</p>
                    }
                } else {
                    textSnippet = <p>{'no textSnippet found'}</p>
                }
                url = book.volumeInfo.infoLink;
                
                return (
                    <BookItem 
                        img={img}
                        title={title}
                        authors={authors}
                        textSnippet={textSnippet}
                        url={url}
                    />
                )
            })
            : null;
        console.log('bookList', bookList)

        return (
            <div>
                {bookList}
            </div>
        )
    }

}