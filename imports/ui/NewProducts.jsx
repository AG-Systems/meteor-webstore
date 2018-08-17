import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link }from 'react-router-dom';
import FadeIn from 'react-fade-in';


import Product from './Product.jsx';
 
import { withTracker } from 'meteor/react-meteor-data';
 
import { Products } from '../api/products.js';

class NewProducts extends Component {
  
  renderNew() {
    return this.props.products.map((product, index) => (
      <Link to={"/product/polish/" + product.url } key={index} style={{ textDecoration: "none", maxWidth: "300px", margin: "0 auto" }}>
        <div className="card mb-5" style={{ maxWidth: "300px", margin: "0 auto"}}  >
          <img className="card-img-top" src={ product.img[0] } alt="Card image cap" />
          <div className="card-body">
            <h4 className="card-title text-center text-dark">{ product.name }</h4>
            <p className="card-text text-center text-dark">${ product.priceStr }</p>
              <div className="text-center">
                <button className="btn btn-danger"> View Polish </button>
              </div>
          </div>
        </div>
      </Link>
    ));
  }
  render() {
    return (
      <div>
        <div className="bg-pink" style={{ minHeight: "100vh", height: "auto" }}>
          <div style={{ width: "100%", height: "50px" }}></div>
      	    <div className="container">
      	      <div className="row">
      	        <div className="col-sm-12">
      	           <h1 className="text-center">
                        New Products
                    </h1>
                    <h3 className="text-center">Check out our latest nail products.</h3>
                   <div style={{ width: "100%", height: "50px" }}></div>
      	           <div className="card-deck">
                    { this.renderNew() }
                  </div>
      	        </div>
      	      </div>
      	     
  
              </div>
              <div style={{ width: "100%", height: "50px" }}></div>
          </div>
      </div>
    );
  }
}

export default withTracker(() => {
    
  Meteor.subscribe('products');
  
  return {
    products: Products.find({ newProduct: true}, { sort: { createdAt: -1 } }).fetch(),
  };
})(NewProducts);