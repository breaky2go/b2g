import { Orders } from "/lib/collections";
Meteor.subscribe("Orders");
    
    Template.bt_orders.helpers({
      orders: function() {
          var orders =  Orders.find(/*{'workflow.status': "new"}*/).fetch();
          
          _.each(orders, function(order) {
            var groupedItems = _.groupBy(order.items, 'productId');
            order['groupedItems'] = new Array();
            var i = 0;
            _.each(_.values(groupedItems), function(items) {
              order.groupedItems[i]= items[0];
              order.groupedItems[i]['quantity'] = items.length;
              console.log({Item: items[0], Total: items.length});
              i++;
            });
          });
          
          console.log(orders[0]);
          return orders;
        }
      });