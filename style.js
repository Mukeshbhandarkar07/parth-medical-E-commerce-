
function searchProducts() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const items = document.querySelectorAll('.a2');
  const noResult = document.getElementById('noResult');
  
  let matchFound = false;

  items.forEach(item => {
    const name = item.querySelector('.Medicine-Name').textContent.toLowerCase();
    const price = item.querySelector('.Price').textContent.toLowerCase();

    if (name.includes(input) || price.includes(input)) {
      item.style.display = 'flex';
      matchFound = true;
    } else {
      item.style.display = 'none';
    }
  });

  noResult.style.display = matchFound ? 'none' : 'block';
}


// ----------------- CART FEATURE -----------------
let cart = JSON.parse(localStorage.getItem("cart")) || [];

document.querySelectorAll('.a2 button').forEach(button => {
  button.addEventListener('click', function () {
    const parent = this.closest('.a2');
    const name = parent.querySelector('.Medicine-Name').textContent;
    const priceText = parent.querySelector('.Price').textContent.replace('/-', '').trim();
    const price = parseFloat(priceText);

    if (this.textContent === "Buy Now") {
      // Change to quantity selector + Add to Cart
      this.outerHTML = `
        <div class="cart-controls">
          <input type="number" min="1" value="1" class="qty-input" style="width:60px; margin-right:5px;">
          <button class="btn btn-danger add-to-cart-btn">Add to Cart</button>
        </div>
      `;

      parent.querySelector('.add-to-cart-btn').addEventListener('click', function () {
        const qty = parseInt(parent.querySelector('.qty-input').value);
        const total = price * qty;

        cart.push({ name, price, qty });
        localStorage.setItem("cart", JSON.stringify(cart));

        alert(`${qty} × ${name} @ ₹${price} each\nTotal: ₹${total}`);
      });
    }
  });
});
