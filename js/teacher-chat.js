$(document).ready(openChatWithAryaStark);

function openChatWithAryaStark() {
  $('.chat-header').empty();
  $('.messages').empty();

  $("#chat-with-tywin-lannister").css("border-color", '#0048cd');

  $('.chat-header').append('<img class="chat-header-avatar" src="../resources/images/aryastark.jpg">')
  $('.chat-header').append('<div class="chat-tab-user-info"><p>Arya Stark</p></div>');

  $('.messages').append('<div class="received"><p class="bubble">Not today...</p></div>');
  $('.messages').append('<div class="sent"><p class="bubble">What do we say to the God of Death?</p></div>');
}
