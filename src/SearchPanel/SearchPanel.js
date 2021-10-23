import React from 'react';
import "./SearchPanel.css";
// import { GetData } from "../utils/GetData";
import { DataContext} from "../DataContext/DataContext";


function SearchPanel () {
    const {
        pokemons,
        setSearchValue,
    } = React.useContext(DataContext);

    const onSubmit = (event) => { 
        event.preventDefault();
        setSearchValue (event.target[0].value);
    };

    return (
        <section className="search-bar">
            <div className="search">
                <form onSubmit={onSubmit} action="">
                    <label htmlFor="">Nombre o número de entre los {pokemons.length} pokémones</label><br></br>
                    <input
                        type="text" 
                        placeholder="e.g. 001 or Bulbasaur"
                        list="suggestions"></input><br></br>
                        <datalist id="suggestions">
                            {pokemons.map((pokemon) => <option key={pokemon.name} value={pokemon.name}></option>)}
                        </datalist>
                    <button type="submit">Busca</button>
                </form>
            </div>
            <div className="search-text">
                <div>
                    <p>Busca tu pokémon usando su número o por su nombre.</p>
                </div>
            </div>
        </section>
    );
};

export { SearchPanel };