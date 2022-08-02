import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection  } from './snake.js'
import { update as updateFood, draw as drawfood } from './food.js'
import { outsideGrid } from './grid.js'


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
  if (secondSinceLastRender < 1/SNAKE_SPEED) {
    return
  }
  // console.log('Render');
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
  // gameOver = outsideGrid(getSnakeHead())
  gameOver = snakeIntersection() || outsideGrid(getSnakeHead())
}
