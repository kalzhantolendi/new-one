const emojis = ["🦦", "🐥", "🦉", "🦈", "🐅", "🐎", "🦜", "🐇", 
                "🦦", "🐥", "🦉", "🦈", "🐅", "🐎", "🦜", "🐇"];


                let shuffledEmojis, selectedCards, matchedCards;
const gameBoard = document.getElementById("game-board");

function startGame() {
    shuffledEmojis = emojis.sort(() => 0.5 - Math.random());
    selectedCards = [];
    matchedCards = [];
    gameBoard.innerHTML = "";

    shuffledEmojis.forEach((emoji, index) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.index = index;
        card.innerHTML = emoji;

        card.addEventListener("click", () => flipCard(card, emoji));

        gameBoard.appendChild(card);
    });
}

function flipCard(card, emoji) {
    if (selectedCards.length < 2 && !selectedCards.includes(card) && !matchedCards.includes(card)) {
        card.classList.add("revealed");
        selectedCards.push({ card, emoji });

        if (selectedCards.length === 2) {
            checkMatch();
        }
    }
}

function checkMatch() {
    const [first, second] = selectedCards;

    if (first.emoji === second.emoji) {
        matchedCards.push(first.card, second.card);
        selectedCards = [];

        if (matchedCards.length === emojis.length) {
            setTimeout(() => {
                alert("Congratulations!");
                startGame();
            }, 500);
        }
    } else {
        setTimeout(() => {
            first.card.classList.remove("revealed");
            second.card.classList.remove("revealed");
            selectedCards = [];
        }, 1000);
    }
}

startGame();



