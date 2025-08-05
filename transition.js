document.querySelectorAll("a.fade-link").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const overlay = document.getElementById("transition-screen");
        const href = this.getAttribute("href");

        const clicked = e.target;

        const selectedElement = document.getElementsByClassName("navlink-selected")[0];
        selectedElement.classList.remove("navlink-selected");
        selectedElement.classList.add("navlink");

        if (clicked === document.getElementById("header-name-link")){
            console.log("home selected via title");
            document.getElementById("navlink-home").classList.add("navlink-selected");
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

window.addEventListener("load", () => {
    const overlay = document.getElementById("transition-screen");
    overlay.classList.remove("active");
});
