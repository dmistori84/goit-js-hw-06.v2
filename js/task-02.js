const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.getElementById('ingredients');

const creatLi = ingredients.map(elem => {
  const item = document.createElement('li');
  item.textContent = elem;
  item.classList.add('item');
  return item;
});

ingredientsList.append(...creatLi);



