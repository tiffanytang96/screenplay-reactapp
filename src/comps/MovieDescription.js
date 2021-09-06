import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useParams } from 'react-router-dom';
import { BASE_URL, API_KEY, DEFAULT_LANGUAGE } from '../globals/variables';
import {  changeDate, movieTags  } from '../utilities/functionsMaker';
import default_image  from '../images/no-image.png';
import { setStorage, getStorage, isItemInStorage, removeFromStorage } from '../utilities/storageMaker';
 import { movieObj } from '../utilities/moviesMaker';


const MovieDescription = (props) => {

    const { id } = useParams();
    const [selectedMovie, setSelectedMovie] = useState(null);
  
    useEffect( () => {
        const fetchMovie = async () => {
            const res = await fetch(`${BASE_URL}movie/${id}?${API_KEY}${DEFAULT_LANGUAGE}`);
            const data = await res.json();
            const md = movieObj(data);
            console.log(md);
            setSelectedMovie(md);  
        }
        fetchMovie();
  
        },[id]); 

    const [fav, setFav] = useState(props.fav);
	const [watchlist, setWatchList] = useState(props.watchlist);

    const addToFav = (selectedMovie) => {
        const newFavs = setStorage(selectedMovie, 'favourites');
        if(newFavs === false){
            return false;
        }else {
            setFav(newFavs);
        }
    }
	
	const addToWatchList = (selectedMovie) => {
		const newWatchList = setStorage(selectedMovie, 'watch-list');
		if(newWatchList === false){
			return false;
		}else {
			setWatchList(newWatchList);
		}
    }
    
	const removeFav = (selectedMovie) => {
		removeFromStorage(selectedMovie, "favourites");
		let updatedList = getStorage('favourites');
		setFav(updatedList);
	}

	const removeWatchList = (selectedMovie) => {
		removeFromStorage(selectedMovie, "watch-list");
		let updatedList = getStorage("watch-list");
		setWatchList(updatedList);
	}
  
    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
          width,
          height
        };
      }
      
    function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    
    useEffect(() => {
        function handleResize() {
        setWindowDimensions(getWindowDimensions());
        }
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    return windowDimensions;
    }

    const { height, width } = useWindowDimensions();

    return (
        <div className='movie-description'>
            { selectedMovie !== null && <div className='div-container'>
        <div className="movie-poster">
            { width >= 1080 ? <img className='poster' src={selectedMovie.poster === null ? default_image : selectedMovie.poster} />
                     : <img className='poster' src={selectedMovie.backdrop === null ? default_image : selectedMovie.backdrop} />}
            <div className="list-actions ">
                
                {isItemInStorage(selectedMovie,'favourites') === true ? <button onClick={() => {removeFav(selectedMovie)}} 
		            className='description-btn fav-btn active' id='fav-btn'></button> : 
				<button onClick={() => {addToFav(selectedMovie)}} className='description-btn fav-btn' id='fav-btn'></button>}

                {isItemInStorage(selectedMovie, "watch-list") === true ? <button onClick={() => {removeWatchList(selectedMovie)}} className='description-btn watch-btn actived' id='watch-btn'></button> : 
				<button onClick={() => {addToWatchList(selectedMovie)}} className='description-btn watch-btn' id='watch-btn'></button>}     
                
            </div>
        </div>


        <div className='spacing-div'>
        <h2 className='page-title'>{selectedMovie.title}</h2>
            <div className="description-card card">
                    <div className='description-intro'>
                        <div className='title'>
                            <h1 className='movietitle'>{selectedMovie.title}</h1>
                            <div className="year-date">
                                <h2 className='movieinfo'><strong>Release Date</strong><br/>{changeDate(selectedMovie.date)}</h2>
                                <h2 className='movieinfo'><strong>Duration</strong><br/>{selectedMovie.duration} minutes</h2>
                            </div>
                        </div>
                        <div className='rating' style={{width:'45px'}}>
                            <CircularProgressbar 
                            value={selectedMovie.rating} 
                            strokeWidth={4}
                            text={`${selectedMovie.rating}%`} 
                            styles={buildStyles({
                            pathColor:'#5EF2AF',
                            textColor:'#5EF2AF',
                            textSize: '30px',
                            strokeLinecap: 'round',
        
                            })}
                            />;
                        </div>
                    </div>
                    <div className='description-body'>
                        <p>{selectedMovie.overview}</p>

                            <div className='list-actions-desktop'>
                            {isItemInStorage(selectedMovie,'favourites') === true ? <button onClick={() => {removeFav(selectedMovie)}} className='desc-btn-desktop fav-btn-desktop active' id='fav-btn-desktop'>Remove From Favourites</button> : 
                            <button onClick={() => {addToFav(selectedMovie)}} className='desc-btn-desktop fav-btn-desktop' id='fav-btn-desktop'>Add To Favourites</button>}

                            {isItemInStorage(selectedMovie, "watch-list") === true ? <button onClick={() => {removeWatchList(selectedMovie)}} className='desc-btn-desktop watch-btn-desktop actived' id='watch-btn-desktop'>Remove From Watch List</button> : 
                            <button onClick={() => {addToWatchList(selectedMovie)}} className='desc-btn-desktop watch-btn-desktop' id='watch-btn-desktop'>Add To Watch List</button>}     
                            </div>

                        <ul>
                            {movieTags(selectedMovie.genre)}
                        </ul>
                    </div>
            </div>
        </div>
        </div>}
        </div>
    );
}

MovieDescription.defaultProps = {
    fav: getStorage("favourites") || [],
    watchlist: getStorage("watch-list") || []
}

export default MovieDescription;
