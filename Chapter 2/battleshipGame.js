const location1 = Math.trunc(Math.random() * 4 + 1);
const location2 = location1 + 1;
const location3 = location2 + 1;
console.log(location1, location2, location3);
let guess;
let guesses = 0;
let isSunk = false;
let hit = 0;

while (isSunk != true) {
  guess = prompt("Enter the location of the ship between 0 to 6");

  if (guess === null) {
    alert("Game ended");
    break;
  }
  guess = Number(guess);
  if (guess < 0 || guess > 6) {
    alert("Invalid input");
  } else {
    guesses += 1;
    if (guess === location1 || guess === location2 || guess === location3) {
      alert("Hit");
      hit += 1;
      if (hit === 3) {
        isSunk = true;
        alert("You sank my battleship");
      }
    } else {
      alert("Miss");
    }
  }
}
if (isSunk) {
  alert(`You sank the ship in ${guesses} guesses`);
}
