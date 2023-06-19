let x = document.querySelector(".X");
let o = document.querySelector(".O");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#button button");
let messageC = document.querySelector(".message");
let messageText = document.querySelector(".message p");
let secondPlayer;

// contador jogador
let player1 = 0;
let player2 = 0;

// adicionando o evento click
for (let i = 0; i < boxes.length; i++) {
    let el = check(player1, player2);

    boxes[i].addEventListener("click", function () {
        if (player1 === player2) {
            player1++;
            check();
            if (secondPlayer === "ia-player") {
                // função executar jogada
                player2++;
                computerPlayer();
            }
        } else {
            player2++;
            check();
        }

        if (this.childNodes.length === 0) {
            let cloneEl = el.cloneNode(true);
            this.appendChild(cloneEl);
        }

        // checkar quem ganhou
        checkWin();
    });
}

// evento para saber modo de jogo
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        secondPlayer = this.getAttribute("id");

        for (let j = 0; j < buttons.length; j++) {
            buttons[j].style.display = "none";
        }

        setTimeout(function () {
            let container = document.querySelector("#container");
            container.classList.remove("hide");
        }, 500);
    });
}

function checkWin() {
    let b1 = document.getElementById("block-1");
    let b2 = document.getElementById("block-2");
    let b3 = document.getElementById("block-3");
    let b4 = document.getElementById("block-4");
    let b5 = document.getElementById("block-5");
    let b6 = document.getElementById("block-6");
    let b7 = document.getElementById("block-7");
    let b8 = document.getElementById("block-8");
    let b9 = document.getElementById("block-9");

    // horizontal
    if (
        b1.childNodes.length > 0 &&
        b2.childNodes.length > 0 &&
        b3.childNodes.length > 0
    ) {
        let b1Child = b1.childNodes[0].className;
        let b2Child = b2.childNodes[0].className;
        let b3Child = b3.childNodes[0].className;

        if (b1Child === "X" && b2Child === "X" && b3Child === "X") {
            declareWinner("X");
        } else if (b1Child === "O" && b2Child === "O" && b3Child === "O") {
            declareWinner("O");
        }
    }

    if (
        b4.childNodes.length > 0 &&
        b5.childNodes.length > 0 &&
        b6.childNodes.length > 0
    ) {
        let b4Child = b4.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;

        if (b4Child === "X" && b5Child === "X" && b6Child === "X") {
            declareWinner("X");
        } else if (b4Child === "O" && b5Child === "O" && b6Child === "O") {
            declareWinner("O");
        }
    }

    if (
        b7.childNodes.length > 0 &&
        b8.childNodes.length > 0 &&
        b9.childNodes.length > 0
    ) {
        let b7Child = b7.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if (b7Child === "X" && b8Child === "X" && b9Child === "X") {
            declareWinner("X");
        } else if (b7Child === "O" && b8Child === "O" && b9Child === "O") {
            declareWinner("O");
        }
    }

    // vertical
    if (
        b1.childNodes.length > 0 &&
        b4.childNodes.length > 0 &&
        b7.childNodes.length > 0
    ) {
        let b1Child = b1.childNodes[0].className;
        let b4Child = b4.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if (b1Child === "X" && b4Child === "X" && b7Child === "X") {
            declareWinner("X");
        } else if (b1Child === "O" && b4Child === "O" && b7Child === "O") {
            declareWinner("O");
        }
    }

    if (
        b2.childNodes.length > 0 &&
        b5.childNodes.length > 0 &&
        b8.childNodes.length > 0
    ) {
        let b2Child = b2.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;

        if (b2Child === "X" && b5Child === "X" && b8Child === "X") {
            declareWinner("X");
        } else if (b2Child === "O" && b5Child === "O" && b8Child === "O") {
            declareWinner("O");
        }
    }

    if (
        b3.childNodes.length > 0 &&
        b6.childNodes.length > 0 &&
        b9.childNodes.length > 0
    ) {
        let b3Child = b3.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if (b3Child === "X" && b6Child === "X" && b9Child === "X") {
            declareWinner("X");
        } else if (b3Child === "O" && b6Child === "O" && b9Child === "O") {
            declareWinner("O");
        }
    }

    // diagonal
    if (
        b1.childNodes.length > 0 &&
        b5.childNodes.length > 0 &&
        b9.childNodes.length > 0
    ) {
        let b1Child = b1.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if (b1Child === "X" && b5Child === "X" && b9Child === "X") {
            declareWinner("X");
        } else if (b1Child === "O" && b5Child === "O" && b9Child === "O") {
            declareWinner("O");
        }
    }

    if (
        b3.childNodes.length > 0 &&
        b5.childNodes.length > 0 &&
        b7.childNodes.length > 0
    ) {
        let b3Child = b3.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if (b3Child === "X" && b5Child === "X" && b7Child === "X") {
            declareWinner("X");
        } else if (b3Child === "O" && b5Child === "O" && b7Child === "O") {
            declareWinner("O");
        }
    }

    // verificar empate
    let counter = 0;
    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].childNodes[0] !== undefined) {
            counter++;
        }
    }
    if (counter === 9) {
        declareWinner("Empate");
    }
}

// função para limpar
function declareWinner(winner) {
    let scoreboard1 = document.querySelector("#scoreboard-1");
    let scoreboard2 = document.querySelector("#scoreboard-2");
    let msg = "";

    if (winner === "X") {
        scoreboard1.textContent = parseInt(scoreboard1.textContent) + 1;
        msg = "O jogador 1 venceu!";
    } else if (winner === "O") {
        scoreboard2.textContent = parseInt(scoreboard2.textContent) + 1;
        msg = "O jogador 2 venceu!";
    } else {
        msg = "Empate!";
    }

    // exibir mensagem
    messageText.innerHTML = msg;
    messageC.classList.remove("hide");

    // esconder mensagem
    setTimeout(function () {
        messageC.classList.add("hide");
    }, 3000);

    // limpar jogadas
    player1 = 0;
    player2 = 0;

    let boxesToRemove = document.querySelectorAll(".box div");
    for (let i = 0; i < boxesToRemove.length; i++) {
        boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
    }
}

// função para executar a jogada do computador
function computerPlayer() {
    let cloneO = o.cloneNode(true);
    counter = 0;
    filled = 0;

    for (let i = 0; i < boxes.length; i++) {
        let randomNumber = Math.floor(Math.random() * 5);

        // preencher apenas se o filho estiver vazio
        if (boxes[i].childNodes[0] === undefined) {
            if (randomNumber <= 1) {
                boxes[i].appendChild(cloneO);
                counter++;
                break;
            }
        } else {
            filled++;
        }
    }
    if (counter === 0 && filled < 9) {
        computerPlayer();
    }
}

// verificar quem vai jogar
function check(player1, player2) {
    if (player1 === player2) {
        // jogador 1
        el = x;
    } else {
        // jogador 2
        el = o;
    }
    return el;
}
