//retrieve html elements
const slideshow = document.querySelector(".slideshow-images");
const images = document.querySelectorAll(".slideshow-images img");
const dots = document.querySelectorAll(".slideshow-dot");

//Buttons
const prevButton = document.querySelector("#prev-button");
const nextButton = document.querySelector("#next-button");

//Counter
let counter = 1;
let size = images[0].clientWidth;

// Start the slidshow at the first image (not the clone)
slideshow.style.transform = "translateX(" + (-size * counter) + "px)";
dots[0].classList.add("active");



//Button listeners
nextButton.addEventListener("click", ()=>{
    if (counter >= images.length - 1) return;
    slideshow.style.transition = "transform 0.4s ease-in-out";
    size = images[counter].clientWidth;
    dots[counter-1].classList.remove("active");

    counter++;
    slideshow.style.transform = "translateX(" + (-size * counter) + "px)";

    if (counter == images.length-1){
        dots[0].classList.add("active");
    } else {
        dots[counter-1].classList.add("active");
    }

});

prevButton.addEventListener("click", ()=>{
    if (counter <= 0) return;
    slideshow.style.transition = "transform 0.4s ease-in-out";
    size = images[counter].clientWidth;
    dots[counter-1].classList.remove("active");

    counter--;
    slideshow.style.transform = "translateX(" + (-size * counter) + "px)";
    if (counter == 0){
        dots[dots.length-1].classList.add("active");
    } else {
        dots[counter-1].classList.add("active");
    }
});


// Wrap-around logic
slideshow.addEventListener("transitionend", ()=>{
    if (images[counter].id === "last-clone"){
        slideshow.style.transition = "none";
        size = images[counter].clientWidth;
        counter = images.length - 2;
        slideshow.style.transform = "translateX(" + (-size * counter) + "px)";
    }

    if (images[counter].id === "first-clone"){
        slideshow.style.transition = "none";
        counter = images.length - counter;
        slideshow.style.transform = "translateX(" + (-size * counter) + "px)";
    }

});