var Rooms = {

  findRooms: () => {
    Parse.readAll((data) => {
      var mainArray = data.results;
      var allRooms = '';
      for (var key in mainArray) {
       var roomName = mainArray[key].roomname;

       if (allRooms.indexOf(roomName) === -1 && roomName) {
        window.allRooms.push(`${roomName}`);
        allRooms += `<option val="${roomName}">${roomName}</option>`;
       }

      }

      $('#roomSelect').append(allRooms);
    });


  }

};