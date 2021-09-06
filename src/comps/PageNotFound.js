import React from 'react';
import { Link } from 'react-router-dom';
import ErrorImg from '../images/404.png';

const PageNotFound = () => (
	<main>
		<section className="pagenotfound-card card">
			<h2>404 ... : (</h2>
			<img classname='error-img' src={ErrorImg}></img>
			<p>The page you're looking for doesn't exist!</p>
			<p>Go to <Link to="/">Home</Link> page to view movies.</p>
		</section>
	</main>
);


export default PageNotFound;