
let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarget(){

    return Math.floor(Math.random() * 9);

}

function compareGuesses(humanGuess, computerGuess, targetNumber){

    let humanGuessDifference = Math.abs(targetNumber - humanGuess);
    let computerGuessDifference = Math.abs(targetNumber - computerGuess);

    if (humanGuessDifference > computerGuessDifference){

        return false;

    }

    else{

        return true;

    }
}


function updateScore (winner){

    switch (winner){

        case 'human':

        humanScore++;
        break;

        case 'computer':

        computerScore++;
        break;

    }

}

function advanceRound(){

    currentRoundNumber++;
}
