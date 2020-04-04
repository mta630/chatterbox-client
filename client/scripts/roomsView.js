var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    var store = Rooms.findRooms();
    return store;
  },

  render: function() {
  }

  //TO DO : 'CREATE ROOM' BUTTON

};
