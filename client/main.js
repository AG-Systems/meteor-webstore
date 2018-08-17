import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
 
import Home from '../imports/ui/Home.jsx';
import ProductPage from '../imports/ui/Product.jsx';
import Cart from '../imports/ui/Cart.jsx';
import AllProducts from '../imports/ui/AllProducts.jsx';
import NewProducts from '../imports/ui/NewProducts.jsx';

import Navbar from '../imports/ui/Global/Navbar.jsx';
 
import $ from 'jquery';


Meteor.startup(() => {
  render(
    <BrowserRouter >
        <div>
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route exact path="/product/polish/:name" component={ProductPage} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/nails/all" component={AllProducts} />
            <Route exact path="/nails/new" component={NewProducts} />
        </div>
    </BrowserRouter >    
    , document.getElementById('root'));
});


