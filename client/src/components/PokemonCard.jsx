import React from "react";

// remember to give the component the parameters, props
export default function PokemonCard(props) {
  return (
    <div className="pokemon-card-container">
      <div className="left-section">
        {/* image of pokemon goes here - use className="pokemon-image" for the styling to work */}
        <img src={props.src} className="pokemon-image" alt={props.name} />
      </div>

      <div className="right-section">
        {/* Place pokemon details here- use one h1 for the name, and the rest as h3s */}
        <h1>Name: {props.name}</h1>
        <h3>Type: {props.type}</h3>
        <h3>Weight: {props.weight}kg</h3>
        <h3>Height: {props.height}m</h3>
      </div>
    </div>
  );
}
