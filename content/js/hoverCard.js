function hoverCard() {
  var cards = {value1: "assets/img/rock.png", value2: "assets/img/paper.png", value3: "assets/img/scissor.png"};
  for(let i=1; i<=3; i++) {
    document.querySelector(`.player-cards-container img:nth-child(${i})`).addEventListener("mouseover", ()=>{
      document.querySelector(".in-camp-cards img:nth-child(2)").src = cards[`value${i}`];
    })
  };

}
