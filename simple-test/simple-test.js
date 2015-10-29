Menu = new Mongo.Collection("menu");

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.body.helpers({
    menu: function () {
      var items = Menu.find({});
      console.log(items);
      return items;
    }
  });

  Template.hello.helpers({
    counter: function () {
      var counter = Session.get('counter');
      console.log(counter);
      return counter;
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
