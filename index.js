const getDice1 = document.querySelector(".dice__face1");
const getDice2 = document.querySelector(".dice__face2");
const outHolder1 = document.querySelector(".outcome1");
const outHolder2 = document.querySelector(".outcome2");

function result() {
  player1();
  player2();
  winLose();
  outHolder1.classList.add("place");
  outHolder2.classList.add("place");
}

function winLose() {
  randNum1;
  randNum2;
  if (randNum1 > randNum2) {
    updateOutcome("Winner!", "Loser!", "win", "lose");
  } else if (randNum2 > randNum1) {
    updateOutcome("Loser!", "Winner!", "lose", "win");
  } else if (randNum1 == randNum2) {
    updateOutcome("Draw!", "Draw!", "draw", "draw");
  }
}


function updateOutcome(result1, result2, class1, class2) {
  outHolder1.innerHTML = result1;
  outHolder2.innerHTML = result2;
  outHolder1.classList.add(class1);
  outHolder2.classList.add(class2);
  getDice1.classList.add(class1);
  getDice2.classList.add(class2);
}

function player1() {
  randNum1 = Math.floor(Math.random() * 6 + 1);
  for (let i = 1; i <= randNum1; i++) {
    const span = document.createElement("span");
    getDice1.appendChild(span).classList.add("dot1");
  }
}

function player2() {
  randNum2 = Math.floor(Math.random() * 6 + 1);
  for (let i = 1; i <= randNum2; i++) {
    const span = document.createElement("span");
    getDice2.appendChild(span).classList.add("dot2");
  }
}

result();
