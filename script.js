// SOLVE THESE THREE CHALLENGES IF YOU DARE!
// 1. WHEN YOUR MOUSE IS OVER THE MORBIUS (GREATEST MOVIE EVER BTW) IMAGE
// YOU SHOULD ALERT THE USER THAT IT IS INDEED A MOVIE.

function morbin(event) {
    //console.log('its working')
    alert('This is indeed a movie');
}

let morbImg = document.querySelector('.morbed');
morbImg.addEventListener('mouseover', morbin);


// 2. WHEN YOU CLICK THE DIE ON THE SCREEN YOU GET A RANDOM NEW DIE
// FOR THIS CHALLENGE USE THE IMAGES IN THE IMAGE FOLDER (HINT NOTICE THE NAMES OF THE IMAGE)

let dicePic = document.querySelector('.casinoTime')

dicePic.addEventListener('click', () => {
    let diceOutcome = (1 + Math.floor(Math.random() * 6))
    console.log(diceOutcome);
    if (diceOutcome === 1) {
        document.getElementById("idDie").src='images/dice1.png';
    } else if (diceOutcome === 2) {
        document.getElementById("idDie").src='images/dice2.png';
    } else if (diceOutcome === 3) {
        document.getElementById("idDie").src='images/dice3.png';
    } else if (diceOutcome === 4) {
        document.getElementById("idDie").src='images/dice4.png';
    } else if (diceOutcome === 5) {
        document.getElementById("idDie").src='images/dice5.png';
    } else if (diceOutcome === 6) {
        document.getElementById("idDie").src='images/dice6.png';
    }
});



// 3. APPLY THE FUNCTIONALITY DO THE LAST SECTION AND MAKE IT SO WE CAN DELETE CARDS.

function deleteStuff(event) {
    event.target.parentNode.remove();
}

let deleteBtn = document.querySelectorAll('.btn');

    for (let i = 0; i < deleteBtn.length; i++) {
        deleteBtn[i].addEventListener('click', deleteStuff);
    }
