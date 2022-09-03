let inputDirection = { x: 0, y: 0 };
let lastInputDirection = { x: 0, y: 0 };

const instructionsToStart = document.getElementById("instructions")

window.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'ArrowUp' :
      if ( lastInputDirection.y !== 0){
        break
      }
      inputDirection = { x:0, y:-1 }
      instructionsToStart.classList.add("hide")
      break
      case 'ArrowDown' :
        if ( lastInputDirection.y !== 0){
          break
        }
        inputDirection = { x:0, y:1 }
        instructionsToStart.classList.add("hide")
        break
        case 'ArrowLeft' :
          if ( lastInputDirection.x !== 0){
            break
          }
          inputDirection = { x:-1, y:0 }
          instructionsToStart.classList.add("hide")
          break
          case 'ArrowRight' :
            if ( lastInputDirection.x !== 0){
              break
            }
            inputDirection = { x:1, y:0 }
            instructionsToStart.classList.add("hide")
      break
  }
})

export function getInputDirection(){
  lastInputDirection = inputDirection
  return inputDirection
}
