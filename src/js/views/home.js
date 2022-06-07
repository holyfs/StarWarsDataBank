import React, { useEffect,  useState, useContext } from "react";
import PersonajeCard from "../component/PersonajeCard.jsx";
import VehicleCard from "../component/VehicleCard.jsx";
import PlanetCard from "../component/PlanetCard.jsx";
import Api from "/workspace/react-hello-webapp/src/Api/Api.js";
import "/workspace/react-hello-webapp/src/styles/home.css";
import { Context } from "../store/appContext.js";



export const Home = () => {
  const { actions, store } = useContext(Context);

  useEffect(() => {
    Api.GetPeople().then((data) => {
      actions.setPersonajes(data);
      Api.GetVehicles().then((data) => {
        actions.setVehicles(data);
        Api.GetPlanets().then((data) => {
          actions.setPlanets(data);
        });
      });
    });
  }, []);
 
  

  return (
    <div className="Container backGround">
      <div className="header">
        <h1>Welcome to the Star Wars DataBank</h1>
      </div>
      <div className="container mt-4">
        <h3 className="Characters">Characters</h3>
        <div className="d-flex scroll">
          {store.personajes?.map((personaje, index) => {
            return (
              <div key={index}>
                <PersonajeCard name={personaje.caracteristicas.name} 
                gender={personaje.caracteristicas.gender} 
                hair={personaje.caracteristicas.hair_color}
                eye={personaje.caracteristicas.eye_color} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="container mt-4">
        <h3 className="Vehicles">Vehicles</h3>
        <div className="d-flex scroll">
          {store.vehicles?.map((vehicle, index) => {
            return (
              <div key={index}>
                <VehicleCard name={vehicle.caracteristicas.name}
                model={vehicle.caracteristicas.model}
                manufacturer={vehicle.caracteristicas.manufacturer} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="container mt-4">
        <h3 className="Planets">Planets</h3>
        <div className="d-flex scroll">
           {store.planets?.map((planet, index) => {
            return (
              <div key={index}>
                <PlanetCard name={planet.caracteristicas.name}                
                diameter={planet.caracteristicas.diameter}
                population={planet.caracteristicas.population}
                climate={planet.caracteristicas.climate} /> 
              </div>
            );
          })} 
        </div>
      </div>
    </div>
  );
};
