let li_el = document.createElement("li");
let li_h2 = document.createElement("h2");
let li_img = document.createElement("img");
let li_pr = document.createElement("p");
let pr_p = document.createTextNode("5 рублей");
let h2_p = document.createTextNode("Бахромчатая черепаха");
const ulgoods = document.querySelector(".goods__lisgoods");
const ulimg = document.querySelectorAll(".goods__lisgoods li")[0];
const ulbtn = document.getElementById("btnbuy");
const btnbutton = document.querySelectorAll(".reg");
let staimg = false;
let btnimg = document.createElement("button");
let btntext = document.createTextNode("Не Смей");


btnimg.setAttribute("onclick", "remimg()");


btnimg.appendChild(btntext);
li_h2.appendChild(h2_p);
li_img.src="img/turtle_6.png";
li_img.style.transform = "rotate(45deg)";
li_pr.appendChild(pr_p);
btnimg.classList.toggle("btn");
btnimg.classList.toggle("border-danger");
btnimg.classList.toggle("text-info");
btnimg.classList.toggle("btn-outline-dark");
btnimg.classList.toggle("bg-success");


function egoods()
{
    // if (staimg == false)
    // {
    //     ulimg.style.display = "none";
    //     staimg = true;
    // }
    // else
    // {
    //     ulimg.style.display = "block";
    //     staimg = false;
    // }
    ulgoods.appendChild(li_el);
    li_el.appendChild(li_h2);
    li_el.appendChild(li_img);
    li_el.appendChild(li_pr);
    ulimg.classList.toggle("O1L");
    li_el.appendChild(btnimg);
    ulbtn.classList.toggle("BOL");
}


function remimg()
{
    btnimg.parentNode.remove();
    ulimg.classList.remove("O1L");
    ulbtn.classList.remove("BOL");
}