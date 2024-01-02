/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext, useState } from 'react';
import { DarkMode } from '../src/App';

import searchIconDark from '../src/assets/search-dark.svg';
import searchIcon from '../src/assets/search-outline.svg';

function SearchBar(props) {
  const { searchedCountry, setSearchedCountry } = props;
  const { mode } = useContext(DarkMode);

  return (
    <div className={'search-container ' + mode}>
      {mode === 'light' ? (
        <img
          id="search-img"
          className={mode}
          src={searchIcon}
          alt="search-icon"
        />
      ) : (
        <img
          id="search-img"
          className={mode}
          src={searchIconDark}
          alt="search-icon"
        />
      )}
      <input
        className={mode}
        onInput={(e) => setSearchedCountry(e.target.value)}
        type="search"
        autoComplete="off"
        id="search-bar"
        placeholder="Search for a country..."
      />
    </div>
  );
}

export default SearchBar;
