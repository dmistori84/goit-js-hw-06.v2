function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bntChangeColor = document.querySelector('[type="button"]');
const spanColor = document.querySelector('span');

console.log(spanColor);
bntChangeColor.addEventListener('click', onChangeColor);

function onChangeColor() {
  document.body.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = getRandomHexColor();
};