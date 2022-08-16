import React, { useEffect, useState, useContext } from "react";
import { BsSuitHeart } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import api from "../../Api/Api.js"
import { Context } from "../store/appContext.js";

const VehicleCard = (props) => {
  const { store, actions } = useContext(Context);
  let navigate = useNavigate()
  const [properties, setProperties] = useState({});

 useEffect(()=>{
    api.BioVehicle(props.id).then((results)=>{
      return results.json()
    }) .then((data)=>{
      setProperties(data.result.properties)
    }) 
  },[])
  return (
    <>
      <div
        key={props.key}
        className="card ms-3 me-3"
        style={{ width: 18 + "rem", height: 29 + "rem" }}
      >
        <img
          src={`https://starwars-visualguide.com/assets/img/vehicles/${props.id}.jpg`}
          className="card-img-top"
          alt="Some Vehicle"
          style={{ width: 100 + "%", height: 100 + "%", margin: "auto" }}
        />
        <div className="card-body">
          <h5 className="card-title">{properties.name}</h5>
          <p className="card-text">
            Model: <strong>{!properties.model?<span>Loading...</span>:properties.model}</strong></p>
          <p className="card-text">
            Manufacturer: <strong>{!properties.manufacturer?<span>Loading...</span>:properties.manufacturer}</strong></p>
          <div className="container-fluid mt-2">
            <div className="row">
              <button  className="col" onClick={()=>{navigate(`/Vehicle/${props.id}`)}}>
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

export default VehicleCard;