import React, {useState} from 'react';
import MovieGallery from './MovieGallery';
import { getStorage, removeFromStorage } from '../utilities/storageMaker';


const Favourites = (props) => {

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

  return (
    <div className="fav-section list-section"> 
      <h1>Favourites</h1>
      {favs.length > 0 ? <div className="fav-gallery"> <MovieGallery movies={favs} removeFav={removeFav} removeWatchList={removeWatchList}/> </div> :
      <div className="list-card fav-card card">
        <p>Oops. You have no favourite movies! Click on the <span className="heart-icon icon"><span className="sr-only">Heart icon</span></span> icon on the movie cards to add to the list.</p>
      </div>
      }
    </div>
    
  );
}



export default Favourites;
