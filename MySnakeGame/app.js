import { update as updateSnake, draw as drawSnake, getSnakeHead, snakeIntersection  } from './snake.js'
import { update as updateFood, draw as drawfood , numberOfApples} from './food.js'
import { outsideGrid } from './grid.js'
import { speedOfSnake as speed } from './settings.js'


let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById("game-board");
const lostRestart = document.getElementById("lost")
const lostText = document.getElementById("lostText")
const restartButton = document.getElementById("restartButton")



function main(currentTime){
  if (gameOver) {
    showMessage();
   return
  }


  window.requestAnimationFrame(main);
  let secondSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondSinceLastRender < (1/speed)) {
    return
  }

  lastRenderTime = currentTime;
  update()
  draw()

}

window.requestAnimationFrame(main)

export function update(){
  updateSnake();
  updateFood();
  checkDeath()
};

export function draw(){
  gameBoard.innerHTML = '';
  drawSnake(gameBoard);
  drawfood(gameBoard);
};


function checkDeath(){
  gameOver = snakeIntersection() || outsideGrid(getSnakeHead())
}

function showMessage(){
  document.getElementById('score').classList.add("hide")
  lostRestart.classList.remove("hide")
  createText()
  restartButton.addEventListener('click', reset)
}

function createText(){
  lostText.innerText = `You have lost after eating ${numberOfApples} 🍎 `
}

function reset(){
  lostRestart.classList.add("hide")
  document.getElementById('score').classList.remove("hide")
  window.location = '/'
}
