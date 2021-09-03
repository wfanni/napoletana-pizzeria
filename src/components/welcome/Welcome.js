import React from 'react'
import logo from "./napoletana.svg";
import arrow from "./arrow.svg";
import './Welcome.css'

const Welcome = () => {
	return (
		<div id="welcome-wrapper">
			<div className="welcome">
				<img id="logo" src={logo} alt="logo"></img>	
			</div>

			<div className="introduction">
				<span className="intro what">Authentic pizza and pasta</span>
				<span className="intro by">created with much love by foodie family</span>
				<span className="intro napoli">Napoli, </span>
				<span className="intro italy">Italy</span>
				<span className="intro from">from</span>
			</div>
			<div className="show-menu">
				<span id="menu">Menu</span>
				<img id="arrow" src={arrow} alt="arrow"></img>
			</div>
		</div>
	)
}

export default Welcome
