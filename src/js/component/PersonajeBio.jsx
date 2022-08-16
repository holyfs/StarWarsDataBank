import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import api from "../../Api/Api.js"


const PersonajeBio = () => {
  const [description, setDescription] = useState({})
  const [properties, setProperties]= useState({})
  let { id } = useParams();

  useEffect(()=>{
    api.BioDataPeople(id).then((results)=>{
      return results.json()
    }) .then((data)=>{
      setProperties(data.result.properties)
      setDescription(data.result)
    }) 
  },[])


  return (
    <div className="card" style={{ width: 80 + "rem", margin: "auto" }}>
      <div className="card-Header">
        <div className="row g-0">
          <div className="col-md-8">
            <img
              src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
              className="img-fluid rounded-start"
              alt="character of StarWars"
            />
          </div>
          <div className="col-md-4">
            <h2 className="card-title mt-5 pt-5">{!properties.name?<span>Loading...</span>:properties.name}</h2>
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
            <h3 className="card-title mt-5">Birth Year</h3>
            <p className="card-text">{!properties.birth_year?<span>Loading...</span>:properties.birth_year}</p>
          </div>
          <div className="col">
            <h3 className="card-title mt-5">Height</h3>
            <p className="card-text">{!properties.height?<span>Loading...</span>:properties.height}</p>
          </div>
          <div className="col">
            <h3 className="card-title mt-5">Mass</h3>
            <p className="card-text">{!properties.mass?<span>Loading...</span>:properties.mass}</p>
          </div>
          <div className="col">
            <h3 className="card-title mt-5">Skin color</h3>
            <p className="card-text">{!properties.skin_color?<span>Loading...</span>:properties.skin_color}</p>
          </div>
          <div className="col">
            <h3 className="card-title mt-5">Eyes color</h3>
            <p className="card-text">{!properties.eye_color?<span>Loading...</span>:properties.eye_color}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonajeBio;