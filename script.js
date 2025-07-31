
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
