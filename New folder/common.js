
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartDisplay() {
  document.getElementById('cart-count')?.textContent = cart.length;
  const list = document.getElementById('cartItems');
  const total = document.getElementById('cartTotal');
  if (list) list.innerHTML = '';
  let cost = 0;
  cart.forEach((item, index) => {
    cost += item.total;
    if (list) {
      const li = document.createElement('li');
      li.textContent = `${item.name} - ₹${item.total}`;
      list.appendChild(li);
    }
  });
  if (total) total.textContent = cost;
  localStorage.setItem('cart', JSON.stringify(cart));
}

function addVenue(name, perGuestCost, guestInputId) {
  const guests = parseInt(document.getElementById(guestInputId).value);
  const total = guests * perGuestCost;
  cart.push({ name, total });
  updateCartDisplay();
}

window.onload = updateCartDisplay;
