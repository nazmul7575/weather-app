import "./style.css";
const btn = document.getElementById("unitsBtn");
const menu = document.getElementById("unitsMenu");

btn.addEventListener("click", () => {
	menu.classList.toggle("hidden");
});

// window.addEventListener("click", (e) => {
// 	if (!btn.contains(e.target) && !menu.contains(e.target)) {
// 		menu.classList.add("hidden");
// 	}
// });

const Btn = document.getElementById("dayBtn");
const Menu = document.getElementById("dayMenu");

Btn.addEventListener("click", () => {
	Menu.classList.toggle("hidden");
});

const errorSection = document.getElementById("errorSection");

errorSection.classList.remove("hidden");
errorSection.classList.add("hidden");
