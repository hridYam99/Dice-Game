var no1=Math.floor(Math.random()*6)+1;
var r_img1="images/"+"dice"+no1+".png";


var no2=Math.floor(Math.random()*6)+1;
var r_img2="images/"+"dice"+no2+".png";

document.querySelectorAll("img")[0].setAttribute("src", r_img1);
document.querySelectorAll("img")[1].setAttribute("src", r_img2);

if(no1>no2){
  document.querySelector("h1").textContent="🚩Player 1 wins!";
}
else if(no1===no2){
    document.querySelector("h1").textContent="Draw!";
}
else{
    document.querySelector("h1").textContent="Player 2 wins!🚩";
}
