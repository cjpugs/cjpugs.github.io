//TUTORIAL:  https://www.youtube.com/watch?v=KcdBOoK3Pfw

//retrieve html elements
const slideshow = document.querySelector(".slideshow-images");
const images = document.querySelectorAll(".slideshow-images img");
const dots = document.querySelectorAll(".slideshow-dot");

//Buttons
const prevButton = document.querySelector("#prev-button");
const nextButton = document.querySelector("#next-button");

//Counter
let counter = 1;
const size = slideshow.clientWidth;

// Start the slidshow at the first image (not the clone)
slideshow.style.transform = "translateX(" + (-size * counter) + "px)";
dots[0].classList.add("active");



//Button listeners
nextButton.addEventListener("click", ()=>{
    // if the counter will go out of bounds, return
    if (counter >= images.length - 1) return;

    // set transition style
    slideshow.style.transition = "transform 0.4s ease-in-out";

    // remove the current active dot (so it's no longer colored in)
    dots[counter-1].classList.remove("active");

    // increment counter
    counter++;

    // shift the slideshow forward
    slideshow.style.transform = "translateX(" + (-size * counter) + "px)";

    // check if this is a wraparound change, and then update the active dot
    if (counter == images.length-1){
        dots[0].classList.add("active");
    } else {
        dots[counter-1].classList.add("active");
    }

});

// same exact methodology but for the prev button (counter will decrement)
prevButton.addEventListener("click", ()=>{
    if (counter <= 0) return;
    slideshow.style.transition = "transform 0.4s ease-in-out";

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
    // if the image is "last clone" that means that it needs to wrap around to the back of the slideshow
    if (images[counter].id === "last-clone"){
        // set transition to none
        slideshow.style.transition = "none";

        // set counter
        counter = images.length - 2;

        // teleport!
        slideshow.style.transform = "translateX(" + (-size * counter) + "px)";
    }

    // if the image is "first-clone" that means that it needs to wrap around to the front of the slideshow
    if (images[counter].id === "first-clone"){
        // set transition to none
        slideshow.style.transition = "none";

        // set counter
        counter = images.length - counter;

        // teleport!
        slideshow.style.transform = "translateX(" + (-size * counter) + "px)";
    }

});


//dot click listeners
for(var i = 0; i < dots.length; i++){
    dots[i].addEventListener("click", function(e) { 
        dotClick(e.target.id);
    });
}

function dotClick(target){
    // find the right dot index
    var index = 0;
    for (var i = 0; i < dots.length; i++){
        if (dots[i].id === target){
            index = i;
            break;
        }
    }

    // same usual thing (see button listeners for the same code)
    slideshow.style.transition = "transform 0.4s ease-in-out";
    dots[counter-1].classList.remove("active");

    counter = index + 1;

    dots[counter-1].classList.add("active");
    slideshow.style.transform = "translateX(" + (-size * counter) + "px)";
}