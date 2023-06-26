import './App.css';
import CardPokemon from './components/CardPokemon';
import logoPokemon from './assets/img/logo-pokemon.png'
import SearchBar from './components/SearchBar';



function App() {
  return (
    <div className="App mt-5">
      <img className='w-25' src={logoPokemon}></img>

      <CardPokemon></CardPokemon>
    
    </div>
  );
}

export default App;
