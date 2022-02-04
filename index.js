
// --------Generating random number for first dice--------
var randomNumber1 =Math.floor(Math.random()*6)+1 ;  //(1-6)


var randomImageSource1 = "images/dice" + randomNumber1 + ".png";//(images/dice1.png - images/dice6.png)

//selecting the first image
var image1 = document.querySelectorAll("img")[0];

//changing the source of image as per the random number(images/dice1.png-images/dice6.png)
image1.setAttribute("src",randomImageSource1);



// ------------Generating the random number for the second dice--------------

var randomNumber2 = Math.floor(Math.random()*6) +1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImageSource2);

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins";
}
else if (randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 Wins🚩"
}
else if(randomNumber1 = randomNumber2){
  document.querySelector("h1").innerHTML = "Draw!"
}
