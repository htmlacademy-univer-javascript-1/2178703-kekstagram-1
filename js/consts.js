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
const COUNT_COMMENT = 25;
const MAX_STRING_LENGTH = 140;
const MAX_HASHTAG_COUNT = 5;
const MAX_HASHTAG_LENGTH = 20;
const SHOWN_COMMENT_COUNT = 5;

const ErrorMessage = {
  SEPARETED_BY_SPASES: 'Хэш-теги должны разделяться пробелами',
  START_WITH: 'Хэш-тег должен начинаться с символа #',
  NO_REPEAT: 'Хэш-теги не должны повторяться',
  HASHTAG_MAX_LENTH: `Максимальная длина одного хэш-тега ${MAX_HASHTAG_LENGTH} символов, включая #`,
  MAX_COUNT_HASHTAG: `Нельзя указать больше ${MAX_HASHTAG_COUNT} хэш-тегов`,
  UNACCEPTABLE_SYMBOLS: 'Хэш-тег содержит недопустимые символы',
  COMMENT_MAX_LENGTH: `Максимальная длина комментария ${MAX_STRING_LENGTH} символов`
};

const CountLike = {
  MIN: 15,
  MAX: 200
};

const NumberAvatar = {
  MIN: 1,
  MAX: 6
};

export { NAMES, MESSAGES, DESCRIPTIONS, COUNT_PHOTO, COUNT_COMMENT, CountLike, NumberAvatar,
  MAX_STRING_LENGTH, MAX_HASHTAG_COUNT, MAX_HASHTAG_LENGTH, ErrorMessage, SHOWN_COMMENT_COUNT };
