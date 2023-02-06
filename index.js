const getDice1 = document.querySelector(".dice__face1");
const getDice2 = document.querySelector(".dice__face2");
const outHolder1 = document.querySelector(".outcome1");
const outHolder2 = document.querySelector(".outcome2");

const diceFace = ["one", "two", "three", "four", "five", "six"];

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
    outHolder1.innerHTML = "Winner!";
    outHolder2.innerHTML = "Loser!";
    outHolder1.classList.add("win");
    outHolder2.classList.add("lose");
    getDice1.classList.add("win");
    getDice2.classList.add("lose");
  } else if (randNum2 > randNum1) {
    outHolder2.innerHTML = "Winner!";
    outHolder1.innerHTML = "Loser!";
    outHolder1.classList.add("lose");
    outHolder2.classList.add("win");
    getDice1.classList.add("lose");
    getDice2.classList.add("win");
  } else {
    outHolder2.innerHTML = "Draw!";
    outHolder1.innerHTML = "Draw!";
    outHolder1.classList.add("draw");
    outHolder2.classList.add("draw");
    getDice1.classList.add("draw");
    getDice2.classList.add("draw");
  }
}

function player1() {
  randNum1 = Math.min(
    Math.ceil(Math.random() * diceFace.length) + 1,
    diceFace.length
  );
  for (let i = 1; i <= randNum1; i++) {
    const span = document.createElement("span");
    getDice1.appendChild(span).classList.add("dot1");
  }
}

function player2() {
  randNum2 = Math.min(
    Math.ceil(Math.random() * diceFace.length) + 1,
    diceFace.length
  );
  for (let i = 1; i <= randNum2; i++) {
    const span = document.createElement("span");
    getDice2.appendChild(span).classList.add("dot2");
  }
}

result();
