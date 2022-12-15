import { imgPreview } from './form.js';

const scaleValue = document.querySelector('.scale__control--value');
const scaleContainer = document.querySelector('.img-upload__scale');

const PercentScale = {
  STEP: 25,
  MIN: 25,
  MAX: 100
};

const onScaleButtonClick = (evt) => {
  const scaleInput = Number.parseInt(scaleValue.value, 10);
  let scaleCount = PercentScale.MAX;
  const buttonScale = evt.target;

  if (buttonScale.tagName !== 'BUTTON') {
    return;
  }

  if (buttonScale.classList.contains('scale__control--bigger')) {
    scaleCount =  Math.min(scaleInput + PercentScale.STEP, PercentScale.MAX);
    scaleValue.value = `${scaleCount}%`;
  }

  else {
    scaleCount = Math.max(scaleInput - PercentScale.STEP, PercentScale.MIN);
    scaleValue.value = `${scaleCount}%`;
  }

  imgPreview.style.transform = `scale(${scaleCount / 100})`;
};

export { onScaleButtonClick, scaleContainer };
