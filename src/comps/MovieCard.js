import React, {useState} from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from "react-router-dom";
import { changeDate, movieTags } from '../utilities/functionsMaker';
import { setStorage, getStorage, isItemInStorage, removeFromStorage } from '../utilities/storageMaker';


const MovieCard = (props) => {
  
	const [fav, setFav] = useState(props.fav);
	const [watchlist, setWatchList] = useState(props.watchlist);

	const addToFav = (movieObj) => {
		const newFavs = setStorage(movieObj, 'favourites');
		if(newFavs === false){
			return false;
		}else {
			setFav(newFavs);
		}
	}
	
	const addToWatchList = (movieObj) => {
		const newWatchList = setStorage(movieObj, 'watch-list');
		if(newWatchList === false){
			return false;
		}else {
			setWatchList(newWatchList);
		}
	}

  return (
    <div className='movie-card card'>
		
		<div className='image'>
			<div className="btns">
				{isItemInStorage(props.movieObj,'favourites') === true ? 
				<button onClick={() => {props.removeFav(props.movieObj)}} className='top-btn fav-btn active' id='fav-btn'></button> : 
				<button onClick={() => {addToFav(props.movieObj)}} className='top-btn fav-btn' id='fav-btn'></button>}
				

				{isItemInStorage(props.movieObj, "watch-list") === true ? 
				<button onClick={() => {props.removeWatchList(props.movieObj)}} className='top-btn watch-btn actived' id='watch-btn'></button> : 
				<button onClick={() => {addToWatchList(props.movieObj)}} className='top-btn watch-btn' id='watch-btn'></button>}
			
			</div>
			<Link to={`/movie/${props.movieObj.id}`}>
				<img src={props.movieObj.poster} />
			</Link>
		</div>
		<div className='description'>
			<div className='description-intro'>
				<div className='title'>
				<h1 className='movietitle'>
					<Link to={`/movie/${props.movieObj.id}`}>{props.movieObj.title}</Link>
				</h1>
				<h2 className='movieinfo'>{changeDate(props.movieObj.date)}</h2>
				</div>
				<div className='rating' style={{width:'45px'}}>
				<CircularProgressbar 
				value={props.movieObj.rating} 
				strokeWidth={4}
				text={`${props.movieObj.rating}%`} 
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
				<p>{props.movieObj.overview}</p>
				<ul>
				{movieTags(props.movieObj.genre)}
				</ul>
			</div>
		</div>
    </div>
  );
}

MovieCard.defaultProps = {
  fav: getStorage("favourites") || [],
  watchlist: getStorage("watch-list") || []
}

export default MovieCard;
