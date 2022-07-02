let x  = document.querySelector(".X");
let o  = document.querySelector(".O");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#button button");
let messageC = document.querySelector(".menssage");
let messageText = document.querySelector(".menssage p")
let secondplayer; 


// contador jogador
let player1 = 0;
let player2 = 0;

// adcicionando o evento click

for(let i = 0; i < boxes.length; i++){

   let el =  check(player1, player2)

    boxes[i].addEventListener("click", function(){
        if(player1 == player2){
            player1++; 
           check()
            if(secondplayer == "ia-player"){

               //função executar jogada
               player2++;
               computerPlayer()
            }
          
        } else{
            player2++;
            check()
        }

        if(this.childNodes.length == 0){
             let cloneEl = el.cloneNode(true);
              this.appendChild(cloneEl);
        }

        //checkar quem ganhoy
        checkWin();
      
    })
    // quem vai jogar
    function check(player1, player2){
      if(player1 ==player2){
         el = x;
      } else {
         el = o;
      }
    }
}
// evento para saber modo de jogo
for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(){
         
       secondplayer = this.getAttribute("id");

       for(let j = 0; j < buttons.length; j++ ){
         buttons[j].style.display = 'none';
       }
       setTimeout(function(){
          let container = document.querySelector("#containter");
          container.classList.remove("hide");
       }, 500)
    });
}

function checkWin(){

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
  if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0){
      
      let b1Child = b1.childNodes[0].className; 
      let b2Child = b2.childNodes[0].className;
      let b3Child = b3.childNodes[0].className;

       if(b1Child == "X" && b2Child == "X" && b3Child == "X"){
        declareWinner('X')

       }else if(b1Child == 'O' && b2Child == 'O' && b3Child == 'O'){
        declareWinner('O');
       }
  }

  if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0){
      
    let b4Child = b4.childNodes[0].className; 
    let b5Child = b5.childNodes[0].className;
    let b6Child = b6.childNodes[0].className;

     if( b4Child == "X" && b5Child == "X" && b6Child == "X"){
        declareWinner('X');

     }else if( b4Child == 'O' && b5Child == 'O' && b6Child == 'O'){
        declareWinner('O');
     }

}
if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0){
      
    let b7Child = b7.childNodes[0].className; 
    let b8Child = b8.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;

     if(b7Child == "X" && b8Child == "X" && b9Child == "X"){
        declareWinner('X');

     }else if(b7Child == 'O' && b8Child == 'O' && b9Child == 'O'){
       declareWinner('O');
     } 
}
  //vertical
  if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0){
      
    let b1Child = b1.childNodes[0].className; 
    let b4Child = b4.childNodes[0].className;
    let b7Child = b7.childNodes[0].className;

     if(b1Child == "X" && b4Child == "X" && b7Child == "X"){
        declareWinner('X');

     }else if(b1Child == 'O' && b4Child == 'O' && b7Child == 'O'){
        declareWinner('O');
     }
}
if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0){
      
    let b2Child = b2.childNodes[0].className; 
    let b5Child = b5.childNodes[0].className;
    let b8Child = b8.childNodes[0].className;

     if(b2Child == "X" && b5Child == "X" && b8Child == "X"){
        declareWinner('X');

     }else if(b2Child == 'O' && b5Child == 'O' && b8Child == 'O'){
        declareWinner('X');
     }
}
if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0){
      
    let b3Child = b3.childNodes[0].className; 
    let b6Child = b6.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;

     if(b3Child == "X" && b6Child == "X" && b9Child == "X"){
        declareWinner('X');

     }else if(b3Child == 'O' && b6Child == 'O' && b9Child == 'O'){
        declareWinner('O');
     }
}
   // diagonal
   if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0){
      
    let b1Child = b1.childNodes[0].className; 
    let b5Child = b5.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;

     if(b1Child == "X" && b5Child == "X" && b9Child == "X"){
        declareWinner('X');

     }else if(b1Child == 'O' && b5Child == 'O' && b9Child == 'O'){
        declareWinner('O');
     }
}
if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0){
      
    let b3Child = b3.childNodes[0].className; 
    let b5Child = b5.childNodes[0].className;
    let b7Child = b7.childNodes[0].className;

     if(b3Child == "X" && b5Child == "X" && b7Child == "X"){
        declareWinner('X');

     }else if(b3Child == 'O' && b5Child == 'O' && b7Child == 'O'){
        declareWinner('O');
     }
}
  // velha
  let counter = 0;

  for(let i = 0; i < boxes.length; i++){
    if(boxes[i].childNodes[0] != undefined) {
        counter++;
    }
  }
  if(counter == 9){
    declareWinner("deu velha")
  }

}

// limpa o jogo, declara o vencedor e atualiza o placar
function declareWinner(winner){
    let scoreboardx = document.querySelector("#scoreboard-1");
    let scoreboardy = document.querySelector("#scoreboard-2");
    let msg = '';

    if(winner == 'X'){
        scoreboardx.textContent = parseInt(scoreboardx.textContent) + 1;
        msg = "O player 1 venceu!";
        alert("PLAYER 1 VENCEU");
} else if(winner == 'O'){
    scoreboardy.textContent = parseInt(scoreboardy.textContent) + 1;
    msg = "O player 2 venceu";
    alert("PLAYER 2 VENCEU");
}else{
    msg = "deu velha!";
    alert("DEU VELHA")
}
  player1 = 0;
  player2 = 0;

  // remove x e o 
   let boxesToRemove = document.querySelectorAll(".box div");

   for(let i = 0; i < boxesToRemove.length; i++){
    boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
   }
}


// computer player

function computerPlayer(){

   let cloneO = o.cloneNode(true);
   counter = 0;
   filled = 0;

   for(let i = 0 ; i < boxes.length; i++){
      
      let randomNumber = Math.floor(Math.random() * 5);

      if(boxes[i].childNodes[0] == undefined){
         if(randomNumber <=1){
            boxes[i].appendChild(cloneO);
            counter++;
            break;
         }
      } else{
         filled++;
      }
   }

   if(counter == 0 && filled <9 ){
         computerPlayer()
   }
}