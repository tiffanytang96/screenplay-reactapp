// Storage Maker

export const removeFromStorage  = (movie, storageItem) => {
    let items = getStorage(storageItem);
    const isId = (current) => current.id === movie.id;
    let indexOfItemToRemove = items.findIndex(isId);
    items.splice(indexOfItemToRemove, 1);
    let itemsForStorage = JSON.stringify(items);
    localStorage.setItem(storageItem, itemsForStorage);
    return items;
}

export const isItemInStorageForButtons = (newItem, storageItem) => {
    
    let yourCurrentFavs = getStorage(storageItem);
    if(!yourCurrentFavs){
        return false;
    }
    if(yourCurrentFavs.find(favmovie => favmovie.id === newItem.id)){
        return true;
    }
    return yourCurrentFavs;
}


export const isItemInStorage = (newItem, storageItem) => {
    let yourCurrentFavs = getStorage(storageItem);
    if(!yourCurrentFavs){
        return [];
    }
    if(yourCurrentFavs.find(favmovie => favmovie.id === newItem.id)){
        return true;
    }
    return yourCurrentFavs;
}

export const getStorage = (storageItem = 'favourites') => {
    let items = localStorage.getItem(storageItem);
    if(items === null){
        const arrStr = JSON.stringify([]);
       localStorage.setItem(storageItem, arrStr);
       return [];
    }else{
        items = JSON.parse(items);
        return items;
    }
}

export const setStorage = (newItem, storageItem = 'favourites', test = true) => {
    if(storageItem === 'favourites'){
        let arrayOfFavMovies;
        if(test === true){
            arrayOfFavMovies = isItemInStorage(newItem);
            if(arrayOfFavMovies === true){
                return false;
            }
        }else{
            arrayOfFavMovies = getStorage();
        }
        arrayOfFavMovies.push(newItem);
        const arrayOfFavMoviesForStorage = JSON.stringify(arrayOfFavMovies);
        localStorage.setItem(storageItem, arrayOfFavMoviesForStorage);
        return arrayOfFavMovies;

    }else if(storageItem === 'watch-list'){
        let arrayOfWatchMovies;
        if(test === true){
            arrayOfWatchMovies = isItemInStorage(newItem, 'watch-list');
            if(arrayOfWatchMovies === true){
                return false;
            }
        }else{
            arrayOfWatchMovies = getStorage("watch-list");
        }
        arrayOfWatchMovies.push(newItem);
        const arrayOfWatchMoviesForStorage = JSON.stringify(arrayOfWatchMovies);
        localStorage.setItem(storageItem, arrayOfWatchMoviesForStorage);
        return arrayOfWatchMovies;
    }
    else{
        return false;
    }    
}