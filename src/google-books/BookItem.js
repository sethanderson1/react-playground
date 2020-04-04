import React from 'react';
import './BookItem.css';

export default function BookItem(props) {

    return (
        <div className="book-item">
            {props.img}
            <div className="book-info">
                <a href={props.url} target={'_blank'}>{props.title}</a>
                <h3>Author: </h3>{props.authors}
                {props.textSnippet}
            </div>

        </div>
    )
}