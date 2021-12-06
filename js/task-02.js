const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.getElementById('ingredients');

ingredients.map(elem => {
  const item = document.createElement('li');
  item.textContent = elem;
  item.classList.add('item');
  ingredientsList.append(item);
});



