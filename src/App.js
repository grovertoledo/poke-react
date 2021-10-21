import React from 'react';
import './App.css';
import { Header } from './Header/Header';
import { SearchPanel } from "./SearchPanel/SearchPanel";
import { PokeInfo } from "./PokeInfo/PokeInfo";
import { PokeEvo } from "./PokeEvo/PokeEvo";
import { Footer } from "./Footer/Footer";

function App() {
  return (
    <React.Fragment> {/* React necesita que solo se ponga un componente y dentro lo que sea que queramos. react.fragment es invisible en la renderización */}
      <Header />
      <main>
        <SearchPanel />
        <PokeInfo />
        <PokeEvo />
      </main>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
