let getRandomInt = function(leftBorder, rightBorder) {

  if(leftBorder > rightBorder){
    throw new Error('Левая граница больше правой');
  }

  return Math.floor(Math.random() * (rightBorder + 1 - leftBorder)) + leftBorder;
}

let checkLengthOfComment = (comment, maxLength) => String(comment).length <= maxLength;



