
const hoverBtn = document.getElementById("hover-btn");
const mouseMsg = document.getElementById("mouse-message");

hoverBtn.addEventListener("mouseover", () => {
  mouseMsg.textContent = "Button is hovered!";
});
hoverBtn.addEventListener("mouseout", () => {
  mouseMsg.textContent = "Hover ended.";
});


const keyInput = document.getElementById("key-input");
const keyMsg = document.getElementById("key-message");

keyInput.addEventListener("keydown", (e) => {
  keyMsg.textContent = `Last key pressed: ${e.key}`;
});

const form = document.getElementById("demo-form");
const formMsg = document.getElementById("form-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formMsg.textContent = "Form submitted successfully!";
});


const focusInput = document.getElementById("focus-input");
const focusMsg = document.getElementById("focus-message");

focusInput.addEventListener("focus", () => {
  focusMsg.textContent = "Input is focused.";
});
focusInput.addEventListener("blur", () => {
  focusMsg.textContent = "Input lost focus.";
});

const btnContainer = document.getElementById("btn-container");
const delegateMsg = document.getElementById("delegate-message");

btnContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    delegateMsg.textContent = `You clicked: ${e.target.textContent}`;
  }
});
