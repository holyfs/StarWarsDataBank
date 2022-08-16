import React, { useContext, useEffect } from "react";
import "../../styles/info.css";
import VehicleBio from "../component/VehicleBio.jsx"
import { Context } from "../store/appContext.js";
import { useParams } from "react-router-dom";



export const Vehicle = () => {

	return (<>
	<div className="Container backGround">
		<div className="header">
		<h1>Welcome to the Star Wars DataBank</h1>
		<div>
			<div><VehicleBio /></div>			
		</div>	
		</div>
	</div>
	</>
 );
};