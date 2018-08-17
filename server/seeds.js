import { Products } from '../imports/api/products.js';
import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  if (Products.find().count() === 0) {
    [
      {   name: "Cherry Red", 
          price: 6.50, 
          priceStr: "6.50",
          description: "Beautiful cherry fruit red", 
          img: [ "https://i.imgur.com/zjN2sLl.png", "https://i.imgur.com/a4fOhRf.png"], 
          url: "cherry-red",
          newProduct: false,
          bestSeller: true
        
      },
      {   name: "Fruit Punch Red", 
          price: 7.50, 
          priceStr: "7.50",
          description: "Sweet fruit punch red", 
          img: [ "https://i.imgur.com/zjN2sLl.png", "https://i.imgur.com/zjN2sLl.png"], 
          url: "fruitpunch-red",
          newProduct: true,
          bestSeller: true
        
      },
      {   name: "Strawberry Red", 
          price: 7.50, 
          priceStr: "7.50",
          description: "Sweet strawberry red", 
          img: [ "https://i.imgur.com/zjN2sLl.png", "https://i.imgur.com/zjN2sLl.png"], 
          url: "strawberry-red",
          newProduct: true,
          bestSeller: false
        
      },
      {   name: "Watermelon Red", 
          price: 5.50, 
          priceStr: "5.50",
          description: "Tarte watermelon red", 
          img: [ "https://i.imgur.com/zjN2sLl.png", "https://i.imgur.com/zjN2sLl.png"], 
          url: "watermelon-red",
          newProduct: true,
          bestSeller: false
        
      },
      {   name: "Pomegranate", 
          price: 5.50, 
          priceStr: "5.50",
          description: "Tarte pomegranate red", 
          img: [ "https://i.imgur.com/zjN2sLl.png", "https://i.imgur.com/zjN2sLl.png"], 
          url: "pomegranate-red",
          newProduct: true,
          bestSeller: false
        
      },
      {   name: "Sara Yellow", 
          price: 6.50, 
          priceStr: "6.50",
          description: "Stunning yellow like Sara", 
          img: [ "https://i.imgur.com/zjN2sLl.png", "https://i.imgur.com/zjN2sLl.png"], 
          url: "sara-yellow",
          newProduct: true,
          bestSeller: true
        
      },
      
    ].forEach(function(product){
      Products.insert(product);
    });
    
    console.log("db/seeds inserted");
  }
});