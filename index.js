//FIRST DICE
    //Random number 1-6
    var randomNumber1 = Math.floor(Math.random() * 6 ) + 1;

    //Select random dice image from dice1-dice6 

    var randomDiceImage = "dice" + randomNumber1 + ".png";

    //Changing the attribute value

    var randomImageSource = "images/" + randomDiceImage;

    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", randomImageSource);


//SECOND DICE

    //Random number 1-6
    var randomNumber2 = Math.floor(Math.random() * 6 ) + 1;

    //Select random dice image from dice1-dice6
    var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

    document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//Changing innerHTML text

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}
else{
    document.querySelector("h1").innerHTML = "Draw";
}