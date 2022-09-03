export let speedOfSnake = 5;
export let expansionRate = 1;
const speedRate = document.getElementById('speed');
const growingRate = document.getElementById('growing');

// Update GROWING of Snake
function updateExpansionRate(newGrowth){
  return expansionRate = newGrowth
};

growingRate.addEventListener('change', (event) =>{
  const newGrowth = event.target.value
  updateExpansionRate(newGrowth)
} );


// Update SPEED of Snake
function updateSpeedRate(newSpeed){
  return speedOfSnake = newSpeed;
};

speedRate.addEventListener('change', (event) =>{
  let newSpeed = event.target.value
  updateSpeedRate(newSpeed);

} );
