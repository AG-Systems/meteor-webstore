import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
 
import Home from '../imports/ui/Home.jsx';
import ProductPage from '../imports/ui/Product.jsx';
import Navbar from '../imports/ui/Global/Navbar.jsx';
 
import $ from 'jquery';


Meteor.startup(() => {
  render(
    <BrowserRouter >
        <div>
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route exact path="/product/polish/:name" component={ProductPage} />
        </div>
    </BrowserRouter >    
    , document.getElementById('root'));
});


$(".inital-fade").fadeIn();
$(".last-fade").delay( 1000 ).fadeIn();