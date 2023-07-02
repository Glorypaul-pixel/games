let cards = [];
let sum = 0;
let getBlackJack = false;
let isAlive = false;
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let message = " ";
let player = {
  name: "Glory",
  chips: 145,
};

let playerEl = (document.getElementById("player-el").innerText =
  player.name + ": $" + player.chips);
function getRandomCard() {
  let randomNum = Math.floor(Math.random() * 13) + 1;
  if (randomNum === 1) {
    return 11;
  } else if (randomNum > 10) {
    return 10;
  } else {
    return randomNum;
  }
}

function startGame() {
  isAlive = true;
  firstCard = getRandomCard();
  secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  console.log(renderGame());
}
function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card";
    messageEl.innerText = message;
    // sumEl.innerText = "Sum: " + sum;
    // cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1];
  } else if (sum === 21) {
    message = " You've got Blackjack";
    messageEl.innerText = message;
    getBlackJack = true;
  } else {
    message = "You are out of the game";
    messageEl.innerText = message;
    isAlive = false;
  }
}

function newCard() {
  if (isAlive === true && getBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    // console.log(cards);
    renderGame();
  }
}
console.log(sum);

