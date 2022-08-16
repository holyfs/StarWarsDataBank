import React, { useContext, useEffect, useState } from "react";
import PersonajeCard from "../component/PersonajeCard.jsx";
import VehicleCard from "../component/VehicleCard.jsx";
import PlanetCard from "../component/PlanetCard.jsx";
import "../../styles/home.css";
import { Context } from "../store/appContext.js";


export const Home = () => {
const { store } = useContext(Context);
 
  return (
    <div className="Container backGround">
      <div className="header">
        <h1>Welcome to the Star Wars DataBank</h1>
      </div>
      <div className="container mt-4">
        <h3 className="Characters">Characters</h3>
        <div className="d-flex scroll">
          {store.personajes ? store.personajes.map((personaje, index) => {
            return (
              <div key={index}>
                <PersonajeCard name={personaje.name}
                id={personaje.uid}
                 />
              </div>
            );
          }):<h1>...Loading</h1>}
        </div>
      </div>
      <div className="container mt-4">
        <h3 className="Vehicles">Vehicles</h3>
        <div className="d-flex scroll">
          {store.vehicles?.map((vehicle, index) => {
            return (
              <div key={index}>
                <VehicleCard name={vehicle.name}
                id={vehicle.uid} />
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
                <PlanetCard name={planet.name} 
                id={planet.uid}               
                /> 
              </div>
            );
          })} 
        </div>
      </div>
    </div>
  );
};
