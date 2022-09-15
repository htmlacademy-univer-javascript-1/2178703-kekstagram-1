const getRandomInt = (leftBorder, rightBorder) => {

  const leftSide = Math.min(leftBorder, rightBorder);
  const rightSide = Math.max(leftBorder, rightBorder);

  return Math.floor(Math.random() * (rightSide + 1 - leftSide)) + leftSide;
};

getRandomInt(0, 50);

const checkLengthOfComment = (comment, maxLength) => String(comment).length <= maxLength;

checkLengthOfComment('GitHub просит вызвать функции', 140);
