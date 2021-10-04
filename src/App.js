import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
// Components
import Navbar from './components/Navbar';
import Home from './components/Home';
import Basket from './components/Basket';
import About from './components/About';
import Liked from './components/Favourite';
import ForMen from './components/ForMen';
import ForWomen from './components/ForWomen';
import Contacts from './components/Contacts';
function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/about'>
          <About></About>
        </Route>
        <Route path='/forMen'>
          <ForMen></ForMen>
        </Route>
        <Route path='/forWomen'>
          <ForWomen></ForWomen>
        </Route>
        <Route path='/favourite'>
          <Liked></Liked>
        </Route>
        <Route path='/basket'>
          <Basket></Basket>
        </Route>
        <Route path='/contacts'>
          <Contacts></Contacts>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
