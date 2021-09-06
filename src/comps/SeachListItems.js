import React from 'react';
import { CircularProgressbar,  buildStyles } from 'react-circular-progressbar';
import { changeDate } from '../utilities/functionsMaker';
import { Link } from "react-router-dom";

const SearchListItems = (props) => {

    return (
        
        <li className='search-results-list' > 
            <Link to={`/movie/${props.movieObj.id}`} >
                <div className='search-results-img'>
                    <img src={props.movieObj.poster }/>
                </div>
            </Link>
            <div className='search-results-content'>
                <div className='search-results-title'>
                    <h4 onClick={() => {props.close() }} ><Link to={`/movie/${props.movieObj.id}`} >{props.movieObj.title}</Link></h4>
                </div>
                <div className='search-results-text'>
                    <div className='release-date'>
                        <p><strong>Release Date</strong></p>
                        <p>{props.movieObj.date}</p>
                    </div>
                    <div className="results-rating">
                    <CircularProgressbar 
                    value={props.movieObj.rating} 
                    strokeWidth={4}
                    text={`${props.movieObj.rating}%`} 
                    styles={buildStyles({
                    pathColor:'#5EF2AF',
                    textColor:'#5EF2AF',
                    textSize: '30px',
                    strokeLinecap: 'round'
                    })}
				     />
                    </div>  
                </div>
            </div>
        </li>
    )
}
export default SearchListItems;