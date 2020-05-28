$('#search-form').submit(function(event) {
  event.preventDefault();
  $('#search-results').empty();
  $('#search-results').append('<p class="warning">No results found</p>');
  document.getElementById("search-form").reset();
});
