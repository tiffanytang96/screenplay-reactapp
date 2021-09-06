import React, { useState, useEffect } from 'react';
import MovieGallery from './MovieGallery';
import { BASE_URL, API_KEY, API_POPULAR, API_TOP_RATED, API_UPCOMING, API_NOW_PLAYING, DEFAULT_REGION, DEFAULT_LANGUAGE, DEFAULT_PAGE } from '../globals/variables';
import { moviesObj } from '../utilities/moviesMaker';
import { getStorage, removeFromStorage } from '../utilities/storageMaker';
import { FaChevronLeft,  FaChevronRight } from 'react-icons/fa';
import { trackPromise } from 'react-promise-tracker';
import Loader from 'react-loader-spinner';

const Home = (props) => {


	const [md, setMd] = useState(null);

	let initialValue = props.selectedValue;
  const [selectedValue, setValue] = useState(initialValue);
  const [pageNum, setpageNum] = useState(props.pageNum);
  const [loading,setLoading] = useState(true);

	const handleChangeGallery = (e) =>{
		e.preventDefault();
		if( e.target.value === 'top-rated' ){
      setValue(API_TOP_RATED);
      setpageNum(1);
		}else if(e.target.value === 'upcoming'){
			setValue(API_UPCOMING);
      setpageNum(1);
		}else if( e.target.value === 'now-playing'){
			setValue(API_NOW_PLAYING);
      setpageNum(1);
		}else {
			setValue(initialValue);
		}
	}

  useEffect( ()=>{
    const timer = setTimeout(() => {
      const fetchMovies = async () => {
          const res = await fetch(`${BASE_URL}${selectedValue}${API_KEY}${DEFAULT_LANGUAGE}${DEFAULT_PAGE}${pageNum}${DEFAULT_REGION}`);
          const data = await res.json();
          const md = moviesObj(data.results);
          setMd(md);
          setLoading(false);
          console.log(data);
      }
    fetchMovies();}, 800);
    },[selectedValue, pageNum]) 
    

  const [favs, setFavs] = useState(getStorage());
  const [watchlist, setWatchList] = useState(getStorage('watch-list'));
  
  const removeFav = (movieObj) => {
    removeFromStorage(movieObj, "favourites");
    let updatedList = getStorage('favourites');
    setFavs(updatedList);
  }

  const removeWatchList = (movieObj) => {
    removeFromStorage(movieObj, "watch-list");
    let updatedList = getStorage('watch-list');
    setWatchList(updatedList);
  }

  function nextPage() {
    window.scrollTo(0, 0);
    setpageNum(pageNum + 1);
  }

  function prevPage() {
    window.scrollTo(0, 0);
    setpageNum(pageNum - 1);
  }

  return (
    
    <div className='home-section'>
        <h1>All Movies</h1>
        <div className='top-home-functions'>
          <form>
            <select onChange={handleChangeGallery} name="selectItem" id="selectItem" className='options-select-bar'>
                <option value="popular">Popular</option>
                <option value="top-rated">Top Rated</option>
                <option value="upcoming">Upcoming</option>
                <option value="now-playing">Now Playing</option>
            </select>
          </form>
          <div className='top-pagination-div pagination-div'>
            { pageNum == 1 ? <button className='disabled-btn pagination prev' disabled> <FaChevronLeft className="prev-icon"/> </button> : <button className="pagination prev" onClick={() => setpageNum(pageNum - 1)}><FaChevronLeft className="prev-icon"/> </button>}
            
            <p>{pageNum}</p>
            
            {selectedValue == API_UPCOMING ? <button className='disabled-btn pagination next' disabled>  <FaChevronRight className="next-icon"/></button> : <button className='pagination next' onClick={() => setpageNum(pageNum + 1)}> <FaChevronRight className="next-icon"/></button>  }
          </div>
        </div>
       
        {loading ? 
          <Loader 
            type="BallTriangle"
            className="loader"
            color="#5EF2AF"
            height={700}
            width={120}
          /> : <MovieGallery movies={md} removeFav={removeFav} removeWatchList={removeWatchList} />}
        
        <div className='bot-pagination-div pagination-div'>
          { pageNum == 1 ? <button className='disabled-btn pagination prev' disabled><FaChevronLeft className="prev-icon"/> </button> : <button className="pagination prev" onClick={() => prevPage()}><FaChevronLeft className="prev-icon"/> </button>}
          
          <p className='bot-num'>{pageNum}</p>

          {selectedValue == API_UPCOMING ? <button className='disabled-btn pagination next' disabled>  <FaChevronRight className="next-icon"/></button> : <button className='pagination next' onClick={() => nextPage()}>  <FaChevronRight className="next-icon"/></button>  }
        </div>
    </div>
  );
}



Home.defaultProps={
  selectedValue : API_POPULAR,
  pageNum : 1
}

export default Home;
