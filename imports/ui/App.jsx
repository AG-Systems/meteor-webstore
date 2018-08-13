import React, { Component } from 'react';
import ReactDOM from 'react-dom';


import Product from './Product.jsx';
 
import { withTracker } from 'meteor/react-meteor-data';
 
import { Products } from '../api/products.js';

class App extends Component {
  renderTasks() {
    return this.props.tasks.map((task) => (
      <Product key={task._id} task={task} />
    ));
  }
 
  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>
        </header>
 
        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    );
  }
}

export default withTracker(() => {
    
  Meteor.subscribe('products');
  
  return {
    tasks: Products.find({}, { sort: { createdAt: -1 } }).fetch(),
  };
})(App);