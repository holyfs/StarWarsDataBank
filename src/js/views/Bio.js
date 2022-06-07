import React, { useEffect, useState, useParams }  from "react";
import "../../styles/info.css";
import PersonajeBio from "../component/PersonajeBio.jsx";



export const Bio = () => {


	
	return (<>
	<div className="Container backGround">
		<div className="header">
		<h1>Welcome to the Star Wars DataBank</h1>
		< PersonajeBio />
		</div>

	</div>
	</>
 );
};
