$(document).ready(openChatWithTywinLannister);

$('#chat-with-tywin-lannister').click(openChatWithTywinLannister);

$('#chat-with-syrio-forell').click(openChatWithSyrioForell);

$('#chat-with-gendry-baratheon').click(openChatWithGendryBaratheon);

function openChatWithTywinLannister() {
  $('.chat-header').empty();
  $('.messages').empty();

  $("#chat-with-tywin-lannister").css("border-color", '#0048cd');
  $("#chat-with-syrio-forell").css("border-color", '#75c7fb');
  $("#chat-with-gendry-baratheon").css("border-color", '#75c7fb');

  $('.chat-header').append('<img class="chat-header-avatar" src="../resources/images/tywinlannister.png">')
  $('.chat-header').append('<div class="chat-tab-user-info"><p>Tywin Lannister</p></div>');

  $('.messages').append('<div class="sent"><p class="bubble">No, thanks!</p></div>');
  $('.messages').append('<div class="received"><p class="bubble">Are you interested in a position in my company?</p></div>');
  $('.messages').append('<div class="received"><p class="bubble">My name is Tywin Lannister and I am a CEO @ Lanniscorp</p></div>');
  $('.messages').append('<div class="received"><p class="bubble">Hello, Arya Stark</p></div>');
}

function openChatWithSyrioForell() {
  $('.chat-header').empty();
  $('.messages').empty();

  $("#chat-with-tywin-lannister").css("border-color", '#75c7fb');
  $("#chat-with-syrio-forell").css("border-color", '#0048cd');
  $("#chat-with-gendry-baratheon").css("border-color", '#75c7fb');

  $('.chat-header').append('<img class="chat-header-avatar" src="../resources/images/syrioforell.webp">')
  $('.chat-header').append('<div class="chat-tab-user-info"><p>Syrio Forell</p></div>');

  $('.messages').append('<div class="sent"><p class="bubble">Not today...</p></div>');
  $('.messages').append('<div class="received"><p class="bubble">What do we say to the God of Death?</p></div>');
}

function openChatWithGendryBaratheon() {
  $('.chat-header').empty();
  $('.messages').empty();

  $("#chat-with-tywin-lannister").css("border-color", '#75c7fb');
  $("#chat-with-syrio-forell").css("border-color", '#75c7fb');
  $("#chat-with-gendry-baratheon").css("border-color", '#0048cd');

  $('.chat-header').append('<img class="chat-header-avatar" src="../resources/images/gendrybaratheon.jpg">')
  $('.chat-header').append('<div class="chat-tab-user-info"><p>Gendry Baratheon</p></div>');

  $('.messages').append('<div class="received"><p class="bubble">No, this is weird...</p></div>');
  $('.messages').append('<div class="sent"><p class="bubble">Do you like chasing cats?</p></div>');
}
