var MessagesView = {

  $chats: $('#chats'),
  $room: $('.rooms'),

  initialize: function() {
    MessagesView.render();
    MessagesView.$room.on('change', MessagesView.handleSelect);
  },

  handleSelect: (event) => {
    event.preventDefault();

    // get value from the select event
    // var input = $('#message').val();
    window.currentRoom = $('#roomSelect').val();
    $('#room-title').html(window.currentRoom);
    MessagesView.render();
  },

  render: function() {
    Parse.readAll((data) => {
      $('#chats').html('');
      var mainArray = data.results;
      var allMessages = '';
      for (var key in mainArray) {
        var userName = mainArray[key].username;
        var text = JSON.stringify(mainArray[key].text);
        var createdAt = mainArray[key].createdAt;
        var timeISO = jQuery.timeago(createdAt);
        var roomName = mainArray[key].roomname;
        var regex = /(<script>)/g;

        if (userName) {
          if (userName.indexOf('<script>') !== -1) {
            userName = userName.replace(regex, 'lmao nice try');
          }
        }

        if (text) {
          if (text.indexOf('<script>') !== -1) {
            text = text.replace(regex, 'lmao nice try');
          }
        }
        if (roomName === window.currentRoom && userName && text && createdAt) {
          // add some shit to the timeline

          allMessages += `<div class= 'individual-message'><p><span id="username-format">${userName}</span><span class='date-format'>${timeISO}</span><br/>${text}</p><div>`;

        }

      }

      $('#chats').append(allMessages);
    });
  }



  //TO DO : CREATE A FUNCTION TO SHOW MESSAGES BASED ON ROOM NAME

};

// var date1 = (userArray[u].created_at).toISOString();
// var timeAgoDate1 = jQuery.timeago(date1);