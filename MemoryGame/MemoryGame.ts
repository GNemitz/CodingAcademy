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
    },
    {
      name: 'bear',
      img: 'images/bear.jpg'
    },
    {
      name: 'bear',
      img: 'images/bear.jpg'
    },
    {
      name: 'deer',
      img: 'images/deer.jpg'
    },
    {
      name: 'deer',
      img: 'images/deer.jpg'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random());  //randomize the card array

  let minutesLabel = document.getElementById("minutes");
  let secondsLabel = document.getElementById("seconds");
  let totalSeconds: number = 0;
  setInterval(setTime, 1000);
  
  function setTime() {
    ++totalSeconds;
    secondsLabel.innerHTML = pad(totalSeconds % 60);
    minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
  }
  
  function pad(val) {
    var valString = val + "";
    if (valString.length < 2) {
      return "0" + valString;
    } else {
      return valString;
    }
  }

  const grid = document.querySelector('.grid');
  const resultDisplay: any = document.querySelector('#result');  //need #???
  var cardsChosen = [];   //create empty array of cards chosen
  var cardChosenId = [];
  var cardsWon = [];
    
  //create your board
  function createBoard() {
    for (let i: any=0; i < cardArray.length; i++) {
      const card = document.createElement('img');
      card.setAttribute('src', 'images/blank.png');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipCard);
      grid.appendChild(card); 
    }
  }

//check for matches
function checkForMatch() {
  const cards = document.querySelectorAll('img');
  const optionOneId = cardChosenId[0];
  const optionTwoId = cardChosenId[1];
  
  if (optionOneId == optionTwoId) {
    cards[optionOneId].setAttribute('src', 'images/blank.png')
    cards[optionTwoId].setAttribute('src', 'images/blank.png')
    alert('You have clicked the same image!')
  }
  else if (cardsChosen[0] === cardsChosen[1]) {
    cards[optionOneId].setAttribute('src', 'images/white.png');
    cards[optionTwoId].setAttribute('src', 'images/white.png');
    cards[optionOneId].removeEventListener('click', flipCard)
    cards[optionTwoId].removeEventListener('click', flipCard)
    cardsWon.push(cardsChosen)
    resultDisplay.textContent = cardsWon.length;
    alert('You found a match!');
  } else {
    cards[optionOneId].setAttribute('src', 'images/blank.png');
    cards[optionTwoId].setAttribute('src', 'images/blank.png');
    alert('Sorry, try again');
  }
    cardsChosen = [];
    cardChosenId = [];
    
    if (cardsWon.length === cardArray.length/2) {
      var winnerlabel = document.getElementById("winner");
      winnerlabel.innerHTML = "Congratulations!  You matched all the cards!";
    }
}

//flip your card
function flipCard() {
  let cardId = this.getAttribute('data-id');
  cardsChosen.push(cardArray[cardId].name);
  cardChosenId.push(cardId);
  this.setAttribute('src', cardArray[cardId].img);  //add image to card chosen
  if (cardsChosen.length === 2) {
    setTimeout(checkForMatch, 500);  //buffer time before checking for match
  }
}

createBoard();

})




function reset() {
  window.location.reload();
  }


