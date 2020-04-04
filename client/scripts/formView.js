var FormView = {

  $form: $('#send'),
  $addRoom: $('.add-room-button'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
    FormView.$addRoom.on('click', FormView.handleAddRoom); // this provides the argument for the following function 'event'
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    // send typed message to server
    var getText = $('#message').val();
    var searchLocation = window.location.search;
    var user = searchLocation.substring(searchLocation.indexOf('=') + 1);
    $('message').html('');
    var postMessage = {
      username: user,
      text: getText,
      roomname: window.currentRoom
    };


  Parse.create(postMessage, App.renderMessages(), () => console.log('MY PONY IS DOWN'));
    document.getElementById('message').value = '';
  },

  handleAddRoom: (event) => {
    event.preventDefault();
    var newRoom = $('.new-room').val();
    var addRoomObject = {roomname: newRoom};

    Parse.create(addRoomObject, FormView.addRoomSuccess(newRoom), () => {console.log('Failed')});


  },

  addRoomSuccess: (roomName) => {
    window.currentRoom = roomName;
    document.getElementById('new-room-id').value = '';
    App.renderMessages();
    $('#roomSelect').append(`<option value="${roomName}">${roomName}</option>`);
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};