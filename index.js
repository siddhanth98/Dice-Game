function rollDice(dice1Dots, randomInt) {
    if(randomInt === 1) {
        dice1Dots[4].classList.add("visible");
    }

    else if(randomInt === 2) {
        dice1Dots[0].classList.add("visible");
        dice1Dots[8].classList.add("visible");
    }

    else if(randomInt === 3) {
        dice1Dots[0].classList.add("visible");
        dice1Dots[4].classList.add("visible");
        dice1Dots[8].classList.add("visible");
    }

    else if(randomInt === 4) {
        dice1Dots[0].classList.add("visible");
        dice1Dots[2].classList.add("visible");
        dice1Dots[6].classList.add("visible");
        dice1Dots[8].classList.add("visible");
    }

    else if(randomInt === 5) {
        dice1Dots[4].classList.add("visible");
        rollDice(dice1Dots, 4);
    }

    else if(randomInt === 6) {
        dice1Dots[0].classList.add("visible");
        dice1Dots[2].classList.add("visible");
        dice1Dots[3].classList.add("visible");
        dice1Dots[5].classList.add("visible");
        dice1Dots[6].classList.add("visible");
        dice1Dots[8].classList.add("visible");
    }
}

var dice1Dots = document.getElementsByClassName("dice1Dot");
var dice2Dots = document.getElementsByClassName("dice2Dot");

var randomInt1 = Math.random();
randomInt1 = Math.floor(randomInt1 * 6) + 1;
console.log(randomInt1);

var randomInt2 = Math.random();
randomInt2 = Math.floor(randomInt2 * 6) + 1;
console.log("Player 1 - " + randomInt1);
console.log("Player 2 - " + randomInt2);

rollDice(dice1Dots, randomInt1);
rollDice(dice2Dots, randomInt2);

if(randomInt1 > randomInt2) {
    var header1 = document.querySelector('h1:nth-child(1)');
    header1.style.textAlign = "center";
    header1.innerText = "Player 1 Wins by " +(Math.abs(randomInt1 - randomInt2));
}

else if(randomInt2 > randomInt1) {
    var header1 = document.querySelector('h1:nth-child(1)');
    header1.style.textAlign = "center";
    header1.innerText = "Player 2 Wins by " +(Math.abs(randomInt1 - randomInt2));
}

else {
    var header1 = document.querySelector('h1:nth-child(1)');
    header1.style.textAlign = "center";
    header1.innerText = "Draw"
}
