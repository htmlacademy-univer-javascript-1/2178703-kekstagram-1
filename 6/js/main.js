const getRandomInt = function (leftBorder, rightBorder) {
  if(leftBorder > rightBorder){
    throw new Error('Левая граница больше правой');
  }

  return Math.floor(Math.random() * (rightBorder + 1 - leftBorder)) + leftBorder;
};

getRandomInt(0, 50);

const checkLengthOfComment = (comment, maxLength) => String(comment).length <= maxLength;

checkLengthOfComment('GitHub просит вызвать функции', 140);
