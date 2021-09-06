import React from 'react';
import MovieCard from './MovieCard';

const MovieGallery = (props) => {
  const makeCard = (arr) => {
    if(arr){
      return arr.map((movie, i) => {
        return (
          <MovieCard key={i} movieObj={movie} removeFav={props.removeFav} removeWatchList={props.removeWatchList}/>
        )
      });
    }
  }
  
  return (
    <div className='movie-gallery'>
      {makeCard(props.movies)}
    </div>
  );
}

export default MovieGallery;
