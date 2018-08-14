import { Products } from '../api/products.js';
import { Meteor } from 'meteor/meteor';

Meteor.startup(function () {
  if (Products.find({}).count() === 0) {
    [
      {name: "Cherry Red", price: 6.50, description: "Beautiful cherry fruit red", img: [ "https://i.imgur.com/Dw0ZYjH.jpg", "https://i.imgur.com/a4fOhRf.png"], url: "cherry-red"},
      {name: "Sara Yellow", price: 6.50, description: "Stunning flower like yellow like Sara", img: [""]}
    ].forEach(function(product){
      Products.insert(product);
    });
    
    console.log("db/seeds inserted");
  } else {
    console.log("there is already stuff in the db")
  }
});