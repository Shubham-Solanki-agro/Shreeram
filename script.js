const navLinks = document.querySelector(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
img = document.getElementById("img1");

menuOpenButton.addEventListener("click", () => {
    //Toggle Mobile Menu Visibility
    document.body.classList.toggle("show-mobile-menu");
});

//Close menu when the close button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click ());

//Close menu when the nav link is clicked
navLinks.forEach(link => {
    link.addEventListener("click", () => navLinks.click );
});

//Policy Popup
function PolicyFunction() {
    var policy = document.getElementById("myPopup");
    policy.classList.toggle("show");
}

//Function to enlarge the image
function enlargeImg() {
            img.style.transform = "scale(1.5)";
            img.style.transition = "transform 0.25s ease";
}

// Function to reset image size
function resetImg() {
            img.style.transform = "scale(1)";
            img.style.transition = "transform 0.25s ease";
}