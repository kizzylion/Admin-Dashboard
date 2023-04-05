
// interacative menu button

let menuButton = document.getElementById("menu-button");
let sideNav = document.getElementById("side-nav")
menuButton.addEventListener("click", function(){
    sideNav.classList.toggle("activate")
})


// Activating Active state on sidebar nav links when clicked
let navBtn = document.querySelectorAll("#menu-section .list-group-item");

navBtn.forEach(link => {
    link.addEventListener("click", (e)=> {
        e.preventDefault();
        navBtn.forEach(link => link.classList.remove("active"));
        link.classList.add("active")
    })
})


// Share your work button fixed

document.addEventListener('DOMContentLoaded', function() {
    const shareworkLabel = document.querySelector("#shareworklabel");
    shareworkLabel.textContent = 'sharework';

    window.addEventListener('resize', function () {
        if (window.innerWidth <= 567) {
            shareworkLabel.textContent = '+';
        } else {
            shareworkLabel.textContent = 'sharework';
        }
    });
});
