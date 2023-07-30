let deckID;
const url = 'https://deckofcardsapi.com/api/deck/';
const button = document.querySelector('button');
window.addEventListener('load', shuffleDeck);
document.querySelector('button').addEventListener('click', pickSingleCard); 

function pickSingleCard(){
    const newCardImg = document.createElement('img');
    const newCard = document.createElement('div');
    newCard.classList.add('card');
    document.querySelector('.cards').append(newCard);
    axios
    .get(`${url}${deckID}/draw/?count=1`)
    .then(card => {
        if(card.data.success === true){
            let cardInfo = card.data.cards
            for (card of cardInfo){
                newCardImg.setAttribute('data', `${card.value} ${card.suit}`);
                newCardImg.setAttribute('src', card.image);
            }
            newCard.append(newCardImg);
        } else {
            document.querySelector('.error').innerText = 'Out of cards!';
            button.onclick = setTimeout(startOver, 3000);
        }
    })
    .catch(err => {
        console.log(err)
    })
}

function shuffleDeck(){
    axios
    .get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    .then(deck => {
        deckID = deck.data.deck_id;
    })
}

function startOver(){
    shuffleDeck();
    let clearError = document.querySelector('.error');

    while (clearError.lastChild) {
        clearError.removeChild(clearError.lastChild);
    }

    let clearDom = document.querySelector('.cards');
    while (clearDom.lastChild) {
        clearDom.removeChild(clearDom.lastChild);
    }

    button.classList.toggle('restart');
}

function pickSingleCardTwice() {
        axios
        .get(`${url}/draw/?count=1`)
        .then(card => {
            console.log(card)
            let cardInfo = card.data.cards
            for (card of cardInfo){
                console.log(`${card.value} ${card.suit}`);
            }
            return axios.get(`${url}/draw/?count=1`)
        })
        .then(card2 => {
            let cardInfo = card2.data.cards
            for (card2 of cardInfo){
                console.log(`${card2.value} ${card2.suit}`);
            }
        })
}


