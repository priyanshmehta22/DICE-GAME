console.log("welcome to the dice game");
let winneratscore = 10;
let player1score = +document.getElementById("finalscore1").textContent;
let player2score = +document.getElementById("finalscore2").textContent;
let reset = document.getElementById("reset");
let player1turn = true;
let player2turn = false;

roll.addEventListener("click", playerturn);

function playerturn() {
  let dicescore = Math.floor(Math.random() * 6) + 1;
  let image = document.getElementById("image");
  image.value = dicescore;
  if (player1turn === true) {
    let roll = document.getElementById("roll");
    image.innerHTML = dicescore;
    player1score = player1score + dicescore;
    console.log("player 1 score is " + player1score);
    finalscore1.innerHTML = player1score;
    console.dir(player1score, { depth: null });
    if (player1score >= winneratscore) {
      alert("player 1 wins");
    }
    player1turn = false;
    player2turn = true;
  } else if (player2turn === true) {
    let roll = document.getElementById("roll");
    image.innerHTML = dicescore;
    player2score = player2score + dicescore;
    finalscore2.innerHTML = player2score;
    console.log("player 2 score is " + player2score);
    if (player2score >= winneratscore) {
      alert("player 2 wins");
    }
    player2turn = false;
    player1turn = true;
    reset.addEventListener("click", function () {
      document.location.reload(true);
    });
    roll.addEventListener("click", function () {
      if (player1score >= winneratscore || player2score >= winneratscore) {
        document.location.reload(true);
      }
    });
  }
}
