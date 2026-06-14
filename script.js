// MOBILE MENU

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const menuIcon = document.querySelector(".menu-btn i");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if(navLinks.classList.contains("active")){
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-times");
    }else{
        menuIcon.classList.remove("fa-times");
        menuIcon.classList.add("fa-bars");
    }

});

// CLOSE MENU AFTER CLICK

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuIcon.classList.remove("fa-times");
        menuIcon.classList.add("fa-bars");

    });

});

// SCROLL REVEAL

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(
".service-card,.project-card,.price-card,.section-title,.hero-content,.hero-image"
).forEach(el => {

    el.classList.add("hidden");
    observer.observe(el);

});

// CLICK POP EFFECT

document.querySelectorAll(
"a,button,.service-card,.project-card,.price-card"
).forEach(item => {

    item.addEventListener("click", () => {

        item.classList.add("click-pop");

        setTimeout(() => {
            item.classList.remove("click-pop");
        },300);

    });

});

// HEADER SHADOW ON SCROLL

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if(window.scrollY > 50){

        header.style.boxShadow =
        "0 10px 30px rgba(0,0,0,.4)";

    }else{

        header.style.boxShadow = "none";

    }

});

window.addEventListener("scroll",()=>{

const winScroll =
document.documentElement.scrollTop;

const height =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;

const scrolled =
(winScroll/height)*100;

document.getElementById("progressBar")
.style.width = scrolled + "%";

});

const glow =
document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";
glow.style.top=e.clientY+"px";

});