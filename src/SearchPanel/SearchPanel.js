import React from 'react';
import "./SearchPanel.css";
// import { GetData } from "../utils/GetData";
import { DataContext} from "../DataContext/DataContext";
import "../font/search/onlinewebfonts.css"

function SearchPanel () {
    const {
        pokemons,
        setSearchValue,
        capitalize
    } = React.useContext(DataContext);

    const onSubmit = (event) => { 
        event.preventDefault();
        setSearchValue (event.target[0].value.toLowerCase());
    };

    return (
        <section className="search-bar">
            <div className="search">
                <form onSubmit={onSubmit} action="">
                    <label htmlFor="">Number or name of your pokémon</label>
                    <input
                        type="text" 
                        placeholder="e.g. 1 or Bulbasaur"
                        list="suggestions"></input>
                        <datalist id="suggestions">
                            {pokemons.map((pokemon) => <option key={pokemon.name} value={capitalize(pokemon.name)}></option>)}
                        </datalist>
                    <button type="submit" className="i_search"></button>
                </form>
            </div>
            <div className="search-text">
                <div>
                    <p>Search by pokémon's number or name from {pokemons.length} available.</p>
                </div>
            </div>
        </section>
    );
};

export { SearchPanel };