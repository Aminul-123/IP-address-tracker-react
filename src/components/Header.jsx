import React, { useState } from 'react'
import { usePosition } from '../context/PositionProvider';

function Header() {
    const {query, setQuery} = usePosition()
    const [inputValue, setInputValue] = useState('');
    function handleSubmit (e) {
        e.preventDefault();
        if (!inputValue) return;
        console.log('hello from handleSubmit function')
        setQuery(inputValue)
    }
  return (
    <div className="header">
        <div className='header-cont'>
            <h2>IP Address Tracker</h2>
            <form className="inputField" onSubmit={handleSubmit} >
                <input type="text" placeholder='Search for any IP Address or domain' value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)} required  />
                <button> &gt; </button>
            </form>
        </div>
    </div>
  )
}

export default Header