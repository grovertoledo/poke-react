import React from 'react';
import "./PokeInfo.css";
import { DataContext} from "../DataContext/DataContext";

function PokeInfo () {
    const {
        info,
    } = React.useContext(DataContext);
    const pokeTypes = info.types;
    return (
        <section className="poke-info">
            <section className="poke-view">
                <div>
                    <p>{info.name} Nº {info.number}</p>
                    <img src={info.img} alt=""></img>
                </div>
                <div className="types">
                    <h3>Tipos:</h3>
                    {pokeTypes.map(
                        (pokeType) => <p key={pokeType}>
                            {pokeType}
                            </p>
                    )}
                </div>
            </section>
            <section className="poke-about">
                <div className="description">
                    <h3>Descripción:</h3>
                    <p>{info.description}</p>
                </div>
            </section>
        </section>
    );
};

export { PokeInfo };