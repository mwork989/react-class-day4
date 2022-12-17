import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Stocks from './components/Stocks/Stocks';
import Error from './components/Error/Error'
import NavBar from './components/Navbar/Navbar';
import Course from './components/Course/course';
import StockFunctionalComponent from './components/StocksF/StockF';

const appRouting = (
  <Router>
    <NavBar/>
    <div>
      <Switch>
        <Route exact={true} path='/'>
          <Redirect to='/Stocks'/>
        </Route>
        <Route path="/About" component={About}></Route>
       
        <Route exact={true} path="/Contact/:id/:designation/:address" component={Contact}></Route>
        <Route path="/Stocks/:type?" component={Stocks}></Route>
        <Route path="/StocksF" component={StockFunctionalComponent}></Route>
        <Route path="/courses" component={Course}></Route>
        <Route component={Error}></Route>
      </Switch>
    </div>
  </Router>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <div>
    {appRouting}
  </div>

);
