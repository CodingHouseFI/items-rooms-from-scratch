'use strict';

$(document).ready(init);

function init() {
  putRoomsInList();
  $('#addRoom').click(modalAddRoom);
}

function modalAddRoom(){
  swal({
    title: "New Room!",
    text: "Enter name of room:",
    type: "input",
    showCancelButton: true,
    closeOnConfirm: false,
    animation: "slide-from-top",
    inputPlaceholder: "Rumpus Room"
  }, function(inputValue){
    if (inputValue === false) return false;
    if (inputValue === "") {
      swal.showInputError("You need to write something!");
      return false;
    }
    $.post('/rooms', {room:{name: inputValue}})
    .done(function(room){
      $('#roomList').append(roomListElement(room));
      swal("Nice!", "You added: " + inputValue, "success");
    })
    .fail(function(err){
      swal.showInputError("Room add failed.");
    })
  }); 
}


function putRoomsInList() {
  $.get('/rooms')
  .done(function(rooms){
    var $rooms = rooms.map(function(room){
      return roomListElement(room);
    });
    $('#roomList').append($rooms);
  })
  .fail(function(err){
    console.error(err);
  });
}


function roomListElement(room){
  var $li = $('<li>').addClass('list-group-item room');
  $li.text(room.name);
  $li.data('id', room._id);
  return $li;
}
