import { expandSnake, onSnake } from './snake.js'
import { randomGridPosition } from './grid.js'
import { expansionRate as expansionRate} from './settings.js'

let food = getRandomFoodPosition()
// const EXPANSION_RATE =


export function update(){
  if(onSnake(food)){
    expandSnake(expansionRate);
    food = getRandomFoodPosition()
  }
};

export function draw(gameBoard){

  const foodElement = document.createElement('div')
  foodElement.style.gridRowStart = food.y
  foodElement.style.gridColumnStart = food.x
  foodElement.classList.add('food');
  gameBoard.appendChild(foodElement);


};

export function getRandomFoodPosition(){
  let newFoodPosition
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
      newFoodPosition = randomGridPosition()
    }
  return newFoodPosition
}
