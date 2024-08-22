const clock = document.getElementById("time")
function currentTime()
{
	let date = new Date();

	let hour = date.getHours();
	hour = plusZero(hour)
	let minute = date.getMinutes();
	minute = plusZero(minute)
	let second = date.getSeconds();
	second = plusZero(second)

	clock.innerText = hour + " : " + minute + " : " + second

	setTimeout(currentTime, 1000);
}
function plusZero(number)
{
	if (number<10)
	{
		return "0"+number;
	} else
	{
		return number
	}
}
currentTime();