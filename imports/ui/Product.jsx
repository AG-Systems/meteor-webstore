import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, withRouter }from 'react-router-dom';
import { Slide } from 'react-slideshow-image';

import Product from './Product.jsx';
import { withTracker } from 'meteor/react-meteor-data';
import { Products } from '../api/products.js';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import $ from 'jquery';

class ProductPage extends Component {
  
  renderThumbnails() {
    return this.props.product[0].img.map((img, index) => (
          <div className="card" key={index} style={{ background: "transparent", border: "none", maxWidth: "80px" }}>
            <img className="card-img-top" src={ img } height="80" width="80" />
          </div>
    ));
  }
  
  componentDidMount() {
    setTimeout(function () {
        $("#product-page").animate({
          background: "#ffffff !important"
      }, 1000); 
    }, 2000);
 
  }
  
  render() {
    if(this.props.product[0])
    {
          const images = [
          this.props.product[0].img[0],
          this.props.product[0].img[0],
        ];
        const options = [
          'Quantity: 1', 'Quantity: 2', 'Quantity: 3'
        ];
        
        const defaultOption = options[0];
        
      return (
          <div id="product-page">
            <div className="container">
              <div className="row">
                <div className="col-sm-6">
                    <Slide
                      images={images}
                      duration={5000}
                      transitionDuration={500}
                    />
                    <br />
                    
                    <div className="card-deck">
                        { this.renderThumbnails() }
                    </div>
                </div>
                <div className="col-sm-6">
                  <div className="jumbotron" style={{ background: "transparent", border: "none" }}>
                    <h1 className="display-4">{ this.props.product[0].name }</h1>
                    <h6 className="display-6">${ this.props.product[0].price }</h6>
                    <p className="lead">{ this.props.product[0].description }</p>
                    <hr className="my-4" />
                    <div>
                        <div className="col-6" style={{ float: "left" }}>
                            <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
                        </div>
                        <div className="col-6" style={{ float: "right" }}>
                           <button type="button" className="btn btn-outline-dark btn-md">Add to cart</button>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      );
    } else {
      return( null );
    }
    
  }
}

export default withTracker(({ match }) => {
  
  Meteor.subscribe('products').ready();
  
  
  return {
    product: Products.find({ url: match.params.name }).fetch(),
  };
  
})(ProductPage);