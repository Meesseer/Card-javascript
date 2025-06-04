const products = [
  { name: "Apple", price: 100, stock: 3 },
  { name: "Banana", price: 50, stock: 0 },
  { name: "Orange", price: 80, stock: 5 },
  { name: "Mango", price: 120, stock: 2 }
];

const cart = [];

function addToCart(product) {
  if (product.stock === 0) return;

  const cartItem = cart.find(item => item.name === product.name);
  if (cartItem) {
    if (cartItem.quantity < product.stock) {
      cartItem.quantity++;
    } else {
      return;
    }
  } else {
    cart.push({ name: product.name, quantity: 1, price: product.price });
  }
}

function getTotalCartValue() {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function getAvailableProducts() {
  return products.filter(p => p.stock > 0);
}
