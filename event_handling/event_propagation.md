# Event Propagation | Bubbling and Capturing

## Bubbling and capturing: javascript.info

Example:
Handler is assigned to `<div>` but also runs if you click any nested tag like `<em>` or `<code>`:

```
<div onclick="alert('The handler!')">
    <em>If you clikc on <code>EM</code>, the handler on <codeDiv</code> runs.</em>
</div>
```
Why does the handler on `<div>` run if the actual click was on `<em>`?

### Bubbling
- When an e ent happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.

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

[ ] The onclick event should bubble up from the child elements. To test this, there should be a 1 second delay when bubbling. So if the user clicks "P," the P element should change from Blue to Yellow, and then it should take 1 second before DIV changes to Magenta, and 1 more second after that until FORM changes to Cyan.

2. Understanding Capturing

- Criteria
1. Only use vanilla html, css, javascript. No external libraries, frameworks, or languages.
2. No experimental features. Cross-browser support is a priority.
3. Avoid using html select. Make it pretty.


Write a site in HTML, CSS and JavaScript that:

[ ] Contains three empty boxes, centered on the page

[ ] Contains a dropdown menu that contains three items: Red, Yellow, and Blue.
  [ ] Each item should have an onclick attribute that, when clicked, changes an attached box to Red, Yellow, or Blue.

[ ] Using capture set to true in an event listener, the dropdown/modal logic should run before any of the other click handlers. If the user clicks outside of the dropdown/modal, the dropdown/modal should close.
  
 


