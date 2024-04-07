// GEt Slider Item | Array.form [ES6 Feature]

var sliderImages = Array.from(
  document.querySelectorAll(".slider-container img")
);

// console.table(sliderImages);

var slidesCount = sliderImages.length;

var currentSlide = 1;

var prevButton = document.getElementById("prev");
var nextButton = document.getElementById("next");
var indicators = document.getElementById("indicators");

nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// Create The Main UL Element

var paginationElement = document.createElement("ul");
paginationElement.setAttribute("id", "pagination-ul");

for (var i = 1; i <= slidesCount; i++) {
  var paginationItem = document.createElement("li");
  paginationItem.setAttribute("data-index", i);
  paginationItem.appendChild(document.createTextNode(i));

  paginationElement.appendChild(paginationItem);
}

indicators.appendChild(paginationElement);
// Get The Pagination Items to the page
var paginationCreatedUL = document.getElementById("pagination-ul");

// Loop Through All The Items
for (var i = 0; i < paginationCreatedUL.children.length; i++) {
  paginationCreatedUL.children[i].onclick = function () {
    currentSlide = parseInt(this.getAttribute("data-index"));
    theChecker();
  };
}

theChecker();
// Next Slide Function
function nextSlide() {
  if (nextButton.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide++;
    theChecker();
  }
}

// previous Slide Function
function prevSlide() {
  if (prevButton.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide--;
    theChecker();
  }
}

function theChecker() {
  // Remove All Active Classes
  removeActiveClasses();

  // Set Active Class on current slide
  sliderImages[currentSlide - 1].classList.add("active");

  // Set Active Class on current pagination item
  paginationCreatedUL.children[currentSlide - 1].classList.add("active");

  //Check if Current Slide is the First Slide
  if (currentSlide == 1) {
    prevButton.classList.add("disabled");
  } else {
    prevButton.classList.remove("disabled");
  }

  //Check if Current Slide is the last Slide
  if (currentSlide == slidesCount) {
    nextButton.classList.add("disabled");
  } else {
    nextButton.classList.remove("disabled");
  }
}

function removeActiveClasses() {
  for (var i = 0; i < sliderImages.length; i++) {
    sliderImages[i].classList.remove("active");
    paginationCreatedUL.children[i].classList.remove("active");
  }
  //   sliderImages.forEach(function (img){
  //     img.classList.remove("active");
  //   })
}

$(function (){
  $('.the-toggler').on('click', function (){
    $('.navbar').slideToggle('slow');
  })
})