import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="page">
      <Header isLogin={false}/>
      <Route exact path="/">
        <Main />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
