import React from 'react';
import "./PokeInfo.css";
import { DataContext} from "../DataContext/DataContext";

function PokeInfo () {
    const {
        info,
        capitalize
    } = React.useContext(DataContext);

    const appName = capitalize(info.name);
    const pokeTypes = capitalize(info.types);
    
    return (
        <section className="poke-info">
            <section className="poke-view">
                <div className='name-image'>
                    <h2>{appName} Nº {info.number}</h2>
                    <img src={info.img} alt=""></img>
                </div>
                <div className="types">
                    <h3>Types:</h3>
                    <ol>
                        {pokeTypes.map(
                            (pokeType) => <li key={pokeType}>
                                {pokeType}
                                </li>
                        )}
                    </ol>
                </div>
            </section>
            <section className="poke-about">
                <div className="description">
                    <h3>Description:</h3>
                    <p>{info.description}</p>
                </div>
            </section>
        </section>
    );
};

export { PokeInfo };