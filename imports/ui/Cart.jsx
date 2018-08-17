import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, withRouter }from 'react-router-dom';
import { Slide } from 'react-slideshow-image';

import Product from './Product.jsx';
import { withTracker } from 'meteor/react-meteor-data';
import { Products } from '../api/products.js';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

class Cart extends Component {
  
  
  render() {
    
    if( !localStorage.getItem('app_cart') )
    {
      return (
          <div>
            <div className="container">
              <div className="row">
                <div className="col-12">
                    <div className="card mt-5" style={{ width: "18rem", margin: "0 auto" }}>
                      <div className="card-body">
                        <h5 className="card-title text-center">Shopping cart is empty</h5>
                        <p className="card-text"></p>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
      );
    } else {
      return ( 
          <div>
            <div className="container">
              <div className="row">
                <div className="col-12">
                    <div className="card mt-5" style={{ width: "18rem", margin: "0 auto" }}>
                      <div className="card-body">
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
    
    
  }
}

export default withTracker(({ match }) => {
  
  Meteor.subscribe('products').ready();
  
  
  return {
    products: Products.find({  }).fetch(),
  };
  
})(Cart);