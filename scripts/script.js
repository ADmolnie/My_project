var a = -10;
var b = 9;
var c = 20;
var buyf = 0;


function buy()
{
	if (buyf == 0)
	{
		document.getElementById('btn').style.background = 'green';
		document.getElementById('btn').style.color = '#d4825f';
		document.getElementById('btn').innerHTML = 'В корзине';
		buyf = 1;
	}
	else
	{
		document.getElementById('btn').style.background = 'silver';
		document.getElementById('btn').style.color = 'black';
		document.getElementById('btn').innerHTML = 'Купить';
		buyf = 0;
	}
}


window.addEventListener('DOMContentLoaded', function()
{
	document.querySelector('#btn-menu').addEventListener('click', function()
	{
		document.querySelector('#menu').classList.toggle('is-active');
	})
})