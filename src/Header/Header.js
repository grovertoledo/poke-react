import React from 'react';
import "../font/flaticon.css";
import navIcon from "../assets/icon.png";
import "./Header.css";

function Header() {
    return (
        <header>
          <section className="header-icons">
            <div className="icons">
                <a href="/"><span className="flaticon-001-facebook"></span></a>
                <a href="/"><span className="flaticon-002-twitter"></span></a>
                <a href="/"><span className="flaticon-011-instagram"></span></a>
                <a href="/"><span className="flaticon-010-linkedin"></span></a>
                <a href="/"><span className="flaticon-003-whatsapp"></span></a>
            </div>
          </section>
          <nav>
              <section class="nav-logo-container">
                  <a href="/"><img src={navIcon} alt="Logo de pokedex"></img></a>
                  <span>Pokédex</span>
              </section>
              <section class="about-me">
                  <a href="https://github.com/grovertoledo98">Sobre mí</a>
              </section>
          </nav>
        </header>
    );
};

export { Header };