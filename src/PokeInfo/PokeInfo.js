import React from 'react';
import "./PokeInfo.css";
import PokemonTest from "../assets/pikachu.png";

function PokeInfo () {
    return (
        <section className="poke-info">
            <section className="poke-view">
                <div>
                    <p>Pikachu Nº 025</p>
                    <img src={PokemonTest} alt=""></img>
                </div>
                <div className="types">
                    <h3>Tipos:</h3>
                    <p>Eléctrico</p>
                </div>
            </section>
            <section className="poke-about">
                <div className="description">
                    <h3>Descripción:</h3>
                    <p>Cuanto más potente es la energía eléctrica que genera este Pokémon, más suaves y elásticas se vuelven las bolsas de sus mejillas.</p>
                </div>
            </section>
        </section>
    );
};

export { PokeInfo };