import { setLocalStorage } from './utils.mjs';
import ProductData from './ProductData.mjs';

const dataSource = new ProductData('tents');

function addProductToCart(product) {
  const storedCardItems = localStorage.getItem('so-cart');
  let cartItems = JSON.parse(storedCardItems);

  if (cartItems === null) {
    const objString = '[' + JSON.stringify(product) + ']';
    localStorage.setItem('so-cart', objString);
  } else {
    cartItems.push(product);
    localStorage.setItem('so-cart', JSON.stringify(cartItems));
  }


}
// add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById('addToCart')
  .addEventListener('click', addToCartHandler);
