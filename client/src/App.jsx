import "./App.css";

import PokemonLogo from "./assets/PokemonLogo.png";
import PokemonPage from "./components/PokemonPage";

export default function App() {
  return (
    <>
      <div className="App">
        <header className="header">
          <img src={PokemonLogo} alt="logo" />
        </header>
        <PokemonPage />
      </div>
    </>
  );
}
