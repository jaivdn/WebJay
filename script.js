const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");

    if(window.scrollY > 50){
        header.style.background = "rgba(0,0,0,0.85)";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.4)";
    }else{
        header.style.background = "rgba(0,0,0,0.35)";
        header.style.boxShadow = "none";
    }
});

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{
    threshold:0.1
});

document.querySelectorAll(
".service-card,.price-card,.project-card,.stat-box"
).forEach((el)=>{
    el.classList.add("hidden");
    observer.observe(el);
});

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

