window.addEventListener("scroll", () => {

  const header = document.querySelector("header");

  if(window.scrollY > 50){
    header.style.background = "rgba(0,0,0,0.85)";
    header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.3)";
  }

  else{
    header.style.background = "rgba(0,0,0,0.3)";
    header.style.boxShadow = "none";
  }

});


// ================= CONTACT FORM =================

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {

  e.preventDefault();

  alert("Message Sent Successfully!");

  form.reset();

});


// ================= ACTIVE NAVBAR LINK =================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop - 120;

    if(pageYOffset >= sectionTop){
      current = section.getAttribute("id");
    }

  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if(link.getAttribute("href") === "#" + current){
      link.classList.add("active");
    }

  });

});


// ================= SCROLL REVEAL ANIMATION =================

const revealElements = document.querySelectorAll(
  ".skill-card, .project-card, .about-container"
);

window.addEventListener("scroll", revealOnScroll);

function revealOnScroll(){

  const windowHeight = window.innerHeight;

  revealElements.forEach(element => {

    const revealTop = element.getBoundingClientRect().top;

    if(revealTop < windowHeight - 100){

      element.style.opacity = "1";
      element.style.transform = "translateY(0)";

    }

  });

}


// Initial hidden state

revealElements.forEach(element => {

  element.style.opacity = "0";
  element.style.transform = "translateY(40px)";
  element.style.transition = "all 0.6s ease";

});


// Run once on page load

revealOnScroll();
