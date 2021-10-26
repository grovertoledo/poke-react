import React from 'react';
import "../font/social/flaticon.css";
import navIcon from "../assets/icon.png";
import "./Header.css";

function Header() {
    return (
        <header>
          <section className="header-icons">
            <div className="icons">
                <a href="www.facebook.com/grover.toledo.71/"><span className="flaticon-001-facebook"></span></a>
                <a href="www.twitter.com/grover_toledo"><span className="flaticon-013-twitter-1"></span></a>
                <a href="www.instagram.com/grover.toledo/"><span className="flaticon-011-instagram"></span></a>
                <a href="www.linkedin.com/in/grover-toledo-770578224/"><span className="flaticon-010-linkedin"></span></a>
                <a href="wa.link/b9fmxk"><span className="flaticon-003-whatsapp"></span></a>
            </div>
          </section>
          <nav>
              <section className="nav-logo-container">
                  <a href="/"><img src={navIcon} alt="Logo de pokedex"></img></a>
                  <span>PokeFinder</span>
              </section>
              <section className="about-me">
                  <a href="https://github.com/grovertoledo98">About me</a>
              </section>
          </nav>
        </header>
    );
};

export { Header };