console.log("transition.js loaded");

// window.addEventListener("pageshow", (e) => {
//     console.log("pageshow fired", e.persisted);

//     const overlay = document.getElementById("transition-screen");
//     console.log(overlay.className);

//     overlay.classList.remove("active");
//     console.log(overlay.className);
// });
window.addEventListener("load", () => {
    console.log("load");
});

window.addEventListener("pageshow", (e) => {
    console.log("pageshow", e.persisted);
});

window.addEventListener("pagehide", (e) => {
    console.log("pagehide", e.persisted);
});
document.querySelectorAll("a.fade-link").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const overlay = document.getElementById("transition-screen");
        const href = this.getAttribute("href");

        const clicked = e.target;

        const selectedElement = document.getElementsByClassName("navlink-selected")[0];

        // Potential bug area: if the user selects back button... then no link should be selected, right?
        if (selectedElement != null){
            selectedElement.classList.remove("navlink-selected");
            selectedElement.classList.add("navlink");
        }
        

        if (clicked === document.getElementById("header-name-link")){
            console.log("home selected via title");
            document.getElementById("navlink-home").classList.add("navlink-selected");
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

console.log("finished registering click handlers");