// ================= MOBILE MENU =================

const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    menuBtn.classList.toggle("open");

});


// Close menu after clicking links

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


// ================= STICKY NAVBAR =================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.classList.add("sticky");

    }
    else{

        navbar.classList.remove("sticky");

    }

});


// ================= FAQ ACCORDION =================

const faqItems = document.querySelectorAll(".faq-item");


faqItems.forEach(item => {


    const question = item.querySelector(".faq-question");


    question.addEventListener("click",()=>{


        item.classList.toggle("active");


        const icon = item.querySelector("i");


        if(item.classList.contains("active")){

            icon.classList.remove("fa-plus");

            icon.classList.add("fa-minus");

        }
        else{

            icon.classList.remove("fa-minus");

            icon.classList.add("fa-plus");

        }


    });


});


// ================= SMOOTH SCROLL =================


document.querySelectorAll('a[href^="#"]').forEach(anchor => {


    anchor.addEventListener("click",function(e){


        e.preventDefault();


        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({

            behavior:"smooth"

        });


    });


});



// ================= SCROLL REVEAL =================


const revealElements = document.querySelectorAll(
".section, .service-card, .project-card"
);



window.addEventListener("scroll",()=>{


    revealElements.forEach(element=>{


        const position = element.getBoundingClientRect().top;


        if(position < window.innerHeight - 100){

            element.classList.add("show");

        }


    });


});



// ================= FOOTER YEAR =================


const year = document.querySelector("#year");


if(year){

    year.textContent = new Date().getFullYear();

}