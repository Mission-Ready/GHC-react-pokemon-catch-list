import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

export default function PokemonPage() {
  // set up the states needed for the fetched data and the caught status
  const [pokemonData, setPokemonData] = useState("");
  const [caughtStatus, setCaughtStatus] = useState("");

  // fetch the data from your backend - use the urls you have created
  // complete the useEffect function to help fetch the data from the backend
  useEffect(() => {
    async function fetchPokemonData() {
      const response = await fetch("http://localhost:4000/pokemonlist");
      const data = await response.json();
      setPokemonData(data);
    }
    fetchPokemonData();
    console.log(pokemonData);
  }, []);

  // Complete the handleCaught function to send a POST request to the server
  async function handleCaught(pokemonId) {
    if (caughtStatus[pokemonId]) {
      try {
        const response = await fetch("http://localhost:4000/pokemonlist", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: pokemonId }),
        });
        const data = await response.json();
        console.log("response from server:", data);
        // reload page after catching pokemon
        setPokemonData(
          pokemonData.filter((pokemon) => pokemon.id !== pokemonId)
        );
      } catch (error) {
        console.error("Error updating Pokemon:", error);
      }
    }
    console.log("Pokemon caught!");
  }

  // handle the checkbox
  function handleChange(e, pokemonId) {
    setCaughtStatus((prevState) => ({
      ...prevState,
      [pokemonId]: e.target.checked,
    }));
    console.log(pokemonId);
  }

  return (
    <div className="pokemon-page-container">
      {pokemonData.length > 0 ? (
        pokemonData.map((pokemon, index) => (
          <div className="pokemans-container" key={index}>
            <input
              type="checkbox"
              checked={caughtStatus[pokemon.id] || false}
              onChange={(e) => handleChange(e, pokemon.id)}
            />
            <PokemonCard
              name={pokemon.name}
              type={pokemon.type}
              height={pokemon.height}
              weight={pokemon.weight}
              src={pokemon.image}
            />
            <button
              className="caught-btn"
              onClick={() => handleCaught(pokemon.id)}>
              Caught 'Em!
            </button>
          </div>
        ))
      ) : (
        <p>Loading Pokemon data...</p>
      )}
    </div>
  );
}
