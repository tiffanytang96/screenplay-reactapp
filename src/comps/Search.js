import React, { useState } from 'react';
import { BASE_URL, API_KEY, DEFAULT_LANGUAGE, DEFAULT_PAGE } from '../globals/variables';
import SearchResults from './SearchResults';
import { moviesObj } from '../utilities/moviesMaker';

const Search = (props) => {

  const [md, setMd] = useState(null);

  const handleTextchange = (e) => {
    if( e.target.value.length >= 2){
      props.handleSearchOpen();
      const fetchMovies = async () => {
        const res = await fetch(`${BASE_URL}search/movie?${API_KEY}${DEFAULT_LANGUAGE}&query=${e.target.value}${DEFAULT_PAGE}&include_adult=false`);
        const data = await res.json();
        const md = moviesObj(data.results);
        setMd(md);
      }

      fetchMovies();
    }else{
      setMd(null);
    }
  }

  const handleCloseResults = () => {
    document.getElementById('foo').value = "";
    setMd(null);
  }

  return (
    <div className='search-bar'>
      <label className='sr-only'>Search</label>
      <input type="text" id="foo" name="search" placeholder='Search...' onChange={handleTextchange} />
     {  props.open === false || md !== null  && <SearchResults movieObj={md} closeResults={handleCloseResults} stayopen={props.handleSearchOpen}/> }
    </div>
  );
}


export default Search;
