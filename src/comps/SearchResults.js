import React from 'react';
import SearchListItems from './SeachListItems';



const SearchResults = (props) => {

  const makeListItems = (arr, close) => {
    if(arr){
      return arr.map((movie, i) => {
        return (
         <SearchListItems key={i} movieObj={movie} close={props.closeResults} />
        )
      });
    }
   
  }


    return (
        <div className='search-results-list-div'> 
            <ul>
                {makeListItems(props.movieObj)}
            </ul>

           
        </div>
    )
}
export default SearchResults;