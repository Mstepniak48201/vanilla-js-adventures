# Event Propagation | Bubbling and Capturing

## Bubbling and capturing: javascript.info

Example:
Handler is assigned to `<div>` but also runs if you click any nested tag like `<em>` or `<code>`:

```
<div onclick="alert('The handler!')">
    <em>If you click on <code>EM</code>, the handler on <codeDiv</code> runs.</em>
</div>
```
Why does the handler on `<div>` run if the actual click was on `<em>`?

### Bubbling
- When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.

Suppose three nested elements: FORM > DIV > P with a handler on each of them:

```
<style>
    body * {
        margin: 10px;
        border: 1px solid blue;
    }
</style>

<form onclick="alert('form')">FORM
  <div onclick="alert('div')">DIV
    <p onclick="alert('p')">P</p>
  </div>
</form>    
```
What happens when a user clicks the p element?
1. The user clicks on the p element, and triggers the onclick attribute and the alert() method. The browser shows the "p" popup.
2. The event bubbles up to the parent element, div, and triggers its onclick/alert() and the browser shows the "div" popup.
3. The event bubbles up to the form element, and does the same.
4. The event bubbles up to `<body>` and `<html>`

### Projects

1. Understanding Bubbling
Write a site in HTML, CSS and JavaScript that:

[ ] Initially contains three elements:
- FORM
  - DIV
    - P

[ ] FORM should be styled as Red, DIV as Green, P as Blue 

[ ] Each element should have a onclick attribute that changes the color of the div:
- FORM as Cyan
- DIV as Magenta
- P as Yellow

[ ] The onclick event should bubble up from the child elements. To test this, both the Bubbling and Capturing functions should have console.logs that log what element is the event.currentTarget.

2. Capturing  
- Make a site in HTML, CSS, and JavaScript that:

[ ] Contains a card  
[ ] Within the card, contains a button.

- When a user clicks the button, the event should be read by the window first, then passed down to the card and handled (console.log("event handled by card") and *then* handled by the button (console.log("event handled by button"))

### Post-project recap

#### event.target and addEventListener()

- event.target is the html element upon which an event happens, such as a "click" on a button.  

- addEventListener() takes two mandatory parameters: an event, and a callback function.  

- The callback will automatically have the event passed to it if the function is defined independently of addEventListener(), like so:
```
const myFunc = (e) => console.log(e.target);

// "click" is passed to myFunc automatically.
// The element that was clicked can be accessed
addEventListener("click", myFunc);
```

- And if the function is defined from within addEventListner(), the parameter in the callback is automatically understood to be *the event*:  
```
addEventListener("click", (e) => console.log(e));
```

#### Visualizing the difference between Bubbling and Capturing
Suppose the following structure:

```
<body>
  <card>
    <button>event button</button>
  </card>
</body>
```

#### Bubbling
Suppose a user clicks the "event button." What happens next?

- The flow of the event starts at the event.target (the button element), and flows up through the DOM tree, and each element it flows up to becomes the event.currentTarget, until it reaches the window level.

- If an event listener for a "click" event is placed on the `<card>` element, the "click" from the button will travel up, the card element will become the event.currentTarget, and the event listener will be triggered.

#### Capturing
In capturing the flow of events is the opposite, starting at the window, and passing through a series of event.currentTarget elements, before arriving at the event.target (the button):

- In this case, the flow is window -> body -> card -> button.

- If an event listener for a "click" event is placed on the `<card>` element, the "click" from the button will first register at the window level, and travel down through the DOM tree, until the card is the event.currentTarget element, at which point the card will "capture" the signal and trigger the event listener.

- The signal continues down to the event.target element (button) and if an event listener is placed there, it will also be triggered.



 
 


