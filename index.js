var n1 = Math.random() * 6;
n1 = Math.floor(n1) + 1;
var randomImage = "./images/dice" + n1 + ".png";

document.querySelectorAll("img ")[0].setAttribute("src" , randomImage);

var n2 = Math.random() * 6;
n2 = Math.floor(n2) + 1;
var randomImage2 = "./images/dice" + n2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src" , randomImage2);

if (n1 > n2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Won $ ";
}
else if (n1 < n2) {
    document.querySelector("h1").innerHTML = "Player 2 Won $ 🚩 ";
}
else {
    document.querySelector("h1").innerHTML = "! DRAW !";
}