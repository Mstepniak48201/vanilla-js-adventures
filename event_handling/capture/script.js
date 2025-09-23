// Add JavaScript.
document.addEventListener("DOMContentLoaded", function() {
  // Get references to html elements.
  const button = document.getElementById("event-button");
  const dropdown = document.getElementById("dropdown-container");
  const navBg = document.getElementById("navbar-background");

  // Get and set dropdown visibility
  let isVisible = false;
  const getIsVisible = () => isVisible; // () => isVisible returns *current value* of isVisible.
  const setIsVisible = (val) => {isVisible = val;} // (val) => Uncaught TypeError: getIsVisible is not a function

  // Listen for zoom resizing.
  window.addEventListener("resize", () => updateDropdownPos(dropdown, navBg, getIsVisible)); // Wrap updateDropdownPos() in arrow function to defer calling it.

  // Toggle dropdown.
  toggle(navBg, button, dropdown, getIsVisible, setIsVisible);
});

const updateDropdownPos = (dropdown, navBg, getIsVisible) => { 
  const navHeight = navBg.offsetHeight;
  if (getIsVisible()) {
    dropdown.style.transform = `translateY(${navHeight}px)`;
  }
}

function toggle(navBg, button, dropdown, getIsVisible, setIsVisible) {
  const navHeight = navBg.offsetHeight;
  button.addEventListener("click", function() {
    if (!getIsVisible()) {
      console.log("clicked");
      dropdown.classList.remove("dropdown-hidden");
      dropdown.style.transform = `translateY(${navHeight}px)`;
      dropdown.classList.add("dropdown-visible");
      setIsVisible(true);
      console.log(getIsVisible());
    } else {
      console.log("clicked again");
      dropdown.classList.remove("dropdown-visible");
      dropdown.style.transform = `translateY(-300px)`;
      dropdown.classList.add("dropdown-hidden"); 
      setIsVisible(false); 
      console.log(getIsVisible());
    }
  });
}

/*
document.addEventListener("DOMContentLoaded", function() {
  const button = document.getElementById("event-button");
  const dropdown = document.getElementById("dropdown-container");
  const navBg = document.getElementById("navbar-background");
  let isVisible = false;
  console.log(isVisible);
  console.log(navBg);
  // const navHeight = document.getElementById("navbar-background").offsetHeight;
  
  // Parameters
  // () => isVisible returns *current value* of isVisible.
  // (val) => {isVisible = val;} sets isVisible to val.
  const getIsVisible = () => isVisible;
  const setIsVisible = (val) => {isVisible = val;}

  // window.addEventListener("resize", updateDropdownPos(dropdown, navBg)); 
  toggle(navBg, button, dropdown, getIsVisible, setIsVisible);
});

function updateDropdownPos(dropdown, navBg, getIsVisible) {
  const navHeight = navBg.offsetHeight;
  if (getIsVisible()) {
    dropdown.style.transform = `translateY(${navHeight}px)`;
  }
}

function toggle(navBg, button, dropdown, getIsVisible, setIsVisible) {
  const navHeight = navBg.offsetHeight;
  button.addEventListener("click", function() {
    if (!getIsVisible()) {
      console.log("clicked");
      dropdown.classList.remove("dropdown-hidden");
      dropdown.style.transform = `translateY(${navHeight}px)`;
      dropdown.classList.add("dropdown-visible");
      setIsVisible(true);
      console.log(getIsVisible());
    } else {
      console.log("clicked again");
      dropdown.classList.remove("dropdown-visible");
      dropdown.style.transform = `translateY(-300px)`;
      dropdown.classList.add("dropdown-hidden"); 
      setIsVisible(false); 
      console.log(getIsVisible());
    }
  });
}
*/
/*
psuedo code:
document.eventListener DOMcontentLoaded
  const button = get button;
  const dropdown = get dropdown;
  let isVisible = false;

  const getIsVisible = () => isVisible;
  const setIsVisible = (val) => isVisible = val;

  function updateDropdownPos()
    const navHeight = get navbar.offsetHeight;
    dropdown.style.transform = translate&(navHeight);

  updateDropDownPos();
  window.eventListener resize, updateDropdownPos()

  toggle(button, dropdown, getIsVisible, setIsVisible);

function toggle(button, dropdown, getIsVisible, setIsVisible)
  button.addEventListener click
    if !getIsVisible
      dropdown remove class "dropdown-hidden";
      dropdown.style.transform = translateY(navHeight);
      dropdown add class "dropdown-visible";
      setIsVisible(true);
    else
      dropdown remove class "dropdown-visible";
      dropdown add class "dropdown-hidden";
      setIsVisible(false);
*/
