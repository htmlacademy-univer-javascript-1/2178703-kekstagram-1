import { imgPreview } from './form.js';

const scaleValue = document.querySelector('.scale__control--value');
const scaleContainer = document.querySelector('.img-upload__scale');

const PercentageScale = {
  STEP: 25,
  MIN: 25,
  MAX: 100
};

const onScaleButtonClick = (evt) => {
  const scaleInput = Number.parseInt(scaleValue.value, 10);
  let scaleCount = PercentageScale.MAX;
  const buttonScale = evt.target;

  if (buttonScale.matches('.scale__control--value')) {
    return;
  }

  if (buttonScale.matches('.scale__control--bigger')) {
    scaleCount =  scaleInput + PercentageScale.STEP;
    scaleValue.value = `${scaleCount}%`;
  }

  if (buttonScale.matches('.scale__control--smaller')) {
    scaleCount = scaleInput - PercentageScale.STEP;
    scaleValue.value = `${scaleCount}%`;
  }

  if (scaleCount >= PercentageScale.MAX) {
    scaleCount = PercentageScale.MAX;
    scaleValue.value = `${scaleCount}%`;
  }

  if (scaleCount <= PercentageScale.MIN) {
    scaleCount = PercentageScale.MIN;
    scaleValue.value = `${scaleCount}%`;
  }
  imgPreview.style.transform = `scale(${scaleCount / 100})`;
};

export { onScaleButtonClick, scaleContainer }
