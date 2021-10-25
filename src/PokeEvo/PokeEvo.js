import React from 'react';
import "./PokeEvo.css";
import Arrow from "../assets/arrow.png";
import { DataContext } from '../DataContext/DataContext';

function PokeEvo () {
    const {
        evos,
        evoSprites,
        capitalize,
    } = React.useContext(DataContext);
    
    return (
        <section className="evolution">
            <h2>Evolutions:</h2>
            <div className="evolution-number">
                {(evos.length > 1) && evos.map((evo) =>
                    <div key={evo.species_name}>
                        <img src={evoSprites[evos.indexOf(evo)]} alt=""></img>
                        <p>{capitalize(evo.species_name)}</p>
                    </div>
                )}
                {(evos.length === 1) && 
                    <div key={evos[0].species_name}>
                        <img src={evoSprites[0]} alt=""></img>
                        <p>{capitalize(evos[0].species_name)}</p>
                        <p>This pokémon do not evolve.</p>
                    </div>
                }
            </div>
        </section>
    );
};

export { PokeEvo };