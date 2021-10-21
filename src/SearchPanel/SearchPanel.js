import React from 'react';
import "./SearchPanel.css";

function SearchPanel () {
    return (
        <section className="search-bar">
            <div className="search">
                <form action="">
                    <label htmlFor="">Nombre o número</label><br></br>
                    <input type="text"></input><br></br>
                    <input type="submit" value="Busca"></input>
                </form>
            </div>
            <div className="search-text">
                <p>Busca tu pokémon usando su número o por su nombre.</p>
            </div>
        </section>
    );
};

export { SearchPanel };