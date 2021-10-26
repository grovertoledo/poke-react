import React from 'react';
import { DataContext } from '../DataContext/DataContext';
import { Header } from '../Header/Header';
import { SearchPanel } from "../SearchPanel/SearchPanel";
import { PokeInfo } from "../PokeInfo/PokeInfo";
import { PokeEvo } from "../PokeEvo/PokeEvo";
import { Footer } from "../Footer/Footer";
// import { GetData } from "./utils/GetData";
import { Modal } from "../Modal/Modal";
import "./App.css";

function AppUI() {
    const {
        openModal,
    } = React.useContext(DataContext);
    return (
        <React.Fragment> {/* React necesita que solo se ponga un componente y dentro lo que sea que queramos. react.fragment es invisible en la renderización */}
            {!!openModal && (
                <Modal />
            )}
            <Header />
            <main>
                {/* <SearchPanel>
                    {error && <p>There was an error, reload the page.</p>}
                    {loading && <p>We are loading, do not worry.</p>}
                </SearchPanel> */}
                <SearchPanel />
                <PokeInfo />
                <PokeEvo />
            </main>
            <Footer/>
      </React.Fragment>
    );
};

export { AppUI };