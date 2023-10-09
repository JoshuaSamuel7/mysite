var a=Math.random()*6;
a=Math.floor(a)+1;
var image="images/dice"+a+".png";
document.querySelectorAll("img")[0].setAttribute("src",image);
var b=Math.random()*6;
b=Math.floor(b)+1;
var images="images/dice"+b+".png";
document.querySelectorAll("img")[1].setAttribute("src",images);
if (a>b){
    document.querySelector("h1").textContent="🚩Player 1 Wins🚩";
}else if(a<b){
    document.querySelector("h1").textContent="🏴Player 2 Wins🏴";
}
else{
    document.querySelector("h1").textContent="🏳️Draw🏳️";
}