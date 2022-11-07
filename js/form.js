import { isEscapeKey, checkStringLength } from './utils.js';
import { MAX_STRING_LENGTH, MAX_HASHTAG_COUNT, MAX_HASHTAG_LENGTH } from './consts.js';

const body = document.querySelector('body');
const imgUploadField = document.querySelector('#upload-file');
const editImg = document.querySelector('.img-upload__overlay');
const form = document.querySelector('.img-upload__form');
const closeButton = form.querySelector('.img-upload__cancel');
const hashtagsField = form.querySelector('.text__hashtags');
const commentsField = form.querySelector('.text__description');


const pristine = new Pristine(form, {
  classTo: 'text',
  errorClass: 'text--invalid',
  successClass: 'text-valid',
  errorTextParent: 'text',
  errorTextTag: 'div',
  errorTextClass: 'text__error'
});

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    editImg.classList.add('hidden');
    body.classList.remove('modal-open');
    document.removeEventListener('keydown', onPopupEscKeydown);
    form.reset();
  }
};

const closeUploadPopup  = () => {
  editImg.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
  document.removeEventListener('click', closeUploadPopup);
  form.reset();
};

const addFieldListeners = (field) => {
  field.addEventListener('focus', () => {
    document.removeEventListener('keydown', onPopupEscKeydown);
  });
  field.addEventListener('blur', () => {
    document.addEventListener('keydown', onPopupEscKeydown);
  });
};

const showUploadPopup = () => {
  editImg.classList.remove('hidden');
  body.classList.add('modal-open');
  closeButton.addEventListener('click', closeUploadPopup);
  document.addEventListener('keydown',onPopupEscKeydown);
  addFieldListeners(commentsField);
  addFieldListeners(hashtagsField);
};

const getUniqueHashtags = (hashtags) => {
  const uniqueSet = new Set(hashtags);
  return hashtags.length === uniqueSet.size;
};

let errorMessage = '';

const error = () => errorMessage;

const hashtagsHandler = (string) => {
  errorMessage = '';

  const inputText = string.toLowerCase().trim();

  if(!inputText) {
    return true;
  }

  const inputHashtags = inputText.split(/\s+/);

  if(inputHashtags.length === 0) {
    return true;
  }

  const rules = [
    {
      check: inputHashtags.some((item) => item.indexOf('#', 1) >= 1),
      error: 'Хэш-теги должны разделяться пробелами',
    },

    {
      check: inputHashtags.length > MAX_HASHTAG_COUNT,
      error: `Нельзя указать больше ${MAX_HASHTAG_COUNT} хэш-тегов`,
    },

    {
      check: inputHashtags.some((item) => item[0] !== '#'),
      error: 'Хэш-тег должен начинаться с символа #',
    },

    {
      check: inputHashtags.some((item) => item.length > MAX_HASHTAG_LENGTH),
      error: `Максимальная длина одного хэш-тега ${MAX_HASHTAG_LENGTH} символов, включая #`,
    },

    {
      check: inputHashtags.some((item) => !/^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/.test(item)),
      error: 'Хэш-тег должен содержать только буквы и цифры',
    },

    {
      check: !getUniqueHashtags(inputHashtags),
      error: 'Хэш-теги не должны повторяться',
    },
  ];

  return rules.every((rule) => {
    const isInvalid = rule.check;
    if(isInvalid) {
      errorMessage = rule.error;
    }
    return !isInvalid;
  });
};

const commentHandler = (string) => {
  errorMessage = '';

  const inputText = string.trim();

  if(!inputText) {
    return true;
  }

  const rule = {
    check: !checkStringLength(inputText, MAX_STRING_LENGTH),
    error: `Максимальная длина комментария ${MAX_STRING_LENGTH} символов`,
  };


  const isInvalid = rule.check;
  if(isInvalid) {
    errorMessage = rule.error;
  }
  return !isInvalid;
};

const validateForm = () => {
  pristine.addValidator(hashtagsField, hashtagsHandler, error);
  pristine.addValidator(commentsField, commentHandler, error);
};


const renderUploadForm = () => {
  imgUploadField.addEventListener('change', showUploadPopup);
  validateForm();
  form.addEventListener('submit', (evt) => {
    if (!pristine.validate()) {
      evt.preventDefault();
    }
  });
};

export {renderUploadForm};
