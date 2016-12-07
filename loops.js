//why doesnt this pass?
//Is it because its an array i have do do array stufffffffff???
/*
function forLoop(array){
  for(let i = 1;i < 25; i++){
    if(i === 1){
      console.log("I am 1 strange loop.")
    } else {
      console.log(`I am  ${i} strange loops`)
    }

  }
}*/
//THIS WAS MOST DIFFICULT>
function forLoop(array){
  for(let i = 0;i < 25; i++){
    if(i === 1){
      array.push("I am 1 strange loop.") //Jesus christ its cuz it was array and tried to ignore DIRECTIONS
    } else {
      array.push(`I am ${i} strange loops.`) // interpol thing only here
    } //It turns our loop into an array?? ugh jesus christ.

  }
  return array;
}

function whileLoop(number) {
  while(number > 0) {
    console.log(--number)

  }
    return 'done';
}

//Meh Ill redo this later hopefully.
function doWhileLoop(array) {
  function maybeTrue(){
    return Math.random() >= 0.5
  }
  do{
    array = array.slice(1);

  } while (array.length > 0 && maybeTrue());
  return array;
}
