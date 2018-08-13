import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
 
import App from '../imports/ui/App.jsx';
import Navbar from '../imports/ui/Global/Navbar.jsx';
 
Meteor.startup(() => {
  render(
    <BrowserRouter >
        <div>
            <Navbar />
            <Route exact path="/" component={App} />
        </div>
    </BrowserRouter >    
    , document.getElementById('root'));
});