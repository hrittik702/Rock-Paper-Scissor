// Winner = 0 (draw)
// winner = 1 (you)
// winner = -1 (computer win)

let your_score = 0;
let computer_score = 0;
let rounds = 0;
let win_ratio = () => {
  if (your_score === 0 && computer_score === 0) return 0;
  else if (computer_score === 0) return your_score;
  else return (your_score / computer_score).toFixed(1);
};

// Changes
const you_scr = document.querySelector("#you p");
const cmp_scr = document.querySelector("#computer p");
const status = document.querySelector(".status p:nth-child(2)");
const round = document.querySelector(".status>p span");
const winRatio = document.querySelector("nav button span");

const game_begins = (num) => {
  round.innerHTML = `${++rounds}`;
  if (num == 0) {
    status.innerHTML = "Match Draw!";
    status.style.backgroundColor = "#e6e6fa";
  } else if (num == 1) {
    you_scr.innerHTML = `${++your_score}`;
    status.innerHTML = "You Win!";
    status.style.backgroundColor = "#3ae469";
  } else if (num == -1) {
    cmp_scr.innerHTML = `${++computer_score}`;
    status.innerHTML = "Computer Wins!";
    status.style.backgroundColor = "#ff5438";
  }
  winRatio.innerHTML = `${win_ratio()}`;
};

// Computer choice
const choice = () => {
  let choice = Math.floor(Math.random() * 3) + 1;
  if (choice == 1) return "rock";
  if (choice == 2) return "paper";
  if (choice == 3) return "scissor";
};

// Your choice = rock
const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
  let you = "rock";
  let comp = choice();
  game_begins(ans(you, comp));
});

const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
  let you = "paper";
  let comp = choice();
  game_begins(ans(you, comp));
});

const scissor = document.querySelector("#scissor");
scissor.addEventListener("click", () => {
  let you = "scissor";
  let comp = choice();
  game_begins(ans(you, comp));
});

// game-login
const ans = (you, comp) => {
  if (you === comp) return 0;
  //   you win
  else if (you === "rock" && comp === "scissor") return 1;
  else if (you === "paper" && comp === "rock") return 1;
  else if (you === "scissor" && comp === "paper") return 1;
  // computer win
  else if (you === "rock" && comp === "paper") return -1;
  else if (you === "paper" && comp === "scissor") return -1;
  else if (you === "scissor" && comp === "rock") return -1;
};
