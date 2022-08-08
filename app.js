import { update as updateSnake, draw as drawSnake, getSnakeHead, snakeIntersection  } from './snake.js'
import { update as updateFood, draw as drawfood } from './food.js'
import { outsideGrid } from './grid.js'
import { speedOfSnake as speed } from './settings.js'


let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById("game-board");


function main(currentTime){
  if (gameOver) {
    if (confirm('you lost. press ok to re-start')){
      window.location = '/'
   }
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
};

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
