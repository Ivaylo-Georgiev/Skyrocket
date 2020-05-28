$(document).ready(openChatWithAryaStark);

function openChatWithAryaStark() {
  $('.chat-header').empty();
  $('.messages').empty();

  $("#chat-with-tywin-lannister").css("border-color", '#0048cd');

  $('.chat-header').append('<img class="chat-header-avatar" src="../resources/images/aryastark.jpg">')
  $('.chat-header').append('<div class="chat-tab-user-info"><p>Arya Stark</p></div>');

  $('.messages').append('<div class="received"><p class="bubble">No, thanks!</p></div>');
  $('.messages').append('<div class="sent"><p class="bubble">Are you interested in a position in my company?</p></div>');
  $('.messages').append('<div class="sent"><p class="bubble">My name is Tywin Lannister and I am a CEO @ Lanniscorp</p></div>');
  $('.messages').append('<div class="sent"><p class="bubble">Hello, Arya Stark</p></div>');
}
