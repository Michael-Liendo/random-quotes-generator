let button = document.querySelector(".new-quotes");
let pushQuote = document.querySelector(".quote");

// Initial quote

let quotes = [
  "The best way to predict the future is to create it.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "Life is what happens when you're busy making other plans.",
  "Be the change that you wish to see in the world.",
  "The only person you are destined to become is the person you decide to be.",
  "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
  "It is during our darkest moments that we must focus to see the light.",
  "The only way to do great work is to love what you do.",
];

let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

pushQuote.innerHTML = randomQuote;

// Event listener
button.addEventListener("click", handlerCallFunctions);

// Handler function
function handlerCallFunctions() {
  newQuote();
  backgroundChangerColor();
}

// New quote
function newQuote() {
  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  pushQuote.innerHTML = randomQuote;
}

// Background color
function backgroundChangerColor() {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.background = `#${randomColor}`;
}
