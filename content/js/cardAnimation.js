function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getMatch() {

  let choices = ["rock", "paper", "scissor"];
  let player_choice,
      computer_choice,
      duelTime = true,
      player_lf = 8000,
      enemy_lf = 8000;

  // Send life to container on HTML
  document.querySelector(".enemy-img-container p").innerText = enemy_lf;
  document.querySelector(".player-img-container p").innerText = enemy_lf;

  async function playerWin() {
    duelTime = false;
    document.querySelector(`.in-camp-cards img:nth-child(1)`).style.right = "15vw";
    document.querySelector(`.in-camp-cards img:nth-child(2)`).style.right = "25vw";
    document.querySelector(".enemy-img-container img").src = "assets/img/faces_computador/face_computador_damage.png";
    document.querySelector(".player-img-container img").src = "assets/img/faces_jogador/face_jogador_attack.png";
    for (var damage = 500; damage > 0; damage--) {
         await sleep(Math.floor(Math.random() * .9) + .1);
         enemy_lf--;
         document.querySelector(".enemy-img-container p").innerText = enemy_lf;
      }
    resetCards();
    duelTime = true;
  }

  async function Draw() {
    duelTime = false;
    document.querySelector(`.in-camp-cards img:nth-child(1)`).style.right = "-15vw";
    document.querySelector(`.in-camp-cards img:nth-child(2)`).style.right = "16vw";
    await sleep(1000);
    resetCards();
    duelTime = true;
  }

  async function computerWin() {
    duelTime = false;
    document.querySelector(`.in-camp-cards img:nth-child(1)`).style.right = "-25vw";
    document.querySelector(`.in-camp-cards img:nth-child(2)`).style.right = "-15vw";
    document.querySelector(".enemy-img-container img").src = "assets/img/faces_computador/face_computador_attack.png";
    document.querySelector(".player-img-container img").src = "assets/img/faces_jogador/face_jogador_damage.png";
    for (var damage = 500; damage > 0; damage--) {
         await sleep(Math.floor(Math.random() * .9) + .1);
         player_lf--;
         document.querySelector(".player-img-container p").innerText = player_lf;
      }
    resetCards();
    duelTime = true;
  }

  function resetCards() {
    document.querySelector(`.in-camp-cards img:nth-child(1)`).style.right = "0vw";
    document.querySelector(`.in-camp-cards img:nth-child(2)`).style.right = "0vw";
    document.querySelector(`.in-camp-cards img:nth-child(1)`).src = "assets/img/back-card.png";
    document.querySelector(`.in-camp-cards img:nth-child(2)`).src = "assets/img/back-card.png";
    document.querySelector(".enemy-img-container img").src = "assets/img/faces_computador/face_computador_normal.png";
    document.querySelector(".player-img-container img").src = "assets/img/faces_jogador/face_jogador_normal.png";
  }

  for(let i=0; i<3; i++) {
    document.querySelector(`.player-cards-container img:nth-child(${i+1})`).addEventListener("click", ()=>{
      if (duelTime == true) {
        player_choice = choices[i];
        enemy_choice = choices[Math.floor(Math.random() * choices.length)];
        document.querySelector(`.in-camp-cards img:nth-child(1)`).src = `assets/img/${enemy_choice}.png`;

        if (player_choice == "rock" && enemy_choice == "scissor" ||
            player_choice == "paper" && enemy_choice == "rock" ||
            player_choice == "scissor" && enemy_choice == "paper") {
          playerWin();
        }
        else if (player_choice === enemy_choice) {
          Draw();
        }
        else {
          computerWin();
        }
      }
  })
}
}
