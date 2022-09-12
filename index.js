
//Dice 1

var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


//Dice 2

var randomNumber2 = Math.floor(Math.random() * 6) + 1;


var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);
// var randomImageSource2 = "image/dice" + randomNumber2 + ".png";  // We can also write like this instead of we wriiten 2 lines in dice 1


// var image2 = document.querySelectorAll("img")[1];

// image2.setAttribute("src", randomImageSource2);

