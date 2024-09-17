// variables 
var score = document.querySelector(".score-box p"),
    i = 0,
    gameLayout = document.querySelector(".game-layout"),
    paper = document.querySelector("#paper"),
    scissors = document.querySelector("#scissors"), 
    rock = document.querySelector("#rock"),
    rulesBtn = document.querySelector(".rules-btn button"),
    theRules = document.querySelector(".rules"),
    closeButton = document.querySelector(".rules-header span"),
    theGame = document.querySelector(".the-game"),
    yourPick = document.querySelector("#you-picked div"),   
    housePick = document.querySelector("#house-picked div"),
    gameFooter = document.querySelector(".game-footer"),
    winner = document.querySelector(".game-footer p"),
   playAgain = document.querySelector(".game-footer button");

// computer's random choise
function housePicking(param){
  random = Math.floor(Math.random() * param.length);
  housePick.appendChild(param[random]);  
};

// click on paper 
paper.addEventListener('click', () => {
  gameLayout.style.display = "none"
  theGame.style.display = "block"
  
  // create new rock paper scissors divs
  let housePaper = document.createElement("div");
  housePaper.className ="house-paper";
  
  let paperImg = document.createElement("img");
  paperImg.src = "https://rockpaperscissors-frontendmentor.netlify.app/images/icon-paper.svg";
  housePaper.appendChild(paperImg);
  yourPick.appendChild(housePaper);
 
  let houseScissors = document.createElement("div");
  houseScissors.className ="house-scissors";
  let scissorsImg = document.createElement("img");
  scissorsImg.src = "https://rockpaperscissors-frontendmentor.netlify.app/images/icon-scissors.svg";
  houseScissors.appendChild(scissorsImg);
  
  let houseRock = document.createElement("div");
  houseRock.className ="house-rock";
  let rockImg = document.createElement("img");
  rockImg.src = "https://rockpaperscissors-frontendmentor.netlify.app/images/icon-rock.svg";
  houseRock.appendChild(rockImg);
  
  let paperArr = [houseScissors,  houseRock];
  
  housePicking(paperArr);
  setTimeout(checkWinner, 4000);
});

// click on scissors 
scissors.addEventListener('click', () => {
  gameLayout.style.display = "none"
  theGame.style.display = "block"
  
  // create new rock paper scissors divs
  let housePaper = document.createElement("div");
  housePaper.className ="house-paper";
  let paperImg = document.createElement("img");
  paperImg.src = "https://rockpaperscissors-frontendmentor.netlify.app/images/icon-paper.svg";
  housePaper.appendChild(paperImg);
  
  let houseScissors = document.createElement("div");
  houseScissors.className ="house-scissors";
  let scissorsImg = document.createElement("img");
  scissorsImg.src = "https://rockpaperscissors-frontendmentor.netlify.app/images/icon-scissors.svg";
  houseScissors.appendChild(scissorsImg);
  yourPick.appendChild(houseScissors);
  
  let houseRock = document.createElement("div");
  houseRock.className ="house-rock";
  let rockImg = document.createElement("img");
  rockImg.src = "https://rockpaperscissors-frontendmentor.netlify.app/images/icon-rock.svg";
  houseRock.appendChild(rockImg);
  
  let scissorsArr = [housePaper,  houseRock];
  housePicking(scissorsArr);
  setTimeout(checkWinner, 4000);
});

// click on rock 
rock.addEventListener('click', () => {
  gameLayout.style.display = "none"
  theGame.style.display = "block"
  
  // create new rock paper scissors divs
  let housePaper = document.createElement("div");
  housePaper.className ="house-paper";
  let paperImg = document.createElement("img");
  paperImg.src = "https://rockpaperscissors-frontendmentor.netlify.app/images/icon-paper.svg";
  housePaper.appendChild(paperImg);
  
  
  let houseScissors = document.createElement("div");
  houseScissors.className ="house-scissors";
  let scissorsImg = document.createElement("img");
  scissorsImg.src = "https://rockpaperscissors-frontendmentor.netlify.app/images/icon-scissors.svg";
  houseScissors.appendChild(scissorsImg);  
  
  let houseRock = document.createElement("div");
  houseRock.className ="house-rock";
  let rockImg = document.createElement("img");
  rockImg.src = "https://rockpaperscissors-frontendmentor.netlify.app/images/icon-rock.svg";
  houseRock.appendChild(rockImg);
  yourPick.appendChild(houseRock);
  
  let rockArr = [houseScissors,  housePaper];
  
  housePicking(rockArr);
  setTimeout(checkWinner, 4000);
  console.log(yourPick.firstElementChild);
});

// check winner function 
function checkWinner(){
  if( yourPick.firstElementChild.className === 'house-paper' && housePick.firstElementChild.className === 'house-scissors'){
    gameFooter.style.display = "grid";
    winner.innerHTML = "you lose"
    i = i - 1;
    score.innerHTML = i;
  } else if( yourPick.firstElementChild.className === 'house-paper' && housePick.firstElementChild.className === 'house-rock'){
    gameFooter.style.display = "grid";
    winner.innerHTML = "you win"
    i = i + 1;
    score.innerHTML = i;
  } else if( yourPick.firstElementChild.className === 'house-scissors' && housePick.firstElementChild.className === 'house-rock'){
    gameFooter.style.display = "grid";
    winner.innerHTML = "you lose"
    i = i - 1;
    score.innerHTML = i;
} else if( yourPick.firstElementChild.className === 'house-scissors' && housePick.firstElementChild.className === 'house-paper'){
    gameFooter.style.display = "grid";
    winner.innerHTML = "you win"
    i = i + 1;
    score.innerHTML = i;   
  } else if(yourPick.firstElementChild.className === 'house-rock' && housePick.firstElementChild.className === 'house-scissors'){
    gameFooter.style.display = "grid";
    winner.innerHTML = "you win"
    i = i + 1;
    score.innerHTML = i;
  } else if(yourPick.firstElementChild.className === 'house-rock' && housePick.firstElementChild.className === 'house-paper'){
    gameFooter.style.display = "grid";
    winner.innerHTML = "you lose"
    i = i - 1;
    score.innerHTML = i;
  } 
}

// reset to play again 
playAgain.onclick = () =>{
  yourPick.removeChild(yourPick.childNodes[0]);
  housePick.removeChild(housePick.childNodes[0]);
  theGame.style.display = "";
  gameFooter.style.display = "none";
  gameLayout.style.display = "flex";
}

// the rules
rulesBtn.onclick = function() {
  theRules.style.display = "grid";
}
closeButton.onclick = function(){
  theRules.style.display = "none";
}