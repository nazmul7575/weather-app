import "./style.css";
const btn = document.getElementById("unitsBtn");
const menu = document.getElementById("unitsMenu");

btn.addEventListener("click", () => {
	menu.classList.toggle("hidden");
});

// Close dropdown if clicked outside
window.addEventListener("click", (e) => {
	if (!btn.contains(e.target) && !menu.contains(e.target)) {
		menu.classList.add("hidden");
	}
});
