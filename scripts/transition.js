window.addEventListener("pageshow", (e) => {
    // console.log("pageshow fired", e.persisted);
    cleaner()

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
        console.log("Clicked on: ", clicked)
        if (clicked == null){
            console.log("Clicked was null")
        }


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

function navSelectedConsistency(){
    // grab the current page name
    const pageName = window.location.pathname.split("/").pop();

    let toBeSelected = null;

    // if the page is Home 
    if (pageName === "index.html"){
        // declare toBeSelected as navlink-home
        toBeSelected = document.getElementById("navlink-home");
    
    // rinse and repeat for the other two 
    } else if (pageName === "projects.html") {
        toBeSelected = document.getElementById("navlink-projects");
    } else if (pageName === "about.html") {
        toBeSelected = document.getElementById("navlink-about");
    }

    const selectedElement = document.getElementsByClassName("navlink-selected")[0];
    if (selectedElement != null){
            selectedElement.classList.remove("navlink-selected");
            toBeSelected.classList.add("navlink");
    }
    // if toBeSelected is not null, then our nav link highlights are out of sync
    if (toBeSelected != null){
        // change the correct tag to navlink-selected
        toBeSelected.classList.remove("navlink");
        toBeSelected.classList.add("navlink-selected");
    }
}


let IDs = new Map();
IDs.set("navlink-home", "index.html");
IDs.set("navlink-projects", "projects.html");
IDs.set("navlink-about", "about.html");
function cleaner(){
    // Clear selection
    for (let Element of document.getElementsByClassName("navlink-selected"))
    {
        Element.classList.replace("navlink-selected", "navlink");
    }

    // Re-select current page 
    const pageName = window.location.pathname.split("/").pop();
    for (let Element of document.getElementsByClassName("navlink"))
    {
        let Id = Element.id;
        let IdDesiredSite = IDs.get(Id);
        if (IdDesiredSite === pageName)
        {
            Element.classList.replace("navlink", "navlink-selected");
            break;
        }
    }
}