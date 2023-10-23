const userDice = Math.floor(Math.random() * 12) + 1;
const pcDice = Math.floor(Math.random() * 12) + 1;
console.log(userDice, pcDice);

const emojiWinElem = document.getElementById("win");
const emojiLoseElem = document.getElementById("lose");
const emojiTieElem = document.getElementById("tie");

let result = "";
if (userDice > pcDice) {
  result = `L'Utente vince con un punteggio di ${userDice} contro ${pcDice}`;
  emojiWinElem.classList.remove(`display_none`);
} else if (userDice === pcDice) {
  result = `Utente e PC pareggiano con un punteggio di ${userDice}`;
  emojiTieElem.classList.remove("display_none");
} else if (userDice < pcDice) {
  result = `PC vince con un punteggio di ${pcDice} contro ${userDice}`;
  emojiLoseElem.classList.remove("display_none");
}
console.log(result);

document.getElementById("user_dice").innerHTML = `${userDice}`;
document.getElementById("pc_dice").innerHTML = `${pcDice}`;
document.getElementById("result").innerHTML = `${result}`;
