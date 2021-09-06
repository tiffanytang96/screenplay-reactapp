import React, {useState} from 'react';
import Nav from '../comps/Nav';
import Search from '../comps/Search';
import Home from '../comps/Home';
import About from '../comps/About';
import Favourites from '../comps/Favourites';
import WatchList from '../comps/WatchList';
import MovieDescription from '../comps/MovieDescription';
import PageNotFound from '../comps/PageNotFound';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


const App = () => {

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchOpen = () => {
    setIsSearchOpen(true);
  }
  
  const handleSearchClose = (e) => {  
    if(!e.target.classList.contains("search-results-list") && !e.target.classList.contains("search-results-content") ){
    setIsSearchOpen(false);
    }
  }

  return (
    <Router basename={"/screen-play"} > 
      <div className="wrapper" onClick={handleSearchClose}>
        <Nav/>
        <div className='body'>
          <Search open={isSearchOpen} handleSearchOpen={handleSearchOpen} handleSearchClose={handleSearchClose} />
          <Switch>
            <Route path='/' exact><Home /></Route>
            <Route path='/about'><About /></Route>
            <Route path='/favourites'><Favourites /></Route>
            <Route path='/watchlist'><WatchList /></Route>
            <Route path='/movie/:id'><MovieDescription /></Route>
            <Route ><PageNotFound /></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
