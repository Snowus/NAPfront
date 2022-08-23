import './App.css';
import { Header } from './components/header'
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { LandingPage } from './components/pages/landing'

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
        <div className="App">
          <Header/>
          <LandingPage/>
        </div>
    </React.Fragment>
  );
}

export default App;
