import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import api from "../../Api/Api.js"

const PlanetBio = () => {
  const [description, setDescription] = useState({})
  const [properties, setProperties]= useState({})
  let { id } = useParams();
  useEffect(()=>{
    api.BioPlanet(id).then((results)=>{
      return results.json()
    }) .then((data)=>{
      setProperties(data.result.properties)
      setDescription(data.result)
    }) 
  },[])
  return (
    <div className="card pb-3" style={{ width: 80 + "rem", margin: "auto" }}>
      <div className="card-Header">
        <div className="row g-0">
          <div className="col-md-8">
            <img
              src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
              className="img-fluid rounded-start"
              alt="Some Planet"
            />
          </div>
          <div className="col-md-4">
            <h2 className="card-title mt-5">{!properties.name?<span>Loading...</span>:properties.name}</h2>
            <p className="card-text">
            <strong>{description.description}</strong>   
            </p>
            <div className="card-text me-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              unde eligendi nulla ipsa vero illo sit perferendis voluptatum
              porro. Placeat velit ullam perferendis distinctio et voluptatem
              ipsum facere, reiciendis quae?</div>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col">
            <h3 className="card-title mt-5">Rotation Period</h3>
            <p className="card-text">{!properties.rotation_period?<span>Loading...</span>:properties.rotation_period}</p>
          </div>
          <div className="col">
            <h3 className="card-title mt-5">Orbital period</h3>
            <p className="card-text">{!properties.orbital_period?<span>Loading...</span>:properties.orbital_period}</p>
          </div>
          <div className="col">
            <h3 className="card-title mt-5">Terrain</h3>
            <p className="card-text">{!properties.terrain?<span>Loading...</span>:properties.terrain}</p>
          </div>
          <div className="col">
            <h3 className="card-title mt-5">Diameter</h3>
            <p className="card-text">{!properties.diameter?<span>Loading...</span>:properties.diameter}</p>
          </div>
          <div className="col">
            <h3 className="card-title mt-5">Gravity</h3>
            <p className="card-text">{!properties.gravity?<span>Loading...</span>:properties.gravity}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanetBio;