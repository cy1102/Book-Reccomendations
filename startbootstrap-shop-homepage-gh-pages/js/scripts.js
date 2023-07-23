/*!
* Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

// Filtering function

// filterBooks('fantasy');
function filterBooks(genre) {
  // Get all books
  var books = document.getElementsByClassName('col mb-5');
  
  // Loop through all books
  for(var i = 0; i < books.length; i++) {
    var book = books[i];
    
    // Check if the book belongs to the selected genre
    if(book.classList.contains(genre)) {
      // If it does, show the book
      book.style.display = 'block';
    } else {
      // If it does not, hide the book
      book.style.display = 'none';
    }
  }
}
