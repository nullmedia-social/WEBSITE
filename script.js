var clicks = 0;

function thing() {
clicks++;
document.getElementById('buttonClicks').innerHTML = clicks;
document.getElementById('clickity').innerText = 'CLICK ME FOR COOKIES!';
var img = document.createElement('img');
img.src = "https://www.verybestbaking.com/sites/g/files/jgfbjl326/files/srh_recipes/4bc5edb86285aadc28069f51d9e98974.jpg";
img.setAttribute("width", "300px");
document.body.appendChild(img);

if (clicks === 100) {
	document.getElementById("why").innerHTML = "Why are you even \"playing\" this anymore? Could you even call this a game?";
}

const scream = new Audio("scream.mp3");
	scream.play();
}