// Winner = 0 (draw)
// winner = 1 (you)
// winner = -1 (computer win)

let your_score = 0;
let comp_score = 0;
let rounds = 0;

let win_ratio = () => {
  if (your_score === 0 && computer_score === 0) return 0;
  else if (computer_score === 0) return your_score;
  else return (your_score / computer_score).toFixed(1);
};

// Query Selectors
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
const getChoice = () => {
  let choices = ["rock", "paper", "scissor"];
  let choice_idx = Math.floor(Math.random() * 3);
  return choices[choice_idx];
};

// game-logic
const ans = (user_Choice, comp_Choice) => {
  if (user_Choice === comp_Choice) return 0;
  let userWin = 0;
  if (user_Choice === "rock") {
    userWin = comp_Choice === "paper" ? -1 : 1;
  } else if (user_Choice === "paper") {
    userWin = comp_Choice === "scissor" ? -1 : 1;
  } else if (user_Choice === "scissor") {
    userWin = comp_Choice === "rock" ? -1 : 1;
  }
  console.log(userWin);
};

// Your Choice
let options = document.querySelectorAll("main div");
options.forEach((choice) => {
  choice.addEventListener("click", () => {
    const user_Choice = choice.getAttribute("id");
    const comp_Choice = getChoice();
    console.log(user_Choice, comp_Choice);
    ans(user_Choice, comp_Choice);
  });
});
