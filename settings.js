// Update GROWING of Snake

const growingRate = document.getElementById('growing');

export let expansionRate = 1;

function updateExpansionRate(newGrowth){
  return expansionRate = newGrowth
};

growingRate.addEventListener('change', (event) =>{
  const newGrowth = event.target.value
  updateExpansionRate(newGrowth)
} );


// Update SPEED of Snake

const speedRate = document.getElementById('speed');

export let speedOfSnake = 5;

function updateSpeedRate(newSpeed){
  return speedOfSnake = newSpeed;
};

speedRate.addEventListener('change', (event) =>{
  let newSpeed = event.target.value
  updateSpeedRate(newSpeed);

} );
