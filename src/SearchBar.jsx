import React from 'react';

function SearchBar({ onSearch }) {
    const handleInputChange = (event) => {
        onSearch(event.target.value); 
    };

    console.log('SearchBar is rendering');
    return (
        <input
            type="text"
            placeholder='Search for player ...'
            onChange={(e) => onSearch(e.target.value)}
            style={{
                padding: '10px',
                fontSize: '16px',
                width: '100%',
                maxWidth: '400px',
                margin: '10px 0',
            }}
        />
    );
}

export default SearchBar;