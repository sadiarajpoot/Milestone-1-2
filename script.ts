const button = document.getElementById("Button") as HTMLButtonElement;
const skill = document.getElementById("skills") as HTMLElement;
button.addEventListener("click", function () {
	if (skill.style.display==="none") {
		skill.style.display="block"
	} else {
		skill.style.display="none"
	}
})