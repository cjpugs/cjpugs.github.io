document.querySelectorAll("a.fade-link").forEach(link => {
            link.addEventListener("click", function(e) {
                e.preventDefault();
                const overlay = document.getElementById("transition-screen");
                const href = this.getAttribute("href");

                overlay.classList.add("active");
                setTimeout(() => {
                    window.location.href = href; // navigate after animation has played
                }, 600); //match the time to the length of the animation
            });
        });

window.addEventListener("load", () => {
    const overlay = document.getElementById("transition-screen");
    overlay.classList.remove("active");
});