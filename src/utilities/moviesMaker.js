import {  IMG_BASE_URL } from '../globals/variables';
import { allGenres } from '../data/data';
import no_image from '../images/no-image.png';



function setRating(item){
    item = item.vote_average * 10;
    return item;
}

// genres for homepage
function setGenreIds(obj){
    let genreNumbers = obj.genre_ids;

    const testId = (genre) => {
       const found = genreNumbers.find(element => element === genre);

       if(found !== undefined){
            return true;
        }else {
            return false;
        }
    }

    const result = allGenres.filter((genre) => { 
        return testId(genre.id) 
    });
    const filteredGenres = result.map(item => item.name);
    return filteredGenres;
}

// genres for description pages
function setGenres(arr){
    let genres = [];
    if(arr !== null){
        arr.forEach((genre) => genres.push(genre.name))
    }
    return genres;
}

function setPosterPath(item){
    let extension = item.poster_path;
    if(extension !== null){
        let img_path = IMG_BASE_URL + extension;
        return img_path;
    }else {
        return no_image;
    }
}

function setBackdropPath(item){
    let extension = item.backdrop_path;
    if(extension !== null){
        let img_path = IMG_BASE_URL + extension;
        return img_path;
    }else {
        return no_image;
    }
}

export const moviesObj = (mdAPI) => {
    
    let formattedData = []
    mdAPI.forEach((item, index) => {

        let rating   = setRating(item);
        let poster   = setPosterPath(item);
        let genre    = setGenreIds(item);
        let title    = item.title;
        let id       = item.id;
        let overview = item.overview;
        let date     = item.release_date;
        let backdrop = setBackdropPath(item);
  
        formattedData.push({ 
            rating, 
            poster, 
            genre, 
            title, 
            id, 
            overview, 
            date,
            backdrop });
    })
    return formattedData;
}


export const movieObj = (mdAPI) => {
    
    let formattedData = {};
    
    let rating   = setRating(mdAPI);
    let poster   = setPosterPath(mdAPI);
    let genre    = setGenres(mdAPI.genres);
    let duration = mdAPI.runtime;
    let title    = mdAPI.title;
    let id       = mdAPI.id;
    let overview = mdAPI.overview;
    let date     = mdAPI.release_date;
    let backdrop = setBackdropPath(mdAPI);
  
    formattedData={ 
        rating, 
        poster, 
        genre,
        duration, 
        title, 
        id, 
        overview, 
        date,
        backdrop };
    
    return formattedData;
}