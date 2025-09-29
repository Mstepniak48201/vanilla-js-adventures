# Dropdown write-up

* This was supposed to be a project where I wrote a component dependent on capturing, but I ended up writing a state-driven component, where I learned (and re-learned) some new (and old) concepts in JavaScript and CSS.

- Criteria
1. Only use vanilla html, css, javascript. No external libraries, frameworks, or languages.
2. No experimental features. Cross-browser support is a priority.
3. Avoid using html select. Make it pretty.  

Write a site in HTML, CSS and JavaScript that:

[ ] Contains three empty boxes, centered on the page  

[ ] Contains a dropdown menu that contains three items: Red, Yellow, and Blue.  
  [ ] Each item should have an onclick attribute that, when clicked, changes an attached box to Red, Yellow, or Blue.

## Project Recap Essay

This will not be a true essay, but more of a sketch, a diagram, and a discussion, and a line drawn between the code and MDN docs, JavaScript.info, and W3 reference materials. This is the first JavaScript I have written in about two years, and my aim is to be far more intentional than I ever was before: no copying and pasting from Stack Overflow (or these days an AI), but to make an effort to make deliberate decisions based on my understanding of the language, and to use this decision to be deliberate to further my understanding of the language.

### Architecture and Style of the Project
I'm attempting to apply a few ideas to every project, no matter how "small."

- Apply design thinking not just to achieve the goals of the project, but to create a process for using projects to learn and solidify concepts and best practices.
- Develop ideas on best practices and style guides that will be a starting point for further projects.
- Create a virtuous cycle of learning and design.

For the basic setup of this project, I went with what made the most sense to me: A "main" event listener that contains various variables and passes them to functions that are declared below, outside of the "main" event listener.

### Psuedo Code, with // Comments
```
document.addEventListener DOMContentLoaded -> 1.
  // Get references to HTML elements.
  get reference to button by id
  get reference to dropdown by id
  get reference to nav background by id

  // Get and set dropdown visibility. -> 2.
  isVisible = false
  getIsVisible = function to return current value of isVisible
  setIsVisible = function to set value of isVisible to a value passed in

  // Destructured Arguments: -> 3.
  const toggleArgs = {key: value pairs of arg names set equal to their values) 
  const closeArgs = {key: value pairs of arg names set equal to their values)

  // Listen for zoom resizing and update X and Y coords of the dropdown accordingly. -> 4.
  window.addEventListener resize () => arrow function to defer calling function to update Y coords until resize detected
  window.addEventListener resize () => arrow function to defer calling function to update X coords until resize detected 

  // Position dropdown in persistent X position.
  call updateDropdown(button, dropdown)
      |  
    // Function description:
    get button.getBoundingClientRect  
    get dropdown.offsetWidth  
    dropdownX = calculate the leftmost boundary of dropdown when centered relative to the center of the button element.  
    dropdown.style.left = dropdownX  

  // Toggle dropdown.  
  call toggle(toggleArgs)  
    |  
  // Function description:   
  get navHeight
  button.addEventListener click  
    if !getIsVisible  
      remove dropdown class dropdown-hidden  
      dropdown.style.transform = translateY(navHeight)  
      add dropdown classList dropdown-visible  
      set isVisible true  
    else  
      remove dropdown class dropdown-visible  
      dropdown.style.transform = translateY(-300px)
      add dropdown class dropdown-hidden
      set isVisible false
  
  // Close dropdown if click is outside dropdown or button elements.  
    |
  // Function description:
  

```
  
### Concepts
1. DOMContentLoaded  
DomContentLoaded is not required in this project, as the `<script>` tags are at the end of the body. I will not include this in future projects unless a need for defensive programming on this issue arises, but this is a learning exercise, and I am leaving it in as this is the project where I learned how DOM elements are loaded: If the `<script>` tags are ever moved for some reason, the code won't run until after the DOM elements are loaded.

2. Setting const variables equal to Arrow Functions  
This syntax is fairly simple, but I am less familiar with it, so it deserves a note.

3. Destructured Arguments  
My functions started to require more parameters, and ordered parameters became unwieldy. So I made a rule: functions that take more than three arguments will take a destructured properties from objects passed as a function parameter.  

- MDN page: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring  

When passed this way, the order in which arguments are passed no longer matters, and functions can choose which parameters from an object that they will use. For example:  

```
const user = {
  id: 42,
  displayName = "jdoe",
  fullName: {
    firstName: "Jane",
    lastName: "Doe,"
  },
};

// Suppose we only want the id:
// Use the curly brackets to indicate a destructured parameter
function userId({ id }) {
  return id; 
} // Pass in the object as a function parameter.  console.log(userId(user)); 

console.log(userId(user));
```

- In this example, the function userId() accepts the paramater { id }. The {} notation alerts the function to expect a destructured argument.

- When userId() is called, the user object is passed in as the argument, and { id } indicates that the id property of the object passed "should be unpacked into variable of the same name, which can then be used within the function."

4. Element: getBoundingClientRect()
- Returns a DOMRect object which is the smallest rectangle that contains the entire element, including padding and border-width.
- has left, top, right, bottom, x, y, width, and height properties. Properties other than width and height are relative to the top-left of the viewport.

5. Element: classList | .classList.remove(), .classList.add()
- classList is read-only, and returns a DOMTokenList representing the contents of an element's class attribute.
- The DOMTokenList can be modified using the add(), remove(), replace() and toggle() methods.

6. CSS transform property | CSS translateY(), translateX() functions
- The transform property "lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model."

- translateY() and translateX() reposition an element vertically and horizontally on the 2D plane. These functions are called from the transform property.
  - translate functions called from the transform property can use px and % values.
  
7. Template literal syntax
- CSS values are "value tokens," and technically strings.
- When building a string into which a JavaScript variable will be passed, use Template Literals - `${stringName} is wrapped in backticks`
