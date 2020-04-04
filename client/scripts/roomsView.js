var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    var store = Rooms.findRooms();
    console.log(store);
    return store;
  },

  render: function() {
  }


};
