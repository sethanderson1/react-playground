import React from 'react';

export default class SearchBar extends React.Component {

    render() {
        return (
            <div>
                <form 
                onSubmit={this.props.handleSubmit}
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