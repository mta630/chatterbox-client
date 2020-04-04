var Friends = {
  $userName: $('#username-format'),

  initialize: () => {},

  befriend: (userName) => {
    // event.preventDefault();

    // get the username
    window.friendsList.push(userName);
    App.renderMessages();
      // add them to the friendslist variable in Window
    // format their across the message panel using render
  }

};