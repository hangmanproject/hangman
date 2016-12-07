'use strict';

var donateButton = document.getElementById('donate');

donateButton.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  alert('Just kidding. We\'re not going to take your money. But mostly because we haven\'t learned how yet...');
};
