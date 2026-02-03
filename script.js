// Wait for page to load
window.onload = () => {

  // Hide loading after 2 sec
  setTimeout(() => {
    document.getElementById("loading").style.display = "none";
    document.getElementById("game").style.display = "flex";
    showPage();
  }, 2000);

};


// Pages Data
const pages = [

  {
    img: "photo1.JPG",
    text: "Omg look at u 😍 Such a beauty 💙 10/10 — prettiest girl I’ve ever seen"
  },

  {
    img: "photo2.JPG",
    text: "Look at u silly 😂 You being you hahaha 💙"
  },

  {
    img: "photo3.JPG",
    text: "Omgg jealous of pizza 😤🍕 hahaha look at u kiddo 💙 I loveee youuu"
  },

  {
    img: "photo4.JPG",
    text: "Us being us 😆💙 I hatee uuu haha jk I lovee youuu sooo much"
  },

  {
    img: "photo5.JPG",
    text: `
My love 💙

You are my home.
My peace.
My happiness.

No matter what happens,
it's us against the world 🌍

I’ll always stand by you.
Always choose you.
Always love you.

Forever & always 💙
    `
  }

];


// Current page
let current = 0;


// Elements
const photo = document.getElementById("photo");
const messageBox = document.getElementById("messageBox");


// Show Page
function showPage() {

  photo.src = pages[current].img;
  messageBox.innerText = pages[current].text;

}


// Buttons
document.getElementById("next").onclick = () => {
  if (current < pages.length - 1) {
    current++;
    showPage();
  }
};

document.getElementById("prev").onclick = () => {
  if (current > 0) {
    current--;
    showPage();
  }
};
