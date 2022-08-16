import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import api from "../../Api/Api.js"

const VehicleBio = (props) => {
  const [description, setDescription] = useState({})
  const [properties, setProperties]= useState({})
  let { id } = useParams();
  useEffect(()=>{
    api.BioVehicle(id).then((results)=>{
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
            src={`https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`}
            className="img-fluid rounded-start"
            alt="Image Not Found 404"
          />
        </div>
        <div className="col-md-4">
          <h2 className="card-title mt-5">{!properties.name?<span>Loading...</span>:properties.name}</h2>
          <p className="card-text me-3">
          <strong>{description.description}</strong>
          </p>
          <div className="card-text me-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            unde eligendi nulla ipsa vero illo sit perferendis voluptatum
            porro. Placeat velit ullam perferendis distinctio et voluptatem
            ipsum facere, reiciendis quae? </div>
        </div>
      </div>
    </div>
    <div className="card-body">
      <div className="row">
        <div className="col">
          <h3 className="card-title mt-5">Model</h3>
          <p className="card-text">{!properties.model?<span>Loading...</span>:properties.model}</p>
        </div>
        <div className="col">
          <h3 className="card-title mt-5">Vehicle class</h3>
          <p className="card-text">{!properties.vehicle_class?<span>Loading...</span>:properties.vehicle_class}</p>
        </div>
        <div className="col">
          <h3 className="card-title mt-5">Manufacturer</h3>
          <p className="card-text">{!properties.manufacturer?<span>Loading...</span>:properties.manufacturer}</p>
        </div>
        <div className="col">
          <h3 className="card-title mt-5">Crew</h3>
          <p className="card-text">{!properties.crew?<span>Loading...</span>:properties.crew}</p>
        </div>
        <div className="col">
          <h3 className="card-title mt-5">Max atmosphering speed</h3>
          <p className="card-text">{!properties.max_atmosphering_speed?<span>Loading...</span>:properties.max_atmosphering_speed}</p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default VehicleBio;