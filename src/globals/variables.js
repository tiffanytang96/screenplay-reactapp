// Global Variables

// Open Movie Database API
/** 
 * 
 * Open Movie Database API Info
 * 
 * URL: https://www.themoviedb.org/
 * 
 * API Key: dd3efcf9a45511028a63b384322ae259
 * 
 * Base URL (Forcast): https://api.themoviedb.org/3/movie/550?
 * 
 * Sample URL (Forcast): https://api.themoviedb.org/3/movie/550?api_key=dd3efcf9a45511028a63b384322ae259
 * 
 * 
**/

// API Variables
export const API_KEY = `api_key=${process.env.API_KEY}`;
export const BASE_URL = 'https://api.themoviedb.org/3/';
export const API_POPULAR = 'movie/popular?';
export const API_TOP_RATED = 'movie/top_rated?';
export const API_UPCOMING = 'movie/upcoming?';
export const API_NOW_PLAYING = 'movie/now_playing?';
export const API_GENRE = 'genre/movie/list?';

// General App Settings
export const APP_FOLDER_NAME = '/screen-play';

// LocalStorage Defaults
export const STORAGE_FAV = 'movie-app-fav';
export const STORAGE_WATCH_LIST = 'movie-app-watch-list';

// Default Language, Page, Region
export const DEFAULT_LANGUAGE = '&language=en-US';
export const DEFAULT_PAGE = '&page=';
export const DEFAULT_REGION = '&region=us';

export const IMG_BASE_URL = 'http://image.tmdb.org/t/p/w780';

// "poster_sizes": [
//   "w92",
//   "w154",
//   "w185",
//   "w342",
//   "w500",
//   "w780",
//   "original"
// ]

// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false