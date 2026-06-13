// ========================
// WEBJAY PREMIUM JS
// ========================

// MOBILE MENU

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if(navLinks.classList.contains("active")){
        menuBtn.innerHTML = '<i class="fas fa-times"></i>';
    }else{
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }

});



// SMOOTH SCROLL

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({
            behavior:"smooth"
        });

    });

});

// COUNTER ANIMATION

const counters = document.querySelectorAll(".stat-box h2");

const startCounter = () => {

    counters.forEach(counter => {

        const text = counter.innerText;

        let target = parseInt(text);

        let count = 0;

        const update = () => {

            if(count < target){

                count++;

                if(text.includes("%")){
                    counter.innerText = count + "%";
                }
                else if(text.includes("+")){
                    counter.innerText = count + "+";
                }
                else{
                    counter.innerText = count;
                }

                setTimeout(update,20);
            }

        };

        update();

    });

};

const statsSection = document.querySelector(".stats");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            startCounter();

            observer.unobserve(statsSection);

        }

    });

});

observer.observe(statsSection);

// SCROLL REVEAL ANIMATION

const revealElements = document.querySelectorAll(
".service-card, .price-card, .project-card, .card, .step, .testimonial-card, .faq-item"
);

const revealObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

revealElements.forEach(el => {

    el.classList.add("hidden");

    revealObserver.observe(el);

});

// HEADER SHADOW ON SCROLL

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if(window.scrollY > 50){

        header.style.boxShadow =
        "0 10px 30px rgba(0,170,255,.15)";

    }else{

        header.style.boxShadow = "none";

    }

});

// PORTFOLIO IMAGE CLICK ZOOM

document.querySelectorAll(".project-card img")
.forEach(img => {

    img.addEventListener("click", () => {

        const overlay = document.createElement("div");

        overlay.style.position = "fixed";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.background = "rgba(0,0,0,.9)";
        overlay.style.display = "flex";
        overlay.style.alignItems = "center";
        overlay.style.justifyContent = "center";
        overlay.style.zIndex = "9999";

        const image = document.createElement("img");

        image.src = img.src;
        image.style.maxWidth = "90%";
        image.style.maxHeight = "90%";
        image.style.borderRadius = "20px";

        overlay.appendChild(image);

        document.body.appendChild(overlay);

        overlay.addEventListener("click", () => {

            overlay.remove();

        });

    });

});

console.log("🚀 WebJay Premium Website Loaded");

icons.forEach(icon => {

icon.addEventListener('click', () => {

icon.classList.add('icon-ripple');

setTimeout(() => {

icon.classList.remove('icon-ripple');

},600);

});

});

const icons = document.querySelectorAll(
'.service-card i, .social-icons i, .footer-links i'
);

icons.forEach(icon => {

icon.addEventListener('click', () => {

icon.classList.add('icon-click');

setTimeout(() => {

icon.classList.remove('icon-click');

},400);

});

});



// PREMIUM CLICK EFFECT

const clickableItems = document.querySelectorAll(`
a,
button,
.plan-btn,
.cta-btn,
.btn-secondary,
.service-card,
.price-card,
.project-card,
.card,
.step,
.whatsapp,
.logo img
`);

clickableItems.forEach(item => {

item.addEventListener("click", () => {

item.classList.add("click-pop");

setTimeout(() => {

item.classList.remove("click-pop");

},350);

});

});