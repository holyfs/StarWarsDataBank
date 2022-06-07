import React from "react"

const PlanetBio = (props) => {
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
        <h5 className="card-title mt-2">Name{props.name}</h5>
          <img
            src="https://img.buzzfeed.com/store-an-image-prod-us-east-1/JPhO1Ia3.png"
            className="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div className="col-md-4">
          <div className="card-body">
            <p className="card-text">Pruebaaaaaa{props.Info}</p>
            <p className="card-text">Pruebaaaaaa{props.Info}</p>
            <p className="card-text">Pruebaaaaaa{props.Info}</p>
            <p className="card-text">Pruebaaaaaa{props.Info}</p>
            <p className="card-text">Pruebaaaaaa{props.Info}</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card-body">
            <p className="card-text">Pruebaaaaaa{props.Info}</p>
            <p className="card-text">Pruebaaaaaa{props.Info}</p>
            <p className="card-text">Pruebaaaaaa{props.Info}</p>
            <p className="card-text">Pruebaaaaaa{props.Info}</p>
            <p className="card-text">Pruebaaaaaa{props.Info}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanetBio;