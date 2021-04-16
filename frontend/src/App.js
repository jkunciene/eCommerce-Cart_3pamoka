import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Screens
import HomeScreen from './views/HomeScreen';
import ProductScreen from './views/ProductScreen';
import CartScreen from './views/CartScreen';

//Components
import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import SideDrawer from './components/SideDrawer';

function App() {
  const [sideToggle, setSideToggle] = useState(false);
  return (
    <Router>
      <Navbar/>
      <SideDrawer show={sideToggle}/>
      <Backdrop show={sideToggle}/>
        <main>
          <Switch>
            <Route exact path='/' component={HomeScreen}/> 
            <Route exact path='/product/:id' component={ProductScreen}/> 
            <Route exact path='/cart' component={CartScreen}/> 
          </Switch>
        </main>     
    </Router>
  );
}

export default App;
