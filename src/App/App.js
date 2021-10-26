import React from 'react';
import './App.css';
import { DataProvider } from "../DataContext/DataContext";
import { AppUI } from './AppUI';

function App() {
  return (
    <DataProvider>
      <AppUI />
    </DataProvider>
  );
}

export default App;
