var carousel = document.getElementById('carousel');

// Buttons
var next = document.getElementById('next');
var previous = document.getElementById('previous');

carousel.style.marginLeft = 0;


next.onmouseover = function(event) {
  console.log(event);
 next.style.opacity = 0.2;
};

next.onmouseout = function(event) {
  console.log(event);
  next.style.opacity = 0.5;
};


previous.onmouseover = function(event) {
  console.log(event);
  previous.style.opacity = 0.2;
};

previous.onmouseout = function(event) {
  console.log(event);
  previous.style.opacity = 0.5;
};






next.addEventListener("click", next);
// Create mouseoveer and mouseexit events for the buttons
// to change their opacity from .5 to .2

// Create onclick events to advance the images
