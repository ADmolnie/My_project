const nav___list = document.querySelector(".nav__list");
const burger = document.querySelector(".burger")
const navLinks = document.querySelectorAll(".nav__link")
function burgerClick()
{
	nav___list.classList.toggle("nav__list_active")
	burger.classList.toggle("active")
	navLinks.forEach((link, index) =>
	{
		if (link.style.animation)
		{
			link.style.animation = "";
		} else
		{
			link.style.animation = `navLinkAnim 1.5s ease forwards ${index/7+0.3}s`
		}
	})

}