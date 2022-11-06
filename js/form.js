import { isEscapeKey, checkStringLength } from './utils.js';
import { MAX_STRING_LENGTH, MAX_COUNT_HASHTAGS } from './consts.js';

const imgUploadField = document.querySelector('#upload-file');
const editImg = document.querySelector('.img-upload__overlay');
const form = document.querySelector('.img-upload__form');
const closeButton = document.querySelector('.img-upload__cancel');
const hashtagsField = document.querySelector('.text__hashtags');
const commentsField = document.querySelector('.text__description');
const regex = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    editImg.classList.add('hidden');
    document.body.classList.remove('modal-open');
    document.removeEventListener('keydown', onPopupEscKeydown);
    document.removeEventListener('click', closeUploadPopup);
    form.reset();
  }
};

const closeUploadPopup  = () => {
  editImg.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
  document.removeEventListener('click', closeUploadPopup);
  form.reset();
}

const onFocusBlurEscKeydown = (field) => {
  field.addEventListener('focus', () => {
    document.removeEventListener('keydown', onPopupEscKeydown);
  });
  field.addEventListener('blur', () => {
    document.addEventListener('keydown', onPopupEscKeydown);
  });
};

const showUploadPopup = () => {
  editImg.classList.remove('hidden');
  document.body.classList.add('modal-open');
  closeButton.addEventListener('click', closeUploadPopup);
  document.addEventListener('keydown',onPopupEscKeydown);
  onFocusBlurEscKeydown(commentsField);
  onFocusBlurEscKeydown(hashtagsField);
};

const validateCommentLength = (value) => checkStringLength(value,  MAX_STRING_LENGTH);

const getHashtags = (string) => string.split(' ').filter((item) => item !== '');

const getUniqueHashtags = (string) => {
  const hashtags = getHashtags(string);
  const uniqueSet = new Set(hashtags);
  return hashtags.length === uniqueSet.size;
};

const checkQuantity = (string) => getHashtags(string).length <= MAX_COUNT_HASHTAGS;

const getHashtagsToLowerCase = (string) => {
  const hashtags = getHashtags(string);
  return hashtags.map((element) => element.toLowerCase());
};

const checkHashtagsSymbols = (string) => {
  const hashtags = getHashtags(string);
  return hashtags.every((element) => regex.test(element));
};

const validateForm = () => {
  const pristine = new Pristine(form, {
    classTo: 'text',
    errorClass: 'text--invalid',
    successClass: 'text-valid',
    errorTextParent: 'text',
    errorTextTag: 'div',
    errorTextClass: 'text__error'
  });

  pristine.addValidator(commentsField, validateCommentLength, `Не более ${MAX_STRING_LENGTH} символов`);
  pristine.addValidator(hashtagsField, getUniqueHashtags, 'Хэштеги не могут повторяться');
  pristine.addValidator(hashtagsField, checkQuantity, `Не более ${MAX_COUNT_HASHTAGS} хэштегов`);
  pristine.addValidator(hashtagsField, getHashtagsToLowerCase, '');
  pristine.addValidator(hashtagsField, checkHashtagsSymbols, 'Хэштег должен начинатьтся с #, содержать только буквы и цифры, не более 20 символов');
  form.addEventListener('submit', (evt) => {
    if (!pristine.validate()) {
      evt.preventDefault();
    }
  });
};

const renderUploadForm = () => {
  imgUploadField.addEventListener('change', showUploadPopup);
  validateForm();
};

export {renderUploadForm};
