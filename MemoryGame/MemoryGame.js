document.addEventListener('DOMContentLoaded', () => {

  //card options
  const cardArray = [
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
  ]

  cardArray.sort(() => 0.5 - Math.random());  //randomize the card array

  const grid = document.querySelector('.grid');
  const resultDisplay = document.querySelectorAll('result');
  var cardsChosen = [];   //create empty array of cards chosen
  var cardChosenId = [];
  var cardsWon = [];
  
  //create your board
  function createBoard() {
    for (let i=0; i < cardArray.length; i++) {
      const card = document.createElement('img');
      card.setAttribute('src', 'images/blank.png');
      card.setAttribute('data-id', i);
      // card.addEventListener('click', flipCard);
      grid.appendChild(card);
    }
  }

//check for matches
function checkForMatch() {
  var cards = document.querySelectorAll('img');
  const optionOneId = cardsChosenId[0];
  const optionTwoId = cardsChosenId[1];
  if (cardsChosen[0] === cardsChosen[1]) {
    alert('You found a match!');
    cards[optionOneId].setAttribute('src', 'images/white.png');
    cards[optionOneId].setAttribute('src', 'images/white.png');
    cardsWon.push(cardsChosen)
  } else {
    cards[optionOneId].setAttribute('src', 'images/blank.png');
    cards[optionTwoId].setAttribute('src', 'images/blank.png');
    alert('Sorry, try again');
  }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Congratulations!  You found them all!'
    }
}



//flip your card
function flipCard() {
  var cardId = this.getAttribute('data-id');
  cardsChosen.push(cardArray[cardId].name);
  cardChosenId.push(cardId);
  this.setAttribute('src', cardArray[cardId].img);
  if (cardsChosen.lenth === 2) {
    setTimeout(checkForMatch, 500)
  }
}



createBoard()

})