var carousel = document.getElementById('carousel');

// Buttons
var next = document.getElementById('next');
var previous = document.getElementById('previous');
var rotate = document.getElementById('CarouselRotate');


//  Image and carousel properties
carousel.style.marginLeft = 0;
var imgPixelWidth = 612;
var images = 3;


// Event Listener Functions

function toLeft() {
   var currentMargin = parseInt(carousel.style.marginLeft);
    carousel.style.marginLeft = (currentMargin - imgPixelWidth) + "px";
  if (Math.abs(currentMargin) === (images - 1) * imgPixelWidth) {
    carousel.style.marginLeft = "0px";
  };
};

function toRight(){
  var currentMargin = parseInt(carousel.style.marginLeft);
    carousel.style.marginLeft = (currentMargin + imgPixelWidth) + "px";
  if (Math.abs(currentMargin) === 0) {
    carousel.style.marginLeft = (-(images - 1) * imgPixelWidth) + "px";
  };
};

function rotate() {

}



// Event Listeners
rotate.addEventListener("click", Rotate )
next.addEventListener("mouseover", toRight);
previous.addEventListener("mouseover", toLeft);

window.onload = function() {
    next.onmouseover = function(event) {
      console.log(event);
     this.style.opacity = 0.2;
    };

    next.onmouseout = function(event) {
      console.log(event);
      this.style.opacity = 0.5;
    };

    previous.onmouseover = function(event) {
      console.log(event);
      this.style.opacity = 0.2;
    };

    previous.onmouseout = function(event) {
      console.log(event);
      this.style.opacity = 0.5;
    };

    rotate.onclick = function(event) {
      console.log(event)
    };

};


// Create mouseoveer and mouseexit events for the buttons
// to change their opacity from .5 to .2

// Create onclick events to advance the images
