import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';


export const Orders = new Mongo.Collection('orders');

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('orders', function ordersPublication() {
    return Orders.find({});
  });
}
