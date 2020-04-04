var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    // send typed message to server
    var getText = $('#message').val();
    var searchLocation = window.location.search;
    var user = searchLocation.substring(searchLocation.indexOf('=') + 1);

    var postMessage = {
      username: user,
      text: getText,
      roomname: window.currentRoom
    };

    Parse.create(postMessage, MessagesView.render(), () => console.log('MY PONY IS DOWN'));



  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};