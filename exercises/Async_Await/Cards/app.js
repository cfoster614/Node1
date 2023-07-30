class Deck {
    static url = 'https://deckofcardsapi.com/api/deck/';
    constructor(){
        this.deckID();
    }
    async deckID() {
        let res =  await axios.get(`${Deck.url}/new`)
        this.deckId = res.data.deck_id;
    }
    async shuffle() {
        let res = await axios.get(`${Deck.url}/${this.deckId}/shuffle`)
    }
    async drawCard() {
        let card = await axios.get(`${Deck.url}/${this.deckId}/draw/?count=1`)
        const newCardImg = document.createElement('img');
        const newCard = document.createElement('div');
        newCard.classList.add('card');
        document.querySelector('.cards').append(newCard);
        
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
    }
    async drawOneCardTwice() {
        let cards = await Promise.all(
            Array.from({ length: 2 }, () => axios.get(`${Deck.url}/${this.deckId}/draw/?count=1`))
        )
        cards.forEach((card) => {
            let cardInfo = card.data.cards;
            console.log(cardInfo[0].value, cardInfo[0].suit);
        });
    }
}

let newDeck = new Deck();
window.addEventListener('load', newDeck);
document.querySelector('button').addEventListener('click', () => newDeck.drawCard()); 