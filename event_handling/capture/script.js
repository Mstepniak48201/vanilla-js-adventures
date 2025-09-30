// Get references to HTML elements.
const container = document.getElementById("content-container");
const card = document.getElementById("card");
const button = document.getElementById("button");

const logCapture = (element) => {
  element.addEventListener("click", () => console.log(`Capturing: ${element}`), true);
}

const logBubble = (element) => {
  element.addEventListener("click", () => console.log(`Bubbling: ${element}`));
}

logCapture(card);
logBubble(card);


