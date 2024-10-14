// index.js

// Callbacks

const handleClick = (ramen) => {
const detailImage = document.querySelector('.detail-image');
const detailName = document.querySelector('.name');
const detailRestaurant = document.querySelector('.restaurant');
const ramenDisplay = document.getElementById('rating-display');
const commentDisplay = document.getElementById('comment-display');

detailImage.src = ramen.image;  
detailName.textContent = ramen.name;
detailRestaurant.textContent = ramen.restaurant;
ramenDisplay.textContent = ramen.rating;
commentDisplay.textContent = ramen.comment;
};

const addSubmitListener = () => {
const form = document.querySelector('#new-ramen');
form.addEventListener('submit', (e) => {
 e.preventDefault();

 const newRamen = {
   name: document.querySelector('#new-name').value,
   restaurant: document.querySelector('#new-restaurant').value,
   image: document.querySelector('#new-img').value,  
   rating: document.querySelector('#new-rating').value,
   comment: document.querySelector('#new-comment').value,
 };

 const ramenImg = document.createElement('img');
 ramenImg.src = newRamen.image;  
 ramenImg.alt = newRamen.name;

 
 ramenImg.addEventListener('click', () => handleClick(newRamen));

 document.querySelector('#ramen-menu').appendChild(ramenImg);
 form.reset();
});
};

const displayRamens = () => {
fetch('http://localhost:3000/ramens')
 .then(response => response.json())
 .then(ramens => {
   ramens.forEach(ramen => {
     const ramenImg = document.createElement('img');
     ramenImg.src = ramen.image;  
     ramenImg.alt = ramen.name;

     // Correct event listener
     ramenImg.addEventListener('click', () => handleClick(ramen));

     document.getElementById('ramen-menu').appendChild(ramenImg);
   });
 })
 .catch((error) => {
   console.log('Error fetching:', error);
 });
};

const main = () => {
displayRamens();
addSubmitListener();
};

document.addEventListener('DOMContentLoaded', main);

// Export functions for testing
export {
displayRamens,
addSubmitListener,
handleClick,
main,
};

