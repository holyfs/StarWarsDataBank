import React from "react"

const VehicleBio = (props) => {
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
        <h5 className="card-title mt-2">Name{props.name}</h5>
          <img
            src="https://i5.walmartimages.com/asr/d3ee29f9-f9d3-4dd9-8ab4-92ee72c14c8b_1.4fedf076ee451dc45b60130669a613e2.jpeg"
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

export default VehicleBio;