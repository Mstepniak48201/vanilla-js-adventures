// Add JavaScript.
document.addEventListener("DOMContentLoaded", function() {
  // Get references to html elements.
  const button = document.getElementById("event-button");
  const dropdown = document.getElementById("dropdown-container");
  const navBg = document.getElementById("navbar-background");

  // Get and set dropdown visibility.
  let isVisible = false;
  const getIsVisible = () => isVisible; // () => isVisible returns *current value* of isVisible.
  const setIsVisible = (val) => {isVisible = val;} // (val) => Uncaught TypeError: getIsVisible is not a function

  // Destructured Arguments:
  const toggleArgs = {
    navBg: navBg,
    button: button,
    dropdown: dropdown,
    getIsVisible: getIsVisible,
    setIsVisible: setIsVisible,
  }

  const captureArgs = {
    getIsVisible: getIsVisible,
    setIsVisible: setIsVisible,
    button: button,
    dropdown: dropdown,
  }

  // Listen for zoom resizing.
  window.addEventListener("resize", () => updateDropdownY(dropdown, navBg, getIsVisible)); // Wrap updateDropdownPos() in arrow function to defer calling it.

  // Position dropdown in persistent X position.
  updateDropdownX(button, dropdown);

  // Toggle dropdown.
  toggle(toggleArgs);

  // Close dropdown if clicked anywhere outside of dropdown or button.
  // Listener scoped to document as opposed to entire browser window.
  document.addEventListener("click", (event) => capture(event, captureArgs), true);

});

const updateDropdownX = (button, dropdown) => {
  const buttonRect = button.getBoundingClientRect();
  const dropdownWidth = dropdown.offsetHeight;
  const dropdownX = buttonRect.left + (buttonRect.width / 2) - (dropdownWidth / 2);
  dropdown.style.left = `${dropdownX}px`;
}

const updateDropdownY = (dropdown, navBg, getIsVisible) => { 
  const navHeight = navBg.offsetHeight;
  if (getIsVisible()) {
    dropdown.style.transform = `translateY(${navHeight}px)`;
  }
}

const toggle = ({navBg, button, dropdown, getIsVisible, setIsVisible}) => {
  const navHeight = navBg.offsetHeight;
  button.addEventListener("click", function() {
    if (!getIsVisible()) {
      dropdown.classList.remove("dropdown-hidden");
      dropdown.style.transform = `translateY(${navHeight}px)`;
      dropdown.classList.add("dropdown-visible");
      setIsVisible(true);
    } else {
      dropdown.classList.remove("dropdown-visible");
      dropdown.style.transform = `translateY(-300px)`;
      dropdown.classList.add("dropdown-hidden"); 
      setIsVisible(false); 
    }
  });
}

const capture = (event, {getIsVisible, setIsVisible, button, dropdown}) => {
  if (!getIsVisible()) return; // Check if dropdown is open, if not, return.

  const insideButton = button.contains(event.target);
  const insideDropdown = dropdown.contains(event.target);

  if (!insideButton && !insideDropdown) {
    dropdown.classList.remove("dropdown-visible");
    dropdown.style.transform = `translateY(-300px)`;
    dropdown.classList.add("dropdown-hidden"); 
    setIsVisible(false);  
  } 
}

/*
psuedo code for capture()

const capture = (event, {getIsVisible, button, dropdown})
  Check if open, if getIsVisible, return

  insideButton = button.contains(event.target)
  insideDropdown = dropdown.contains(event.target)

  if !insideButton && !insideDropdown
    dropdown.classList.remove("dropdown-visible");
    dropdown.style.transform = `translateY(-300px)`;
    dropdown.classList.add("dropdown-hidden"); 
    setIsVisible(false); 
    
    
*/







