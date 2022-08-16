import React, { useEffect, useState, useContext } from "react";
import { BsSuitHeart } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import api from "../../Api/Api.js"
import { Context } from "../store/appContext.js";


const PersonajeCard = (props) => {
  const { store, actions } = useContext(Context);
  let navigate = useNavigate()
  const [properties, setProperties] = useState({});

 useEffect(()=>{
    api.BioDataPeople(props.id).then((results)=>{
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
        style={{ width: 18 + "rem", height: 28 + "rem" }}
      >
        <img
          src={`https://starwars-visualguide.com/assets/img/characters/${props.id}.jpg`}
          className="card-img-top"
          alt="Image Not Found 404"
          style={{ width: 17.9 + "rem", height: 14 + "rem", margin: "auto"}}
        />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">
            Gender: <strong>{!properties.gender?<span>Loading...</span>:properties.gender}</strong>{" "}
          </p>
          <p className="card-text">
            Hair color: <strong>{!properties.hair_color?<span>Loading...</span>:properties.hair_color}</strong>{" "}
          </p>
          <p className="card-text">
            Eye color: <strong>{!properties.eye_color?<span>Loading...</span>:properties.eye_color}</strong>
          </p>
          <div className="container-fluid mt-2">
            <div className="row">
              <button  className="col" onClick={()=>navigate(`/Bio/${props.id}`)}>
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


export default PersonajeCard;