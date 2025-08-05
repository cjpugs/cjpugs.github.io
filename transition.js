document.querySelectorAll("a.fade-link").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const overlay = document.getElementById("transition-screen");
        const href = this.getAttribute("href");

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

document.querySelectorAll("a.navlink").forEach(link =>{
    link.addEventListener("click", function(e){
        const clicked = e.target;
        
        const selectedElement = document.getElementsByClassName("navlink-selected")[0];
        selectedElement.classList.remove("navlink-selected");
        selectedElement.classList.add("navlink");
        
        clicked.classList.add("navlink-selected");
    });
});