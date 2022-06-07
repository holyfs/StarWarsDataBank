import { useNavigate } from "react-router";
import React from "react";
import { BsSuitHeart } from "react-icons/bs";


const PersonajeCard = (props) => {
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
            Gender: <strong>{props.gender}</strong>{" "}
          </p>
          <p className="card-text">
            Hair color: <strong>{props.hair}</strong>{" "}
          </p>
          <p className="card-text">
            Eye color: <strong>{props.eye}</strong>
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

export default PersonajeCard;