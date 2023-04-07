
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

// using close button "X" to close side nav menu
let closeBtn = document.querySelector("#closebtn")
closeBtn.addEventListener("click", function(){
    sideNav.classList.remove("activate")
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


//BUTTON FOR PROJECT LINK

const projectLinkBtn = document.querySelectorAll(".projectlink");

Array.from(projectLinkBtn).forEach(btn =>{
    btn.addEventListener("click", function(e){
        e.preventDefault();
        window.location.href = this.attributes[0].nodeValue;
    })
})