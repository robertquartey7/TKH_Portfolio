
const typed = new Typed("#typed", {
  strings: ["SOFTWARE DEVELOPER"],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
});

AOS.init();

const getDate = document.querySelector('.date')
const date = new Date()
getDate.innerHTML = date.getFullYear()



