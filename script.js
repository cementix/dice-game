let playButton = document.querySelector(".play button");

playButton.addEventListener("click", () => {
    let playerOne = Math.floor((Math.random() * 6) + 1);
    let playerTwo = Math.floor((Math.random() * 6) + 1);

    let diceOne = document.querySelector(".player1 img");
    let diceTwo = document.querySelector(".player2 img");

    diceOne.setAttribute("src", `./images/dice${playerOne}.png`);
    diceTwo.setAttribute("src", `./images/dice${playerTwo}.png`);

    if (playerOne > playerTwo) {
        document.querySelector(".title h1").textContent = "🟢 Player 1 Won! 🟢"
    } else {
        document.querySelector(".title h1").textContent = "🔴 Player 2 Won! 🔴"
    }

    if (playerOne == playerTwo) {
        document.querySelector(".title h1").textContent = "🤝 It`s a draw! 🤝"
    }
})