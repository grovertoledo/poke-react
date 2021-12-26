import React from 'react';
import "../font/social/flaticon.css";
import navIcon from "../assets/icon.png";
import "./Header.css";

function Header() {
    return (
        <header>
          <section className="header-icons">
            <div className="icons">
                <a href="https://www.twitter.com/grover_toledo"><span className="flaticon-013-twitter-1"></span></a>
                <a href="https://www.instagram.com/grover.toledo/"><span className="flaticon-011-instagram"></span></a>
                <a href="https://www.linkedin.com/in/grovertoledo/"><span className="flaticon-010-linkedin"></span></a>
                <a href="https://wa.link/b9fmxk"><span className="flaticon-003-whatsapp"></span></a>
            </div>
          </section>
          <nav>
              <section className="nav-logo-container">
                  <a href="/"><img src={navIcon} alt="Logo de pokedex"></img></a>
                  <span>PokeFinder</span>
              </section>
              <section className="about-me">
                  <a href="https://github.com/grovertoledo">About me</a>
              </section>
          </nav>
        </header>
    );
};

export { Header };