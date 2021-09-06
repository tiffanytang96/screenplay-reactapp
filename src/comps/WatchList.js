import React, {useState} from 'react';
import MovieGallery from './MovieGallery';
import { getStorage, removeFromStorage } from '../utilities/storageMaker';

const WatchList = () => {

  const [watchlist, setWatchList] = useState(getStorage('watch-list'));
  const [favs, setFavs] = useState(getStorage());

	const removeWatchList = (movieObj) => {
		removeFromStorage(movieObj, "watch-list");
		let updatedList = getStorage('watch-list');
		setWatchList(updatedList);
  }
  
	const removeFav = (movieObj) => {
		removeFromStorage(movieObj, "favourites");
		let updatedList = getStorage('favourites');
		setFavs(updatedList);
  }

  return (
    <div className="watch-section list-section">  
      <h1>Watch List</h1>
      {watchlist.length > 0 ? <div className="fav-gallery"> <MovieGallery movies={watchlist} removeFav={removeFav} removeWatchList={removeWatchList}/> </div> :
      <div className="list-card watch-card card">
        <p>Oops. You have no movies to watch later! Click on the <span className="watch-icon icon"><span className="sr-only">Glasses icon</span></span> icon on the movie cards to add to the list.</p>
      </div>
      }
    </div>
    
  );
}

export default WatchList;
