window.currentRoom = "hrr45";
window.allRooms = [];
window.friendsList = [];

var App = {

   // As the general room at initialization

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

  },

  fetch: function(callback = () => {}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);

      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  },

  renderMessages : () => {
    MessagesView.render();
  },

  sendToServer: (message, successCB, failureCB) => {
    Parse.create(message, successCB, failureCB);
  }

};
