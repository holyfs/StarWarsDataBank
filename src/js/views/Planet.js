import React, { useContext, useEffect } from "react";
import "../../styles/info.css";
import PlanetBio from "../component/PlanetBio.jsx"
import { Context } from "../store/appContext.js";
import { useParams } from "react-router-dom";



export const Planet = () => {

	return (<>
	<div className="Container backGround">
		<div className="header">
		<h1>Welcome to the Star Wars DataBank</h1>
		<div>
			<div><PlanetBio /></div>			
		</div>	
		</div>
	</div>
	</>
 );
};