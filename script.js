// Winner = 0 (draw)
// winner = 1 (you)
// winner = -1 (computer win)

let user_score = 0;
let comp_score = 0;
let rounds = 0;

// Computer choice
const getChoice = () => {
    let choices = ['rock', 'paper', 'scissor'];
    let choice_idx = Math.floor(Math.random() * 3);
    return choices[choice_idx];
};

// Your Choice & Game On
let options = document.querySelectorAll('main div');
options.forEach((choice) => {
    choice.addEventListener('click', () => {
        const user_Choice = choice.getAttribute('id');
        const comp_Choice = getChoice();
        game_begins(ans(user_Choice, comp_Choice), user_Choice, comp_Choice);
    });
});

// Game-logic
const ans = (user_Choice, comp_Choice) => {
    if (user_Choice === comp_Choice) return 0;
    if (user_Choice === 'rock' && comp_Choice === 'scissor') return 1;
    else if (user_Choice === 'paper' && comp_Choice === 'rock') return 1;
    else if (user_Choice === 'scissor' && comp_Choice === 'paper') return 1;
};

let win_ratio = () => {
    if (user_score === 0 && comp_score === 0) return 0;
    else if (comp_score === 0) return user_score;
    else return (user_score / comp_score).toFixed(1);
};

// Query Selectors
const user_scr = document.querySelector('#you p');
const cmp_scr = document.querySelector('#computer p');
const status = document.querySelector('.status p:nth-child(2)');
const round = document.querySelector('.status>p span');
const winRatio = document.querySelector('nav button span');

const game_begins = (num, user_Choice, comp_Choice) => {
    round.innerHTML = `${++rounds}`;
    if (num == 0) {
        status.innerHTML = "It's draw. Try again !";
        status.style.backgroundColor = '#012552';
        status.style.color = 'white';
    } else if (num == 1) {
        user_scr.innerHTML = `${++user_score}`;
        status.innerHTML = `You Win! Your's ${user_Choice} beats ${comp_Choice}`;
        status.style.backgroundColor = 'green';
        status.style.color = 'white';
    } else {
        cmp_scr.innerHTML = `${++comp_score}`;
        status.innerHTML = `You Lost!  ${comp_Choice} beats Your's ${user_Choice}`;
        status.style.backgroundColor = 'red';
        status.style.color = 'white';
    }
    winRatio.innerHTML = `${win_ratio()}`;
};
