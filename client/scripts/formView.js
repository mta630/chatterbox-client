var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    console.log('click!');
    // send typed message to server
    var message = $('#message').val();
    console.log(window.location.search);
    var searchLocation = window.location.search;
    var user = searchLocation.substring(searchLocation.indexOf('=') + 1);
    console.log(user);
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};