const navLinks = document.querySelector(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
img = document.getElementById("img1");
img = document.getElementById("img2");
img = document.getElementById("img3");
img = document.getElementById("img4");
img = document.getElementById("img5");
img = document.getElementById("img6");
img = document.getElementById("img7");
img = document.getElementById("img8");
img = document.getElementById("img9");
img = document.getElementById("img10");
img = document.getElementById("img11");
img = document.getElementById("img12");
img = document.getElementById("img13");
img = document.getElementById("img14");
img = document.getElementById("img15");
img = document.getElementById("img16");
img = document.getElementById("img17");
img = document.getElementById("img18");
img = document.getElementById("img19");
img = document.getElementById("img20");
img = document.getElementById("img21");
img = document.getElementById("img22");
img = document.getElementById("img23");
img = document.getElementById("img24");
img = document.getElementById("img25");
img = document.getElementById("img26");
img = document.getElementById("img27");
img = document.getElementById("img28");
img = document.getElementById("img29");
img = document.getElementById("img30");
img = document.getElementById("img31");
img = document.getElementById("img32");


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