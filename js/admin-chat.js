$(document).ready(openChatWithSyrioForell);

function openChatWithSyrioForell() {
  $('.chat-header').empty();
  $('.messages').empty();

  $("#chat-with-syrio-forell").css("border-color", '#0048cd');

  $('.chat-header').append('<img class="chat-header-avatar" src="../resources/images/syrioforell.webp">')
  $('.chat-header').append('<div class="chat-tab-user-info"><p>Syrio Forell</p></div>');

  $('.messages').append('<div class="received"><p class="bubble">Thank you.</p></div>');
  $('.messages').append('<div class="sent"><p class="bubble">Course Sword Fighting is created.</p></div>');
}
