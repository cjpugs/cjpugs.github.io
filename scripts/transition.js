window.addEventListener("pageshow", (e) => {
    // console.log("pageshow fired", e.persisted);

    const overlay = document.getElementById("transition-screen");
    // console.log(overlay.className);

    overlay.classList.remove("active");
    // console.log(overlay.className);
});


document.querySelectorAll("a.fade-link").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const overlay = document.getElementById("transition-screen");
        const href = this.getAttribute("href");

        const clicked = e.target;


        // If the current page is one of the pages listed in the navbar (and is thus 'selected')
        // Then, grab that element, remove 'navlink-selected' and add 'navlink'
        const selectedElement = document.getElementsByClassName("navlink-selected")[0];

        if (selectedElement != null){
            selectedElement.classList.remove("navlink-selected");
            selectedElement.classList.add("navlink");
        } 
        
        //If the user clicked on my name in the top left corner
        if (clicked === document.getElementById("header-name-link")){
            console.log("home selected via title");
            document.getElementById("navlink-home").classList.add("navlink-selected");
        
        // if they clicked on "View More Projects" at the bottom of the home page
        } else if (clicked === document.getElementById("view-more-projects-link")){
            console.log("projects selected via view more");
            document.getElementById("navlink-projects").classList.add("navlink-selected");
        } else {
            console.log("navigating to new page");
            clicked.classList.add("navlink-selected");
        }


        overlay.classList.add("active");
        setTimeout(() => {
            window.location.href = href; // navigate after animation has played
        }, 300); //match the time to the length of the animation
    });
});

