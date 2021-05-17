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

  const grid = document.querySelector('.grid');
  const resultDisplay: any = document.querySelector('#result');  //need #???
  var cardsChosen = [];   //create empty array of cards chosen
  var cardChosenId = [];
  var cardsWon = [];
   
  //create your board
  function createBoard() {
    Clock.start;
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
      Clock.pause;
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

//timer
var Clock = {
  totalSeconds: 0,
  start: function () {
    if (!this.interval) {
        var self = this;
        function pad(val) { return val > 9 ? val : "0" + val; }
        this.interval = setInterval(function () {
          self.totalSeconds += 1;

          document.getElementById("min").innerHTML = pad(Math.floor(self.totalSeconds / 60 % 60));
          document.getElementById("sec").innerHTML = pad(parseInt(self.totalSeconds % 60));
        }, 1000);
    }
  },

  reset: function () {
    Clock.totalSeconds = null; 
    clearInterval(this.interval);
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    delete this.interval;
  },
  pause: function () {
    clearInterval(this.interval);
    delete this.interval;
  },

  resume: function () {
    this.start();
  },

  restart: function () {
     this.reset();
     Clock.start();
  },

  stop: function () {
    clearInterval(this.interval);
    delete this.interval;
  }

};


document.getElementById("startButton").addEventListener("click", function () { Clock.start(); });
document.getElementById("pauseButton").addEventListener("click", function () { Clock.pause(); });
document.getElementById("resumeButton").addEventListener("click", function () { Clock.resume(); });
document.getElementById("resetButton").addEventListener("click", function () { Clock.reset(); });
document.getElementById("restartButton").addEventListener("click", function () { Clock.restart(); });
document.getElementById("stopButton").addEventListener("click", function () { Clock.stop(); });


createBoard();

})


function reset() {
  window.location.reload();
  }

  
