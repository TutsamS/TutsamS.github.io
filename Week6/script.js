// interaction 1: greeting on page load
const greeting = document.getElementById("greeting");
const hour = new Date().getHours();

if (hour < 12) {
  greeting.textContent = "Good morning!";
} else if (hour < 18) {
  greeting.textContent = "Good afternoon!";
} else {
  greeting.textContent = "Good evening!";
}

// interaction 2: hover over name to change color
const myName = document.getElementById("my-name");

myName.addEventListener("mouseover", function () {
  myName.style.color = "white";
});

myName.addEventListener("mouseout", function () {
  myName.style.color = "#f5c518";
});

// Interaction 3: show/hide fun fact
const funFactBtn = document.getElementById("fun-fact-btn");
const funFact = document.getElementById("fun-fact");

funFactBtn.addEventListener("click", function () {
  if (funFact.classList.contains("hidden")) {
    funFact.classList.remove("hidden");
    funFactBtn.textContent = "Hide Fun Fact";
  } else {
    funFact.classList.add("hidden");
    funFactBtn.textContent = "Show Fun Fact";
  }
});

// interaction 4: change background color
const bgBtn = document.getElementById("bg-btn");
const colors = ["#121212", "#1a1500", "#1f1f1f", "#0d0d0d"];
let colorIndex = 0;

bgBtn.addEventListener("click", function () {
  colorIndex = (colorIndex + 1) % colors.length;
  document.body.style.backgroundColor = colors[colorIndex];
});

// interaction 5: live name display from input
const nameInput = document.getElementById("name-input");
const nameDisplay = document.getElementById("name-display");

nameInput.addEventListener("input", function () {
  if (nameInput.value.trim() === "") {
    nameDisplay.textContent = "Hello, stranger!";
  } else {
    nameDisplay.textContent = "Hello, " + nameInput.value + "!";
  }
});