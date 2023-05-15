var e =Math.floor( Math.random() * 6 +1);

var b = "dice"+e+".png";

var fin = "images/"+b;

document.querySelectorAll("img")[0].setAttribute("src",fin);






var temp = Math.floor(Math.random()*6 + 1);
var temp1 = "images/"+"dice"+temp+".png";
document.querySelectorAll("img")[1].setAttribute("src",temp1);




if(e > temp)
{
    document.querySelector("h1").innerHTML = "PLAYER 1 WINS";
}
else if(e < temp)
{
    document.querySelector("h1").innerHTML = "PLAYER 2 WINS";
}
else 
{
    document.querySelector("h1").innerHTML = "ITS A DRAW GAME";
}