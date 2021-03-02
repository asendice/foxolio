import React from 'react';


const SearchBar = ({ onTermSubmit, searched }) => {
  
  const onInputChange = (event) => {
    onTermSubmit(event.target.value);
  }
  return (
    <div className="ui action input">
      <form className="ui form">
        <div className="field">
          <label>Search Market</label>
          <input
            placeholder="ex) bitcoin, btc"
            value={searched}
            onChange={onInputChange}
            type="text" />
        </div>
      </form>
    </div>
  )
}

export default SearchBar;