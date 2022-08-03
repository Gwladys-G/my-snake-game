const growingRate = document.getElementById('growing');

export let expansionRate = 1;

function updateExpansionRate(newGrowth){
  return expansionRate = newGrowth
};

growingRate.addEventListener('change', (event) =>{
  const newGrowth = event.target.value
  updateExpansionRate(newGrowth)
} );
