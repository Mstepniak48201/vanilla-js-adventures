// Get references to HTML elements.
const container = document.getElementById("content-container");
const card = document.getElementById("card");
const button = document.getElementById("button");

// Set the optional "useCapture" parameter to true in the event listener.
// During the capturing phase, the event travels from window to the target, in this case: window -> body -> content-container -> card.
// The handler triggers when the event.currentTarget == the element passed to the function as a parameter.
// The event.currentTarget captures the event before it reaches the child element that was actually clicked (in this case, <button/>).
// The function changes the card's border color and console.logs the event.currentTarget as the the captured element, that the event handler has been attached to. 
const captureStyle = (element) => {
  element.addEventListener("click", function () {
    element.style.border = "5px solid #ff13f0";
    console.log(`Capturing: ${element}`) 
  }, true);
}

// The click bubbles up from the button to the card, changing it's background color.
// Instead of event.currentTarget traveling from window -> button, the bubble phase will start with event.Target.
// In this case, event.Target is the button element that is actually clicked on.
// The event bubbles up from event.target until it is intercepted when the event.currentTarget is the element passed to the event listener.
const bubbleStyle = (element) => {
  element.addEventListener("click", function () {
      element.style.backgroundColor = "#89cc04";
      console.log(`Bubbling: ${element}`);
  });
}

captureStyle(card);
bubbleStyle(card);
