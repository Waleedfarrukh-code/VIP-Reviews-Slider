let names = [
  "Waleed Farrukh",
  "Meelad Raza",
  "Kabeer Hussain",
  "Muhammad Hassan",
  "Muzammil Ahmed",
  "Ibad Ahmed",
  "Muhammad Abdullah",
  
];

let skill = [
  "Designer || MERN Stack Learner",
  "Frontend Developer || MERN Stack Learner",
  "Designer || MERN Stack Learner",
  "Frontend Developer || MERN Stack Learner",
  "Trader || MERN Stack Learner",
  "Frontend Developer || MERN Stack Learner",
  "Frontend Developer || MERN Stack Learner",
  
  
];

let information = [
  "I am Waleed, a creative professional blending design and coding expertise.",
  "I’m a passionate Frontend Developer focused on building responsive experiences.",
  "A dedicated MERN Stack learner focused on mastering JavaScript.",
  "Committed to becoming a skilled full-stack developer.",
  "A trader transitioning into web development with strong discipline.",
  "Highly motivated individual mastering modern web development skills.",
  "a passionate web and graphic designer who loves creating modern, user-friendly designs that bring ideas to life."
];

let images = [
  "img/Waleed Farrukh.jpg",
  "img/Meelad Raza.jpg",
  "img/Kabeer Hussain.jpg",
  "img/Muhammad Hassan.jpg",
  "img/Muzammil Ahmed.jpg",
  "img/Ibad Ahmed.jpg",
  "img/Muhammad Abdullah.jpg",
  
];

let index = 0;

const btnNext = document.querySelector("#left");
const btnPrev = document.querySelector("#right");
const btnHire = document.querySelector("#hire");
const h2 = document.querySelector("h2");
const h3 = document.querySelector("h3");
const p = document.querySelector("p");
const img = document.querySelector("#profile-img");

function updateContent() {
  h2.textContent = names[index];
  h3.textContent = skill[index];
  p.textContent = information[index];
  img.src = images[index];
}

btnNext.addEventListener("click", () => {
  index = (index + 1) % names.length;
  updateContent();
});

btnPrev.addEventListener("click", () => {
  index = (index - 1 + names.length) % names.length;
  updateContent();
});

btnHire.addEventListener("click", () => {
  alert(`I am ${names[index]} and I am a ${skill[index]}`);
});

updateContent();
