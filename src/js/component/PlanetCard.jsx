import React, { useEffect, useState, useContext } from "react";
import { BsSuitHeart } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import api from "../../Api/Api.js"
import { Context } from "../store/appContext.js";



const PlanetCard = (props) => {
  const { store, actions } = useContext(Context);
  let navigate = useNavigate()
  const [properties, setProperties] = useState({});

 useEffect(()=>{
    api.BioPlanet(props.id).then((data)=>{
      setProperties(data.result.properties)
    }) 
  },[])

  return (
    <>
      <div
        key={props.key}
        className="card ms-3 me-3"
        style={{ width: 18 + "rem", height: 28 + "rem" }}
      >
        <img
          src={`https://starwars-visualguide.com/assets/img/planets/${props.id}.jpg`}
          className="card-img-top"
          alt="Image Not Found 404"
          style={{ width: 200 + "px", height: 200 + "px", margin: "auto" }}
        />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">
            Diameter: <strong>{!properties.diameter?<span>Loading...</span>:properties.diameter }</strong>{" "}
          </p>
          <p className="card-text">
            Population: <strong>{!properties.population?<span>Loading...</span>:properties.population }</strong>{" "}
          </p>
          <p className="card-text">
            Climate: <strong>{!properties.climate?<span>Loading...</span>:properties.climate}</strong>
          </p>
          <div className="container-fluid mt-2">
            <div className="row">
              <button  className="col" onClick={()=>{navigate(`/Planet/${props.id}`)}}>
                Bio
              </button>
              <button  className="col" onClick={() => {
                  actions.saveFavorite(props.name, props.id)
                }}>
                <BsSuitHeart />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlanetCard;