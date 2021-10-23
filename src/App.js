import React from 'react';
import './App.css';
import { Header } from './Header/Header';
import { SearchPanel } from "./SearchPanel/SearchPanel";
import { PokeInfo } from "./PokeInfo/PokeInfo";
import { PokeEvo } from "./PokeEvo/PokeEvo";
import { Footer } from "./Footer/Footer";
// import { GetData } from "./utils/GetData";
import { DataProvider } from "./DataContext/DataContext";

function App() {
  return (
    <DataProvider>
      <React.Fragment> {/* React necesita que solo se ponga un componente y dentro lo que sea que queramos. react.fragment es invisible en la renderización */}
        <Header />
        <main>
          <SearchPanel/>
          <PokeInfo />
          <PokeEvo />
        </main>
        <Footer/>
      </React.Fragment>
    </DataProvider>
  );
}

export default App;
