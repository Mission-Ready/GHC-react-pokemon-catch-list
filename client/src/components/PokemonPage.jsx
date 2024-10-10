import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

export default function PokemonPage() {
  // set up the states needed for the fetched data and the caught status
  const [first, setfirst] = useState(second);
  const [first1, setfirst1] = useState(second);

  // fetch the data from your backend - use the urls you have created
  // complete the useEffect function to help fetch the data from the backend
  useEffect(() => {
    async function fetchPokemonData() {
      
    }
    fetchPokemonData();
  }, []);

  // Complete the handleCaught function to send a POST request to the server
  async function handleCaught() {

  }

  // handle the checkbox change so that the caught status can be updated
  function handleChange() {

  }
  // finish the function for the input and the button
  return (
    <div className="pokemon-page-container">
      {pokemonData.length > 0 ? (
        pokemonData.map((pokemon, index) => (
          <div className="pokemans-container" key={index}>
            <input type="checkbox" onChange={handleChange} />
            <PokemonCard
              name={pokemon.name}
              type={pokemon.type}
              height={pokemon.height}
              weight={pokemon.weight}
              src={pokemon.image}
            />
            <button className="caught-btn" onClick={handleCaught}>
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
