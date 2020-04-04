import React from 'react';

export default function BootType(props) {

    function changeSelection(value) {
        if (value === "None") {
            props.bookTypeHandler(null);
        } else {
            const bookType = props.bookType.find(bookType => bookType === value);
            props.bookTypeHandler(bookType);
            console.log('bookType',bookType)
        }
    }

    const options = props.bookType.map((bookType, index) =>
        <option value={bookType} key={index}>{bookType}</option>
    )
    return (
        <div className="book-type-selector">
            <form>
                <label htmlFor="book-type">Book Type: </label>
                <select
                    id="book-type"
                    name="book-type"
                    onChange={e => changeSelection(e.target.value)}>
                    <option value="None">Select one...</option>
                    {options}
                </select>
            </form>
        </div>
    )
}