/*=========================================================
                    WEBJAY 2.0
=========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*====================================
            LOADER
    ====================================*/

    const loader = document.querySelector(".loader");

    window.addEventListener("load", () => {

        setTimeout(() => {

            loader.classList.add("hide");

        },1200);

    });

    /*====================================
            STICKY NAVBAR
    ====================================*/

    const header = document.querySelector(".header");

    window.addEventListener("scroll",()=>{

        if(window.scrollY > 80){

            header.classList.add("scrolled");

        }

        else{

            header.classList.remove("scrolled");

        }

    });

    /*====================================
            MOBILE MENU
    ====================================*/

    const menuBtn = document.querySelector(".menu-btn");

    const mobileMenu = document.querySelector(".mobile-menu");

    menuBtn.addEventListener("click",()=>{

        mobileMenu.classList.toggle("active");

        menuBtn.classList.toggle("active");

    });

    /*====================================
            CLOSE MENU
    ====================================*/

    document.querySelectorAll(".mobile-menu a")

    .forEach(link=>{

        link.addEventListener("click",()=>{

            mobileMenu.classList.remove("active");

            menuBtn.classList.remove("active");

        });

    });

    /*====================================
            SCROLL BAR
    ====================================*/

    const progress = document.querySelector(".progress-fill");

    window.addEventListener("scroll",()=>{

        const total =

        document.documentElement.scrollHeight

        - window.innerHeight;

        const value =

        (window.pageYOffset/total)*100;

        progress.style.width=value+"%";

    });

});

/*=========================================================
            SCROLL REVEAL ANIMATION
=========================================================*/

const revealElements=document.querySelectorAll(

".service-card,.why-card,.project-card,.price-card,.testimonial-card,.about-card,.timeline-item,.result-card,.stat-card,.trusted-item"

);

const revealObserver=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0)";

        }

    });

},{

    threshold:.15

});

revealElements.forEach(item=>{

    item.style.opacity="0";

    item.style.transform="translateY(80px)";

    item.style.transition=".9s ease";

    revealObserver.observe(item);

});

/*=========================================================
                COUNTER
=========================================================*/

const counters=document.querySelectorAll(".counter");

const counterObserver=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            animateCounter(entry.target);

            counterObserver.unobserve(entry.target);

        }

    });

});

counters.forEach(counter=>{

    counterObserver.observe(counter);

});

function animateCounter(counter){

    const text=counter.innerText;

    const target=parseInt(text.replace(/\D/g,""));

    const suffix=text.replace(/[0-9]/g,"");

    let current=0;

    const speed=Math.max(10,Math.floor(target/80));

    const timer=setInterval(()=>{

        current+=speed;

        if(current>=target){

            current=target;

            clearInterval(timer);

        }

        counter.innerText=current+suffix;

    },20);

}

/*=========================================================
            FLOATING PARTICLES
=========================================================*/

const particleContainer=document.createElement("div");

particleContainer.className="particles";

document.body.appendChild(particleContainer);

for(let i=0;i<35;i++){

    const particle=document.createElement("span");

    particle.className="particle";

    particle.style.left=Math.random()*100+"%";

    particle.style.animationDuration=

    (8+Math.random()*12)+"s";

    particle.style.animationDelay=

    Math.random()*10+"s";

    particle.style.opacity=Math.random();

    particleContainer.appendChild(particle);

}