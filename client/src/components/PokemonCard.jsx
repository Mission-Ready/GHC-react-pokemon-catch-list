import React from "react";
import styles from "./PokemonCard.module.css"

export default function PokemonCard(props) {
  return (
    <div className={styles.pokemonCardContainer}>
      <div className="left-section">
        <img src={props.src} className={styles.pokemonImage} alt={props.name} />
      </div>

      <div className={styles.rightSection}>
        <h1>Name: {props.name}</h1>
        <h3>Type: {props.type}</h3>
        <h3>Weight: {props.weight}kg</h3>
        <h3>Height: {props.height}m</h3>
      </div>
    </div>
  );
}
