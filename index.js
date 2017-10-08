// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
  if (blocks > 42){
    return blocks - 42;
  }
  else if (blocks < 42){
    return 42 - blocks;
  }
}

function distanceFromHqInFeet (blocks) {
  return distanceFromHqInBlocks(blocks) * 264;
}

function distanceTravelledInFeet(startingBlock, endingBlock) {
  if (startingBlock < endingBlock) {
    return (endingBlock - startingBlock) * 264;
  } else {
    return (startingBlock - endingBlock) * 264;
  }
}

// function calculatesFarePrice(startingBlock, endingBlock) {
//   const x = distanceTravelledInFeet(startingBlock, endingBlock);
//   if (x <= 400){
//     return 0;
//   }
//   else if (x > 400 && x <= 2000) {
//     return x * .02;
//   }
//   else if (x > 2000 && < 2500) {
//     return 25;
//   }
//   else {
//     return 'cannot travel that far';
//   }
// }
function calculatesFarePrice (start, end) {
  const x = distanceTravelledInFeet(start, end);

  if (x <= 400) {
    return 0;
  } else if (x > 400 && x <= 2000) {
    return .02 * x;
  } else if (x > 2000 && x < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
