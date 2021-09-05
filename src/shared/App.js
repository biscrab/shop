import React,{useState} from 'react'
import * as P from '../pages'
import {Route, Switch, Router} from 'react-router-dom';
import { ReactDOM } from 'react';
import '../styled/App.css'
import Header from '../contents/Header';

function App() {
  return(
    <>
    <Header />
    <Route exact path="/" component={P.Main}/>
    <Switch>
    <Route path="/catagory/:catagory" component={P.Catagory}/>
    <Route path="/catagory" component={P.Catagory}/>
    <Route path="/item" component={P.Item}/>
    <Route exact path="/order" component={P.Order}/>
    <Route exact path="/regist" component={P.Regist}/>
    <Route path="/admin/:id" component={P.Admin}/>
    <Route path="/admin" component={P.Admin}/>
    <Route exact path="/cart" component={P.Cart} />
    <Route exact path="/signup" component={P.SignUp} />
    </Switch>
    </>
  );
}

export default App;
