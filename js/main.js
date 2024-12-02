// // Function to add a product to the cart
// function addToCart(productId, productName, productPrice) {
//   let cart = JSON.parse(localStorage.getItem("cart")) || [];

//   // Check if the product is already in the cart
//   const existingProduct = cart.find((product) => product.id === productId);

//   if (existingProduct) {
//     existingProduct.quantity += 1; // Increment quantity
//   } else {
//     // Add new product to cart
//     cart.push({
//       id: productId,
//       name: productName,
//       price: productPrice,
//       quantity: 1,
//     });
//   }

//   // Save the updated cart to localStorage
//   localStorage.setItem("cart", JSON.stringify(cart));

//   // Update the cart count in the header
//   updateCartCount();
// }

// // Function to update the cart count in the header
// function updateCartCount() {
//   const cart = JSON.parse(localStorage.getItem("cart")) || [];
//   const totalItems = cart.reduce((sum, product) => sum + product.quantity, 0);
//   document.getElementById("cartNum").textContent = totalItems;
// }

// // Add event listeners to "Add to Cart" buttons
// function initializeAddToCartButtons() {
//   const buttons = document.querySelectorAll(".btn.cart");

//   buttons.forEach((button) => {
//     button.addEventListener("click", function () {
//       const productId = this.dataset.id;
//       const productName = this.dataset.name;
//       const productPrice = parseFloat(this.dataset.price);

//       addToCart(productId, productName, productPrice);
//     });
//   });
// }

// // Ensure the cart count is updated when the page loads
// window.onload = function () {
//   updateCartCount(); // Ensure the cart count is correct on load
//   initializeAddToCartButtons(); // Attach event listeners to all cart buttons
// };

var header = document.getElementById("header");
var upToHome = document.getElementById("upToHome");
window.onscroll = function () {
  if (window.scrollY > 500) {
    header.classList.add("header-fixed");
    upToHome.classList.add("showBtn");
  } else {
    header.classList.remove("header-fixed");
    upToHome.classList.remove("showBtn");
  }
};
upToHome.addEventListener("click", function () {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
});
// **********************************************************************
// **********************************************************************

// إنشاء سلة التسوق
let cart = [];

// الدالة لإضافة عنصر إلى السلة
function addToCart(event) {
  const button = event.target; // الحصول على الزر الذي تم النقر عليه
  const card = button.closest(".card"); // الحصول على العنصر الأب (بطاقة العصير)

  // الحصول على معلومات العصير
  const id = button.getAttribute("data-id");
  const name = button.getAttribute("data-name");
  const price = parseFloat(button.getAttribute("data-price"));

  // إضافة العنصر إلى السلة
  const item = { id, name, price };
  cart.push(item);

  // تحديث واجهة المستخدم (UI)
  updateCartUI();
  alert(`${name} has been added to the cart!`); // إعلام المستخدم
}
// دالة لتحديث واجهة المستخدم لسلة التسوق
function updateCartUI() {
  const cartContent = document.querySelector(".cart-content .row");
  const cartNum = document.getElementById("cartNum"); // العنصر لعرض عدد العناصر
  cartContainer.innerHTML = ""; // مسح المحتوى القديم

  // إضافة العناصر الموجودة في السلة إلى واجهة المستخدم
  cart.forEach((item) => {
    const itemElement = `
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card card-content">
          <div class="img">
            <img src="img/pop_smoothie_${item.id}-720x1030.jpg" alt="${item.name}" />
          </div>
          <h2>${item.name}</h2>
          <p>Quantity: 1</p>
          <span class="price">$${item.price.toFixed(2)}</span>
          <button class="btn remove" data-id="${item.id}">Remove</button>
        </div>
      </div>
    `;
    cartContent.innerHTML += itemElement; // إضافة العنصر إلى المحتوى
  });

  // إضافة إجمالي السعر (يمكنك تخصيصه حسب الحاجة)
  const total = cart.reduce((acc, item) => acc + item.price, 0);
  const totalElement = `
    <div class="col-12 mt-5 total-price">
      <p>Total: $${total.toFixed(2)}</p>
    </div>
  `;
  cartContainer.innerHTML += totalElement; // إضافة إجمالي السعر

  // تحديث عدد العناصر في السلة
  cartNum.textContent = cart.length; // تحديث عدد العناصر
}

// إضافة مستمعين للأزرار "Add to Cart"
const addToCartButtons = document.querySelectorAll(".btn.cart");
addToCartButtons.forEach((button) => {
  button.addEventListener("click", addToCart);
});
