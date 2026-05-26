window.addEventListener("scroll", () => {

  const header = document.querySelector("header");

  if(window.scrollY > 50){
    header.style.background = "rgba(0,0,0,0.8)";
  }
  else{
    header.style.background = "rgba(0,0,0,0.3)";
  }

});


// Simple contact form demo

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {

  e.preventDefault();

  alert("Message Sent Successfully!");

  form.reset();

});
