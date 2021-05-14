document.addEventListener('DOMContentLoaded', function () {
    //card options
    var cardArray = [
        {
            name: 'cat',
            img: 'images/cat.jpg'
        },
        {
            name: 'cat',
            img: 'images/cat.jpg'
        },
        {
            name: 'dog',
            img: 'images/dog.jpg'
        },
        {
            name: 'dog',
            img: 'images/dog.jpg'
        },
        {
            name: 'horse',
            img: 'images/horse.jpg'
        },
        {
            name: 'horse',
            img: 'images/horse.jpg'
        },
        {
            name: 'kitten',
            img: 'images/kitten.jpg'
        },
        {
            name: 'kitten',
            img: 'images/kitten.jpg'
        },
        {
            name: 'puppies',
            img: 'images/puppies.jpg'
        },
        {
            name: 'puppies',
            img: 'images/puppies.jpg'
        },
        {
            name: 'whale',
            img: 'images/whale.jpg'
        },
        {
            name: 'whale',
            img: 'images/whale.jpg'
        }
    ];
    cardArray.sort(function () { return 0.5 - Math.random(); }); //randomize the card array
    var grid = document.querySelector('.grid');
    var resultDisplay = document.querySelector('#result'); //need #???
    var cardsChosen = []; //create empty array of cards chosen
    var cardChosenId = [];
    var cardsWon = [];
    //create your board
    function createBoard() {
        for (var i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img');
            card.setAttribute('src', 'images/blank.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }
    //check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img');
        var optionOneId = cardChosenId[0];
        var optionTwoId = cardChosenId[1];
        if (optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', 'images/blank.png');
            cards[optionTwoId].setAttribute('src', 'images/blank.png');
            alert('You have clicked the same image!');
        }
        else if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match!');
            cards[optionOneId].setAttribute('src', 'images/white.png');
            cards[optionTwoId].setAttribute('src', 'images/white.png');
            cards[optionOneId].removeEventListener('click', flipCard);
            cards[optionTwoId].removeEventListener('click', flipCard);
            cardsWon.push(cardsChosen);
        }
        else {
            cards[optionOneId].setAttribute('src', 'images/blank.png');
            cards[optionTwoId].setAttribute('src', 'images/blank.png');
            alert('Sorry, try again');
        }
        cardsChosen = [];
        cardChosenId = [];
        resultDisplay.textContent = cardsWon.length;
        if (cardsWon.length === cardArray.length / 2) {
            alert('Congratulations!  You found them all!');
        }
    }
    //flip your card
    function flipCard() {
        var cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img); //add image to card chosen
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500); //buffer time before checking for match
        }
    }
    createBoard();
});
