TestCol = new Meteor.Collection('test');

Meteor.publish("MyOrders", function() {
    var tmp = ReactionCore.Collections.Orders.find();
    return tmp;
});