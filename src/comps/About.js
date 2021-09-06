import React from 'react';
import mvdb_logo from '../images/mdb_logo.png';
import logo from '../images/logo.png';

const About = () => {
  return (
	<div className="about-section">
		<h1>About</h1>
		<div className="about-card card">
			<div className="project-section">
				<h2>The Project</h2>
				<p>The Movie Database is a community built movie and TV show database. 
					Screen Play utilizes the powerful moviedb to allow users to favourite and keep a watch list of movies they are interested in. 
					<br/><br/>
					This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
				<img src={mvdb_logo} alt="mvdb logo" width="60px"/>
			</div>
			<div className="team-section">
				<h2>The Team</h2>
				<p>Screen Play is a movie listing website created by Wynonna Moo and Tiffany Tang using ReactJS. This project is to showcase our knowledge and skills in React and working with REST APIs. <br/><br/> Feel free to browse the site and discover some new movies to add to your list!</p>
				<img src={logo} alt="mvdb logo" width="60px"/>
			</div>
		</div>
	</div>
    
  );
}

export default About;
