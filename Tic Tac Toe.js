let box = document.querySelectorAll(".box")
let newGame = document.querySelector(".new-game")
let resetGame = document.querySelector(".reset-game")
let msg = document.querySelector(".msg")
let turnO = true
let count = 0
let winPat = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

box.forEach((box) => {
    box.addEventListener("click" , function () {
        if (turnO) {
            box.innerText = "O"
            turnO = false
        }
        else {
            box.innerText = "X"
            turnO = true
        }
        box.disabled = true
        count++
        checkWinner()
    })
});
function checkWinner() {
    for (const pat of winPat) {
        let val1 = (box[pat[0]].innerText)
        let val2 = (box[pat[1]].innerText)
        let val3 = (box[pat[2]].innerText)
        if (val1 === val2 && val2 === val3 && val1 !== "") {
            msg.innerText = ("Player " + val1 + " wins!")
            showEndGameOptions()
        }
        if (count === 9) {
            msg.innerText = ("It's a tie!")
            showEndGameOptions()
        }
    }
}
newGame.addEventListener("click", restartGame);
function restartGame() {
    box.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    msg.innerText = "";
    msg.classList.add("msg-hide");
    newGame.classList.add("hide");
    turnO = true;
    count = 0;
}
resetGame.addEventListener("click", resetGameBoard);
function resetGameBoard() {
    restartGame();
}
function showEndGameOptions() {
    newGame.classList.remove("hide");
    msg.classList.remove("msg-hide");
    box.forEach((box) => (box.disabled = true));
}