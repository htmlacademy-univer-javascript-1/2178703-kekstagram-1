const getRandomInt = (leftBorder, rightBorder) => {

  const leftSide = Math.min(leftBorder, rightBorder);
  const rightSide = Math.max(leftBorder, rightBorder);

  return Math.floor(Math.random() * (rightSide + 1 - leftSide)) + leftSide;
};

console.log(getRandomInt(4, 6));

const checkLengthOfComment = (comment, maxLength) => String(comment).length <= maxLength;


