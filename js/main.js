const NAMES = ['Александр', 'Кристина', 'Анна', 'Дмитрий', 'Дарья', 'Елизавета', 'Максим'];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTIONS = [
  'Мои выходные',
  'Отдыхаю с друзьями',
  'Это был лучший день в моей жизни!',
  'Сегодня радую вас красивой фотографией',
  'Настроение пообщаться в комментариях',
  'Жду ваших лайков :)'
];

const COUNT_PHOTO = 25;
const COUNT_COMMENT = 8;

const CountLike = {
  MIN: 15,
  MAX: 200
};

const getRandomPositiveInteger = (a, b) => {

  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const checkStringLength = (string, maxLength) => string.length <= maxLength;

const createComment = (id) => ({
  id,
  avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
  message: MESSAGES[getRandomPositiveInteger(0, MESSAGES.length - 1)],
  name: NAMES[getRandomPositiveInteger(0, NAMES.length - 1)]
});

const createPhotoData = (id) => ({
  id,
  url: `photos/${id}.jpg`,
  description: DESCRIPTIONS[getRandomPositiveInteger(0, DESCRIPTIONS.length - 1)],
  likes: getRandomPositiveInteger(CountLike.MIN, CountLike.MAX),
  comments: Array.from({length: getRandomPositiveInteger(1, COUNT_COMMENT)}).map((value, index) => createComment(index + 1))
});

const createPhotoArray = (lengthArray) => Array.from({length: lengthArray}).map((value, index) => createPhotoData(index + 1));

const photos = createPhotoArray(COUNT_PHOTO);

checkStringLength('Вызов функции', 140);
photos();

