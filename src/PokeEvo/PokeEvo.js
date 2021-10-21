import React from 'react';
import "./PokeEvo.css";
import evo1 from "../assets/evo1.png";
import evo2 from "../assets/evo2.png";
import PokemonTest from "../assets/pikachu.png";
import Arrow from "../assets/arrow.png";

function PokeEvo () {
    return (
        <section className="evolution">
            <h3>Evoluciones:</h3>
            <div className="evolution-number">
                <div>
                    <img src={evo1} alt=""></img>
                    <p>Pichu Nº</p>
                    <img src={Arrow} alt=""></img>
                </div>
                <div>
                    <img src={PokemonTest} alt=""></img>
                    <p>Pikachu Nº</p>
                    <img src={Arrow} alt=""></img>
                </div>
                <div>
                    <img src={evo2} alt=""></img>
                    <p>Raichu Nº</p>
                </div>
            </div>
        </section>
    );
};

export { PokeEvo };