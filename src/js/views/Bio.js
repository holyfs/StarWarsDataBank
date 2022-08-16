import React, { useContext, useEffect } from "react";
import "../../styles/info.css";
import PersonajeBio from "../component/PersonajeBio.jsx";
import { Context } from "../store/appContext.js";
import { useParams } from "react-router-dom";



export const Bio = () => {

	return (<>
	<div className="Container backGround">
		<div className="header">
		<h1>Welcome to the Star Wars DataBank</h1>
		<div>
			<div><PersonajeBio /></div>			
		</div>	
		</div>
	</div>
	</>
 );
};
