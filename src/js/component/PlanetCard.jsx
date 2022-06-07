import React from "react";
import { BsSuitHeart } from "react-icons/bs";


const PlanetCard = (props) => {
  return (
    <>
      <div
        key={props.key}
        className="card ms-3 me-3"
        style={{ width: 18 + "rem", height: 28 + "rem" }}
      >
        <img
          src="https://www.freepnglogos.com/uploads/star-wars-logo-15.png"
          className="card-img-top"
          alt="Lego Star Wars"
          style={{ width: 200 + "px", height: 200 + "px", margin: "auto" }}
        />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">
            Diameter: <strong>{props.diameter}</strong>{" "}
          </p>
          <p className="card-text">
            Population: <strong>{props.population}</strong>{" "}
          </p>
          <p className="card-text">
            Climate: <strong>{props.climate}</strong>
          </p>
          <div className="container-fluid">
            <div className="row">
              <button  className="col">
                Bio
              </button>
              <button  className="col">
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