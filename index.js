const bookList = document.getElementById('list');
fetch('http://localhost:3000/books')
  .then(response => response.json())
  .then(books => {
    books.forEach(book => {
      const li = document.createElement('li');
      li.textContent = book.title;
      bookList.appendChild(li);
    });
  });
  const bookList = document.getElementById('list');
  const bookDetails = document.getElementById('show-panel');
  
  bookList.addEventListener('click', event => {
    if (event.target.nodeName === 'LI') {
      const bookId = event.target.dataset.id;
      fetch(`http://localhost:3000/books/${bookId}`)
        .then(response => response.json())
        .then(book => {
          // Update the book details in the DOM
          bookDetails.innerHTML = `
            <img src="${book.img_url}">
            <h2>${book.title}</h2>
            <p>${book.description}</p>
            <ul>${book.users.map(user => `<li>${user.username}</li>`).join('')}</ul>
            <button class="like-btn">Like</button>
          `;
          // Attach an event listener to the Like button
          const likeBtn = bookDetails.querySelector('.like-btn');
          likeBtn.addEventListener('click', () => {
            // Handle Like a Book functionality
          });
        });
    }
  });
  const bookDetails = document.getElementById('show-panel');

  bookDetails.addEventListener('click', event => {
    if (event.target.nodeName === 'BUTTON' && event.target.className === 'like-btn') {
      const bookId = event.target.dataset.id;
      fetch(`http://localhost:3000/books/${bookId}`)
        .then(response => response.json())
        .then
   