import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, withRouter }from 'react-router-dom';

import Product from './Product.jsx';
 
import { withTracker } from 'meteor/react-meteor-data';

 
import { Products } from '../api/products.js';

class ProductPage extends Component {
  
  constructor(props) {
    super(props); 
    
    let currentProduct = { name: "", price: 0, description: ""}
    
    for (var i = 0, l = this.props.products.length; i < l; i++) {
        if(this.props.products[i].url === this.props.match.params.name)
        {
            currentProduct["price"] = this.props.products[i].price;
            currentProduct["name"] = this.props.products[i].name;
            currentProduct["description"] = this.props.products[i].description;
            break;
        }
    }
    
    console.log(this.props.products);
    this.state = { 
      name: currentProduct["name"],
      price: currentProduct["price"],
      description: currentProduct["description"]
    };
  }

  render() {
      return (
          <div>
            <div className="container">
              <div className="row">
                <div className="col-sm-6">
                </div>
                <div className="col-sm-6">
                  <div className="jumbotron" style={{ background: "transparent", border: "none" }}>
                    <h1 className="display-4">{ this.state.name }</h1>
                    <h6 className="display-6">${ this.state.price }</h6>
                    <p className="lead">{ this.state.description }</p>
                    <hr className="my-4" />
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      );
  }
}

export default withTracker(() => {
  
  Meteor.subscribe('products');
  

  return {
    products: Products.find({}).fetch(),
  };
  
})(ProductPage);