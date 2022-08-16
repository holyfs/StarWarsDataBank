import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	let navigate = useNavigate()

	return (
		<div className="jumbotron d-flex justify-content-center">
			<h1 className="display-4">Error page</h1>


			<button className="btn btn-primary btn-lg mt-2 mb-2" onClick={()=>navigate("/")} role="button">
					Back home	
			</button>
		</div>
	);
};


