export{};

// Function called whenever user tab on any box
function myfunc() {
  
  // Setting DOM to all boxes or input field
  let b1: string;
  let b2: string;
  let b3: string;
  let b4: string;
  let b5: string;
  let b6: string;
  let b7: string;
  let b8: string;
  let b9: string;
  b1 = (<HTMLInputElement>document.getElementById("b1")).value;
  b2 = (<HTMLInputElement>document.getElementById("b2")).value;
  b3 = (<HTMLInputElement>document.getElementById("b3")).value;
  b4 = (<HTMLInputElement>document.getElementById("b4")).value;
  b5 = (<HTMLInputElement>document.getElementById("b5")).value;
  b6 = (<HTMLInputElement>document.getElementById("b6")).value;
  b7 = (<HTMLInputElement>document.getElementById("b7")).value;
  b8 = (<HTMLInputElement>document.getElementById("b8")).value;
  b9 = (<HTMLInputElement>document.getElementById("b9")).value;


  // Checking if Player X won or not and after 
  // that disabled all the other fields
  if ((b1 == 'x' || b1 == 'X') && (b2 == 'x' ||
      b2 == 'X') && (b3 == 'x' || b3 == 'X')) {
      document.getElementById('print').innerHTML = "Player X won";
      (<HTMLInputElement>document.getElementById("b4")).disabled = true;
      (<HTMLInputElement>document.getElementById("b5")).disabled = true;
      (<HTMLInputElement>document.getElementById("b6")).disabled = true;
      (<HTMLInputElement>document.getElementById("b7")).disabled = true;
      (<HTMLInputElement>document.getElementById("b8")).disabled = true;
      (<HTMLInputElement>document.getElementById("b9")).disabled = true;
      window.alert('Player X won');
  }
  else if ((b1 == 'x' || b1 == 'X') && (b4 == 'x' ||
      b4 == 'X') && (b7 == 'x' || b7 == 'X')) {
      document.getElementById('print').innerHTML = "Player X won";
      (<HTMLInputElement>document.getElementById("b2")).disabled = true;
      (<HTMLInputElement>document.getElementById("b3")).disabled = true;
      (<HTMLInputElement>document.getElementById("b5")).disabled = true;
      (<HTMLInputElement>document.getElementById("b6")).disabled = true;
      (<HTMLInputElement>document.getElementById("b8")).disabled = true;
      (<HTMLInputElement>document.getElementById("b9")).disabled = true;
      window.alert('Player X won');
  }
  else if ((b7 == 'x' || b7 == 'X') && (b8 == 'x' || 
      b8 == 'X') && (b9 == 'x' || b9 == 'X')) {
      document.getElementById('print').innerHTML = "Player X won";
      (<HTMLInputElement>document.getElementById("b1")).disabled = true;
      (<HTMLInputElement>document.getElementById("b2")).disabled = true;
      (<HTMLInputElement>document.getElementById("b3")).disabled = true;
      (<HTMLInputElement>document.getElementById("b4")).disabled = true;
      (<HTMLInputElement>document.getElementById("b5")).disabled = true;
      (<HTMLInputElement>document.getElementById("b6")).disabled = true;
      window.alert('Player X won');
  }
  else if ((b3 == 'x' || b3 == 'X') && (b6 == 'x' || 
      b6 == 'X') && (b9 == 'x' || b9 == 'X')) {
      document.getElementById('print').innerHTML = "Player X won";
      (<HTMLInputElement>document.getElementById("b1")).disabled = true;
      (<HTMLInputElement>document.getElementById("b2")).disabled = true;
      (<HTMLInputElement>document.getElementById("b4")).disabled = true;
      (<HTMLInputElement>document.getElementById("b5")).disabled = true;
      (<HTMLInputElement>document.getElementById("b7")).disabled = true;
      (<HTMLInputElement>document.getElementById("b8")).disabled = true;
      window.alert('Player X won');
  }
  else if ((b1 == 'x' || b1 == 'X') && (b5 == 'x' || 
      b5 == 'X') && (b9 == 'x' || b9 == 'X')) {
      document.getElementById('print').innerHTML = "Player X won";
      (<HTMLInputElement>document.getElementById("b2")).disabled = true;
      (<HTMLInputElement>document.getElementById("b3")).disabled = true;
      (<HTMLInputElement>document.getElementById("b4")).disabled = true;
      (<HTMLInputElement>document.getElementById("b6")).disabled = true;
      (<HTMLInputElement>document.getElementById("b7")).disabled = true;
      (<HTMLInputElement>document.getElementById("b8")).disabled = true;
      window.alert('Player X won');
  }
  else if ((b3 == 'x' || b3 == 'X') && (b5 == 'x' || 
      b5 == 'X') && (b7 == 'x' || b7 == 'X')) {
      document.getElementById('print').innerHTML = "Player X won";
      (<HTMLInputElement>document.getElementById("b1")).disabled = true;
      (<HTMLInputElement>document.getElementById("b2")).disabled = true;
      (<HTMLInputElement>document.getElementById("b4")).disabled = true;
      (<HTMLInputElement>document.getElementById("b6")).disabled = true;
      (<HTMLInputElement>document.getElementById("b8")).disabled = true;
      (<HTMLInputElement>document.getElementById("b9")).disabled = true;
      window.alert('Player X won');
  }
  else if ((b2 == 'x' || b2 == 'X') && (b5 == 'x' || 
      b5 == 'X') && (b8 == 'x' || b8 == 'X')) {
      document.getElementById('print').innerHTML = "Player X won";
      (<HTMLInputElement>document.getElementById("b1")).disabled = true;
      (<HTMLInputElement>document.getElementById("b3")).disabled = true;
      (<HTMLInputElement>document.getElementById("b4")).disabled = true;
      (<HTMLInputElement>document.getElementById("b6")).disabled = true;
      (<HTMLInputElement>document.getElementById("b7")).disabled = true;
      (<HTMLInputElement>document.getElementById("b9")).disabled = true;
      window.alert('Player X won');
  }
  else if ((b4 == 'x' || b4 == 'X') && (b5 == 'x' || 
      b5 == 'X') && (b6 == 'x' || b6 == 'X')) {
      document.getElementById('print').innerHTML = "Player X won";
      (<HTMLInputElement>document.getElementById("b1")).disabled = true;
      (<HTMLInputElement>document.getElementById("b2")).disabled = true;
      (<HTMLInputElement>document.getElementById("b3")).disabled = true;
      (<HTMLInputElement>document.getElementById("b7")).disabled = true;
      (<HTMLInputElement>document.getElementById("b8")).disabled = true;
      (<HTMLInputElement>document.getElementById("b9")).disabled = true;
      window.alert('Player X won');
  }

  // Checking of Player X finsh
  // Checking for Player 0 starts, Is player 0 won or
  // not and after that disabled all the other fields
  else if ((b1 == '0' || b1 == '0') && (b2 == '0' || 
      b2 == '0') && (b3 == '0' || b3 == '0')) {
      document.getElementById('print').innerHTML = "Player 0 won";
      (<HTMLInputElement>document.getElementById("b4")).disabled = true;
      (<HTMLInputElement>document.getElementById("b5")).disabled = true;
      (<HTMLInputElement>document.getElementById("b6")).disabled = true;
      (<HTMLInputElement>document.getElementById("b7")).disabled = true;
      (<HTMLInputElement>document.getElementById("b8")).disabled = true;
      (<HTMLInputElement>document.getElementById("b9")).disabled = true;
      window.alert('Player 0 won');
  }
  else if ((b1 == '0' || b1 == '0') && (b4 == '0' || 
      b4 == '0') && (b7 == '0' || b7 == '0')) {
      document.getElementById('print').innerHTML = "Player 0 won";
      (<HTMLInputElement>document.getElementById("b2")).disabled = true;
      (<HTMLInputElement>document.getElementById("b3")).disabled = true;
      (<HTMLInputElement>document.getElementById("b5")).disabled = true;
      (<HTMLInputElement>document.getElementById("b6")).disabled = true;
      (<HTMLInputElement>document.getElementById("b8")).disabled = true;
      (<HTMLInputElement>document.getElementById("b9")).disabled = true;
      window.alert('Player 0 won');
  }
  else if ((b7 == '0' || b7 == '0') && (b8 == '0' || 
      b8 == '0') && (b9 == '0' || b9 == '0')) {
      document.getElementById('print').innerHTML = "Player 0 won";
      (<HTMLInputElement>document.getElementById("b1")).disabled = true;
      (<HTMLInputElement>document.getElementById("b2")).disabled = true;
      (<HTMLInputElement>document.getElementById("b3")).disabled = true;
      (<HTMLInputElement>document.getElementById("b4")).disabled = true;
      (<HTMLInputElement>document.getElementById("b5")).disabled = true;
      (<HTMLInputElement>document.getElementById("b6")).disabled = true;
      window.alert('Player 0 won');
  }
  else if ((b3 == '0' || b3 == '0') && (b6 == '0' || 
      b6 == '0') && (b9 == '0' || b9 == '0')) {
      document.getElementById('print').innerHTML = "Player 0 won";
      (<HTMLInputElement>document.getElementById("b1")).disabled = true;
      (<HTMLInputElement>document.getElementById("b2")).disabled = true;
      (<HTMLInputElement>document.getElementById("b4")).disabled = true;
      (<HTMLInputElement>document.getElementById("b5")).disabled = true;
      (<HTMLInputElement>document.getElementById("b7")).disabled = true;
      (<HTMLInputElement>document.getElementById("b8")).disabled = true;
      window.alert('Player 0 won');
  }
  else if ((b1 == '0' || b1 == '0') && (b5 == '0' || 
      b5 == '0') && (b9 == '0' || b9 == '0')) {
      document.getElementById('print').innerHTML = "Player 0 won";
      (<HTMLInputElement>document.getElementById("b2")).disabled = true;
      (<HTMLInputElement>document.getElementById("b3")).disabled = true;
      (<HTMLInputElement>document.getElementById("b4")).disabled = true;
      (<HTMLInputElement>document.getElementById("b6")).disabled = true;
      (<HTMLInputElement>document.getElementById("b7")).disabled = true;
      (<HTMLInputElement>document.getElementById("b8")).disabled = true;
      window.alert('Player 0 won');
  }
  else if ((b3 == '0' || b3 == '0') && (b5 == '0' || 
      b5 == '0') && (b7 == '0' || b7 == '0')) {
      document.getElementById('print').innerHTML = "Player 0 won";
      (<HTMLInputElement>document.getElementById("b1")).disabled = true;
      (<HTMLInputElement>document.getElementById("b2")).disabled = true;
      (<HTMLInputElement>document.getElementById("b4")).disabled = true;
      (<HTMLInputElement>document.getElementById("b6")).disabled = true;
      (<HTMLInputElement>document.getElementById("b8")).disabled = true;
      (<HTMLInputElement>document.getElementById("b9")).disabled = true;
      window.alert('Player 0 won');
  }
  else if ((b2 == '0' || b2 == '0') && (b5 == '0' || 
      b5 == '0') && (b8 == '0' || b8 == '0')) {
      document.getElementById('print').innerHTML = "Player 0 won";
      (<HTMLInputElement>document.getElementById("b1")).disabled = true;
      (<HTMLInputElement>document.getElementById("b3")).disabled = true;
      (<HTMLInputElement>document.getElementById("b4")).disabled = true;
      (<HTMLInputElement>document.getElementById("b6")).disabled = true;
      (<HTMLInputElement>document.getElementById("b7")).disabled = true;
      (<HTMLInputElement>document.getElementById("b9")).disabled = true;
      window.alert('Player 0 won');
  }
  else if ((b4 == '0' || b4 == '0') && (b5 == '0' || 
      b5 == '0') && (b6 == '0' || b6 == '0')) {
      document.getElementById('print').innerHTML = "Player 0 won";
      (<HTMLInputElement>document.getElementById("b1")).disabled = true;
      (<HTMLInputElement>document.getElementById("b2")).disabled = true;
      (<HTMLInputElement>document.getElementById("b3")).disabled = true;
      (<HTMLInputElement>document.getElementById("b7")).disabled = true;
      (<HTMLInputElement>document.getElementById("b8")).disabled = true;
      (<HTMLInputElement>document.getElementById("b9")).disabled = true;
      window.alert('Player 0 won');
  }

  // Checking of Player 0 finsh
  // Here, Checking about Tie
  else if ((b1 == 'X' || b1 == '0') && (b2 == 'X' 
      || b2 == '0') && (b3 == 'X' || b3 == '0') && 
      (b4 == 'X' || b4 == '0') && (b5 == 'X' || 
      b5 == '0') && (b6 == 'X' || b6 == '0') && 
      (b7 == 'X' || b7 == '0') && (b8 == 'X' || 
      b8 == '0') && (b9 == 'X' || b9 == '0')) {
          document.getElementById('print').innerHTML = "Match Tie";
          window.alert('Match Tie');
  }
  else {

      // Here, Printing Result
      if (flag == 1) {
          document.getElementById('print').innerHTML = "Player X Turn";
      }
      else {
          document.getElementById('print').innerHTML = "Player 0 Turn";
      }
  }
}

// Function to reset game - set all cells to spaces
function myfunc_2() {
  location.reload();
  (<HTMLInputElement>document.getElementById('b1')).value = '';
  (<HTMLInputElement>document.getElementById("b2")).value = '';
  (<HTMLInputElement>document.getElementById("b3")).value = '';
  (<HTMLInputElement>document.getElementById("b4")).value = '';
  (<HTMLInputElement>document.getElementById("b5")).value = '';
  (<HTMLInputElement>document.getElementById("b6")).value = '';
  (<HTMLInputElement>document.getElementById("b7")).value = '';
  (<HTMLInputElement>document.getElementById("b8")).value = '';
  (<HTMLInputElement>document.getElementById("b9")).value = '';

}

// Here onwards, functions check turn of the player 
// and put accordingly value X or 0
// flag signifies which player - X or 0 - and puts that value in the corresponding cell and sets it as disabled

let flag: number = 1;
function myfunc_3() {
  if (flag == 1) {
      (<HTMLInputElement>document.getElementById("b1")).value = "X";
      (<HTMLInputElement>document.getElementById("b1")).disabled = true;
      flag = 0;
  }
  else {
      (<HTMLInputElement>document.getElementById("b1")).value = "0";
      (<HTMLInputElement>document.getElementById("b1")).disabled = true;
      flag = 1;
  }
}

function myfunc_4() {
  if (flag == 1) {
      (<HTMLInputElement>document.getElementById("b2")).value = "X";
      (<HTMLInputElement>document.getElementById("b2")).disabled = true;
      flag = 0;
  }
  else {
      (<HTMLInputElement>document.getElementById("b2")).value = "0";
      (<HTMLInputElement>document.getElementById("b2")).disabled = true;
      flag = 1;
  }
}

function myfunc_5() {
  if (flag == 1) {
      (<HTMLInputElement>document.getElementById("b3")).value = "X";
      (<HTMLInputElement>document.getElementById("b3")).disabled = true;
      flag = 0;
  }
  else {
      (<HTMLInputElement>document.getElementById("b3")).value = "0";
      (<HTMLInputElement>document.getElementById("b3")).disabled = true;
      flag = 1;
  }
}

function myfunc_6() {
  if (flag == 1) {
      (<HTMLInputElement>document.getElementById("b4")).value = "X";
      (<HTMLInputElement>document.getElementById("b4")).disabled = true;
      flag = 0;
  }
  else {
      (<HTMLInputElement>document.getElementById("b4")).value = "0";
      (<HTMLInputElement>document.getElementById("b4")).disabled = true;
      flag = 1;
  }
}

function myfunc_7() {
  if (flag == 1) {
      (<HTMLInputElement>document.getElementById("b5")).value = "X";
      (<HTMLInputElement>document.getElementById("b5")).disabled = true;
      flag = 0;
  }
  else {
      (<HTMLInputElement>document.getElementById("b5")).value = "0";
      (<HTMLInputElement>document.getElementById("b5")).disabled = true;
      flag = 1;
  }
}

function myfunc_8() {
  if (flag == 1) {
      (<HTMLInputElement>document.getElementById("b6")).value = "X";
      (<HTMLInputElement>document.getElementById("b6")).disabled = true;
      flag = 0;
  }
  else {
      (<HTMLInputElement>document.getElementById("b6")).value = "0";
      (<HTMLInputElement>document.getElementById("b6")).disabled = true;
      flag = 1;
  }
}

function myfunc_9() {
  if (flag == 1) {
      (<HTMLInputElement>document.getElementById("b7")).value = "X";
      (<HTMLInputElement>document.getElementById("b7")).disabled = true;
      flag = 0;
  }
  else {
      (<HTMLInputElement>document.getElementById("b7")).value = "0";
      (<HTMLInputElement>document.getElementById("b7")).disabled = true;
      flag = 1;
  }
}

function myfunc_10() {
  if (flag == 1) {
      (<HTMLInputElement>document.getElementById("b8")).value = "X";
      (<HTMLInputElement>document.getElementById("b8")).disabled = true;
      flag = 0;
  }
  else {
      (<HTMLInputElement>document.getElementById("b8")).value = "0";
      (<HTMLInputElement>document.getElementById("b8")).disabled = true;
      flag = 1;
  }
}

function myfunc_11() {
  if (flag == 1) {
      (<HTMLInputElement>document.getElementById("b9")).value = "X";
      (<HTMLInputElement>document.getElementById("b9")).disabled = true;
      flag = 0;
  }
  else {
      (<HTMLInputElement>document.getElementById("b9")).value = "0";
      (<HTMLInputElement>document.getElementById("b9")).disabled = true;
      flag = 1;
  }
}