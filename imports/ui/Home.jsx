import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link }from 'react-router-dom';
import FadeIn from 'react-fade-in';


import Product from './Product.jsx';
 
import { withTracker } from 'meteor/react-meteor-data';
 
import { Products } from '../api/products.js';

class Home extends Component {
  
  renderBestSellers() {
    return this.props.products.map((product, index) => (
      <Link to={"/product/polish/" + product.url } key={index} style={{ textDecoration: "none", maxWidth: "300px", margin: "0 auto" }}>
        <div className="card" style={{ maxWidth: "300px", margin: "0 auto"}}  >
          <img className="card-img-top" src={ product.img[0] } alt="Card image cap" />
          <div className="card-body">
            <h4 className="card-title text-center text-dark">{ product.name }</h4>
            <p className="card-text text-center text-dark">${ product.price }</p>
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
        <FadeIn delay={400} transitionDuration={0}>
        	<div className="slide story inital-fade" id="slide-1">
        		<div className="container">
        			<div id="home-row-1" className="row clearfix">
        				<div className="col-12">
        					<h1 className="font-semibold">Pengwi Nails</h1>
        					<h4 className="font-thin">Elevate your beauty</h4>
        				</div>
        			</div>
        		</div>
        	</div>
        </FadeIn>
        <div className="bg-pink" style={{ minWidth: "100vh", height: "auto" }}>
          <div style={{ width: "100%", height: "50px" }}></div>
          <FadeIn delay={800}>
      	    <div className="container-fluid last-fade">
      	      <div className="row">
      	        <div className="col-sm-4">
      	          <div className="jumbotron" style={{ background: "transparent", border: "none" }}>
                    <h1 className="display-4">Best sellers</h1>
                    <p className="lead">View our best sellers</p>
                  </div>
      	        </div>
      	        
      	        <div className="col-sm-8">
      	           <div className="card-deck">
                    {this.renderBestSellers()}
                  </div>
      	        </div>
      	      </div>
      	     
  
              </div>
              <div style={{ width: "100%", height: "50px" }}></div>
            </FadeIn>
          </div>
      </div>
    );
  }
}

export default withTracker(() => {
    
  Meteor.subscribe('products');
  
  return {
    products: Products.find({}, { sort: { createdAt: -1 } }).fetch(),
  };
})(Home);