const refs = {
    categories: document.getElementById('categories'),
    items: document.querySelectorAll('#categories .item'),
};

const categoriesItem = refs.categories.children;
console.log('Number of categories:', categoriesItem.length);

refs.items.forEach(li => {
    li.querySelectorAll('h2')
    .forEach(categori => console.log(`Category: ${categori.textContent}`)),
    console.log(`Elements: ${li.querySelectorAll('li').length}`)
});






