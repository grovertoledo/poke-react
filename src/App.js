import React from 'react';
import './App.css';
import { Header } from './Header/Header';

function App() {
  return (
    <React.Fragment> {/* React necesita que solo se ponga un componente y dentro lo que sea que queramos. react.fragment es invisible en la renderización */}
      <Header />
        
      {/* <Search-panel /> */}
    </React.Fragment>
  );
}

export default App;
