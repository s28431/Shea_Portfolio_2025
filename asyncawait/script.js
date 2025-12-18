
console.log("count dracula");
//inline functions! :3 (for each you have to use em rip)

const newGameBtn = document.getElementById(`newGame`);
const dealBtn = document.getElementById(`deal`);
const yourCard = document.getElementById(`yourCard`);
const yourCardimg = document.getElementById(`yourCardimg`);

console.log(yourCardimg);
//function newGame() {
//    yourCard.innerText=''
//}

//function deal() {
//    yourCard.innerText='ace'
//}


newGameBtn.addEventListener('click', () => {
    newGame()
})

dealBtn.addEventListener('click', () => {
    deal()
})

let deckID = null;
dealBtn.disabled= true;

async function newGame() {
    try {
        const response = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/');
        //naming our data data
        const data = await response.json();
        //logging the "data" we just go
        console.log(data);
        deckID = data.deck_id;
        console.log(deckID)
        dealBtn.disabled= false;
    }
    catch(error) {
        console.log("New Game API Request Failed", error);
    }
}

async function deal() {
    try {
        const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckID}/draw/`);
        const data = await response.json();
        console.log(data);
        card = data.cards[0].code;
        cardimg = data.cards[0].images.png;
        yourCard.innerText=`${card}`
        yourCardimg.innerHTML=`<img src="${cardimg}"/>`
    }
    catch(error) {
        console.log("Cant deal()", error);
    }
}



//or you could have it here run on load I just wanted to try the disabled thing
//newGame();