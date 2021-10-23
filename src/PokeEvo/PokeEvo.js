import React from 'react';
import "./PokeEvo.css";
import Arrow from "../assets/arrow.png";
import { DataContext } from '../DataContext/DataContext';

function PokeEvo () {
    const {
        evos,
        evoSprites,
    } = React.useContext(DataContext)
    return (
        <section className="evolution">
            <h3>Evoluciones:</h3>
            <div className="evolution-number">
                {evos.map((evo) =>
                    <div key={evo.species_name}>
                        <img src={evoSprites[evos.indexOf(evo)]} alt=""></img>
                        <p>{evo.species_name}</p>
                        <img src={Arrow} alt=""></img>
                    </div>
                )}
            </div>
        </section>
    );
};

export { PokeEvo };