const header = document.querySelector(".header");
const footer = document.querySelector(".footer");
const accordion = document.querySelectorAll(".accordion__header");
const nav_links = document.querySelectorAll(".nav__link")
const nav_list = document.querySelectorAll(".nav__list")
let color = "";
let text_color = ""
if (localStorage.getItem("bg_color") !== null)
{
	color = localStorage.getItem("bg_color");
	text_color = localStorage.getItem("text_color");
	header.style.background = color;
	footer.style.background = color;
	for(let i = 0; i< accordion.length; i++)
	{
		accordion[i].style.backgroundColor = color;
	}
}

function choiceDark()
{
	header.style.background = "#2e2a27";
	header.style.transition = "0.5s ease-out 0.5s";
	footer.style.background = "#2e2a27";
	footer.style.transition = "0.5s ease-out 0.5s";
	for(let i = 0; i< accordion.length; i++)
	{
		accordion[i].style.transition = "0.5s ease-out 0.5s";
		accordion[i].style.backgroundColor = "#252c33";
	}
	nav_links.forEach((el) => 
	{
		el.style.color = text_color;
		color = localStorage.getItem("bg_color");
	})
	localStorage.setItem("bg_color", "#6666FF")
	localStorage.setItem("bg_color", "#2e2a27")
}

function choiceLight()
{
	header.style.background = "#e0ae24";
	footer.style.background = "#e0ae24";
	for(let i = 0; i< accordion.length; i++)
	{
		accordion[i].style.backgroundColor = "#e0ae24";
	}
	nav_links.forEach((el) => 
	{
		el.style.color = "00fffb";
		el.style.transition = "0.5s ease-in-out"
	})
	localStorage.setItem("bg_color", "#e0ae24")
	localStorage.setItem("text_color", "#6666FF")
}