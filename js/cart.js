// const allProductImages = {
//   1: "img/pop_smoothie_01-720x1030.jpg",//Green Waterfall
//   2: "img/pop_smoothie_02-720x1030.jpg",//Watermelon Cooler
//   3: "img/pop_smoothie_03-720x1030.jpg",//Violet Banana
//   4: "img/pop_smoothie_04-720x1030.jpg",//Pineapple Splash
//   5: "img/08_smoothie-411x550.jpg",//Strawberry Paradise
//   6: "img/05_smoothie-411x550.jpg", //Ice Raspberry
//   7: "img/09_smoothie-411x550.jpg",
//   8: "img/07_smoothie-411x550.jpg", //Raspberry Honey
//   9: "img/01_fruits-280x355.jpg",//orange fruit
//   10: "img/dish_01-1-550x550.jpg", //Salad with Mozarella
//   11: "img/dish_02-1-550x550.jpg", //Eggs with Bacon and Salad
//   12: "img/dish_03-1.jpg", //Salmon with Vegetables
//   13: "img/dish_04-1-550x550.jpg", //Red beetroot soup
//   14: "img/dish_06-1-550x550.jpg", //Tender rabbit soup
//   15: "img/dish_07-1-550x550.jpg", //Chicken with Vegetables
//   16: "img/dish_08-1-550x550.jpg", //Grilled Chicken Breast
//   17: "img/01_smoothie-411x550.jpg", //Strawberry Summer
//   18: "img/02_smoothie-411x550.jpg",//Sweet Mango
//   19: "img/03_smoothie-411x550.jpg", //Fresh Strawberry
//   20: "img/04_smoothie-411x550.jpg",//Pink Peach
//   21: "img/01_menu_slimming-550x373.jpg", //Balanced Menu
//   22: "img/02_menu_muscle-550x373.jpg", //Slimming Menu
//   23: "img/img/03_menu_balanced-550x373.jpg", //Muscle Gain Menu
//   24: "img/04_menu_vegans-550x373.jpg", //Office Menu
//   25: "img/06_smoothie-411x550.jpg", //Banana Ice
//   26: "img/dish_05-1-550x550.jpg", //Steaks with Asparagus
// };

// // Function to get the image source based on product ID
// function getImageSource(productId) {
//   const smoothieImages = [1, 2, 3, 4]; // IDs of Pop Smoothie images
//   const dishImages = [10, 11, 12, 13, 14, 15, 16]; // IDs of dish images

//   if (smoothieImages.includes(productId)) {
//     return `img/pop_smoothie_0${productId}-720x1030.jpg`;
//   } else if (dishImages.includes(productId)) {
//     return `img/dish_0${productId - 9}-1-550x550.jpg`;
//   } else if (allProductImages[productId]) {
//     return allProductImages[productId];
//   } else {
//     console.error(`Image not found for product ID: ${productId}`);
//     return "img/default-image.jpg"; // Return a default image if not found
//   }
// }

// // Function to display the cart items
// function displayCartItems() {
//   const cart = JSON.parse(localStorage.getItem("cart")) || [];
//   const cartContent = document.querySelector(".cart-content .row");

//   if (cart.length === 0) {
//     cartContent.innerHTML =
//       `<div class="col-12"><p>Your cart is currently empty.</p></div>`;
//     return;
//   }

//   let cartHtml = "";
//   let total = 0;

//   cart.forEach((product) => {
//     total += product.price * product.quantity;
//     const imgSrc = getImageSource(product.id); // Get the image source using the function

//     cartHtml += `
//       <div class="col-lg-4 col-md-6">
//         <div class="card card-content">
//           <div class="img">
//             <img src="${imgSrc}" alt="${product.name}" />
//           </div>
//           <h2>${product.name}</h2>
//           <p>Quantity: ${product.quantity}</p>
//           <span class="price">$${product.price}</span>
//           <button class="btn remove" data-id="${product.id}">Remove</button>
//         </div>
//       </div>
//     `;
//   });

//   // Append the total outside the loop
//   cartHtml += `
//     <div class="col-12 mt-5 total-price">
//       <p>Total: $${total.toFixed(2)}</p>
//     </div>
//   `;

//   cartContent.innerHTML = cartHtml;

//   // Attach event listeners to the remove buttons
//   initializeRemoveButtons();
// }

// // Function to reduce the quantity of items in the cart
// function removeFromCart(productId) {
//   let cart = JSON.parse(localStorage.getItem("cart")) || [];

//   const productIndex = cart.findIndex((product) => product.id === productId);

//   if (productIndex !== -1) {
//     // If the quantity is more than 1, reduce it
//     if (cart[productIndex].quantity > 1) {
//       cart[productIndex].quantity -= 1;
//     } else {
//       // If the quantity is 1, remove the product from the cart
//       cart.splice(productIndex, 1);
//     }
//   }

//   localStorage.setItem("cart", JSON.stringify(cart));
//   displayCartItems(); // Refresh the cart display
//   updateCartCount(); // Update cart count in the header
// }
// // Initialize the remove buttons
// function initializeRemoveButtons() {
//   const cartContent = document.querySelector(".cart-content");

//   // Use event delegation for dynamically generated elements
//   cartContent.addEventListener("click", function (event) {
//     if (event.target.classList.contains("remove")) {
//       const productId = parseInt(event.target.dataset.id);
//       removeFromCart(productId);
//     }
//   });
// }

// // Function to add product to cart
// function addToCart(productId, productName, productPrice) {
//   // Basic validation to ensure all product details are valid
//   if (!productId || !productName || isNaN(productPrice)) {
//     console.error("Invalid product details provided.");
//     return;
//   }

//   let cart = JSON.parse(localStorage.getItem("cart")) || [];

//   // Check if the product already exists in the cart
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

//   // Store the updated cart in localStorage
//   localStorage.setItem("cart", JSON.stringify(cart));

//   // Update the cart count in the header
//   updateCartCount();
// }

// // Function to update the cart count in the header
// function updateCartCount() {
//   const cart = JSON.parse(localStorage.getItem("cart")) || [];
//   const totalItems = cart.reduce((sum, product) => sum + product.quantity, 0);
//   const cartNumElem = document.getElementById("cartNum");

//   cartNumElem.textContent = totalItems;

//   // Add and remove animation class
//   cartNumElem.classList.add("update");
//   setTimeout(() => {
//     cartNumElem.classList.remove("update");
//   }, 300); // Duration of the animation
// }

// // Ensure the cart count is updated when the page loads
// window.onload = function () {
//   updateCartCount();
//   displayCartItems(); // Display cart items if on the cart page
// };

// // Example of event listener for "Add to Cart" button
// document.querySelectorAll(".cart").forEach((button) => {
//   button.addEventListener("click", function () {
//     const productId = parseInt(this.dataset.id); // Convert productId to an integer
//     const productName = this.dataset.name;
//     const productPrice = parseFloat(this.dataset.price);

//     addToCart(productId, productName, productPrice);
//   });
// });

// // ******************************************************
// // Scroll effect for header and "scroll to top" button
// var header = document.getElementById("header");
// var upToHome = document.getElementById("upToHome");
// window.onscroll = function () {
//   if (window.scrollY > 500) {
//     header.classList.add("header-fixed");
//     upToHome.classList.add("showBtn");
//   } else {
//     header.classList.remove("header-fixed");
//     upToHome.classList.remove("showBtn");
//   }
// };
// upToHome.addEventListener("click", function () {
//   window.scroll({
//     top: 0,
//     behavior: "smooth",
//   });
// });

// CSS Animation for cart count update (add this to your CSS file)
/*
@keyframes bounce {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}

#cartNum {
  transition: transform 0.3s ease;
}

#cartNum.update {
  animation: bounce 0.3s;
}
*/

// *******************************************************
// const allProductImages = {
//   1: "img/pop_smoothie_01-720x1030.jpg", //Green Waterfall
//   2: "img/pop_smoothie_02-720x1030.jpg", //Watermelon Cooler
//   3: "img/pop_smoothie_03-720x1030.jpg", //Violet Banana
//   4: "img/pop_smoothie_04-720x1030.jpg", //Pineapple Splash
//   5: "img/08_smoothie-411x550.jpg", //Strawberry Paradise
//   6: "img/05_smoothie-411x550.jpg", //Ice Raspberry
//   7: "img/09_smoothie-411x550.jpg",
//   8: "img/07_smoothie-411x550.jpg", //Raspberry Honey
//   9: "img/01_fruits-280x355.jpg", //orange fruit
//   10: "img/dish_01-1-550x550.jpg", //Salad with Mozarella
//   11: "img/dish_02-1-550x550.jpg", //Eggs with Bacon and Salad
//   12: "img/dish_03-1.jpg", //Salmon with Vegetables
//   13: "img/dish_04-1-550x550.jpg", //Red beetroot soup
//   14: "img/dish_06-1-550x550.jpg", //Tender rabbit soup
//   15: "img/dish_07-1-550x550.jpg", //Chicken with Vegetables
//   16: "img/dish_08-1-550x550.jpg", //Grilled Chicken Breast
//   17: "img/01_smoothie-411x550.jpg", //Strawberry Summer
//   18: "img/02_smoothie-411x550.jpg", //Sweet Mango
//   19: "img/03_smoothie-411x550.jpg", //Fresh Strawberry
//   20: "img/04_smoothie-411x550.jpg", //Pink Peach
//   21: "img/01_menu_slimming-550x373.jpg", //Balanced Menu
//   22: "img/02_menu_muscle-550x373.jpg", //Slimming Menu
//   23: "img/img/03_menu_balanced-550x373.jpg", //Muscle Gain Menu
//   24: "img/04_menu_vegans-550x373.jpg", //Office Menu
//   25: "img/06_smoothie-411x550.jpg", //Banana Ice
//   26: "img/dish_05-1-550x550.jpg", //Steaks with Asparagus
// };

// // دالة للحصول على رابط الصورة بناءً على ID المنتج
// function getImageSource(productId) {
//   if (allProductImages[productId]) {
//     return allProductImages[productId];
//   } else {
//     console.error(`Image not found for product ID: ${productId}`);
//     return "img/default-image.jpg"; // صورة افتراضية إذا لم تكن الصورة موجودة
//   }
// }

// // دالة لعرض العناصر في العربة
// function displayCartItems() {
//   const cart = JSON.parse(localStorage.getItem("cart")) || [];
//   const cartContent = document.querySelector(".cart-content .row");
//   if (cart.length === 0) {
//     cartContent.innerHTML = `<div class="col-12"><p>Your cart is currently empty.</p></div>`;
//     return;
//   }

//   let cartHtml = "";
//   let total = 0;

//   cart.forEach((product) => {
//     total += product.price * product.quantity;
//     const imgSrc = getImageSource(product.id);

//     cartHtml += `
//       <div class="col-lg-4 col-md-6">
//         <div class="card card-content">
//           <div class="img">
//             <img src="${imgSrc}" alt="${product.name}" />
//           </div>
//           <h2>${product.name}</h2>
//           <p>Quantity: ${product.quantity}</p>
//           <span class="price">$${product.price}</span>
//           <button class="btn remove" data-id="${product.id}">Remove</button>
//         </div>
//       </div>
//     `;
//   });

//   cartHtml += `
//     <div class="col-12 mt-5 total-price">
//       <p>Total: $${total.toFixed(2)}</p>
//     </div>
//   `;

//   cartContent.innerHTML = cartHtml;
//   initializeRemoveButtons();
// }

// // دالة لإزالة المنتجات من العربة
// function removeFromCart(productId) {
//   let cart = JSON.parse(localStorage.getItem("cart")) || [];

//   const productIndex = cart.findIndex((product) => product.id === productId);

//   if (productIndex !== -1) {
//     if (cart[productIndex].quantity > 1) {
//       cart[productIndex].quantity -= 1;
//     } else {
//       cart.splice(productIndex, 1);
//     }
//   }

//   localStorage.setItem("cart", JSON.stringify(cart));
//   displayCartItems();
//   updateCartCount();
// }

// // تهيئة أزرار الإزالة
// function initializeRemoveButtons() {
//   const cartContent = document.querySelector(".cart-content");

//   cartContent.addEventListener("click", function (event) {
//     if (event.target.classList.contains("remove")) {
//       const productId = parseInt(event.target.dataset.id);
//       removeFromCart(productId);
//     }
//   });
// }

// // دالة لإضافة المنتجات إلى العربة
// function addToCart(productId, productName, productPrice) {
//   if (!productId || !productName || isNaN(productPrice)) {
//     console.error("Invalid product details provided.");
//     return;
//   }

//   let cart = JSON.parse(localStorage.getItem("cart")) || [];
//   const existingProduct = cart.find((product) => product.id === productId);

//   if (existingProduct) {
//     existingProduct.quantity += 1;
//   } else {
//     cart.push({
//       id: productId,
//       name: productName,
//       price: productPrice,
//       quantity: 1,
//     });
//   }

//   localStorage.setItem("cart", JSON.stringify(cart));
//   updateCartCount();
// }

// // دالة لتحديث عدد المنتجات في العربة
// function updateCartCount() {
//   const cart = JSON.parse(localStorage.getItem("cart")) || [];
//   const totalItems = cart.reduce((sum, product) => sum + product.quantity, 0);
//   const cartNumElem = document.getElementById("cartNum");

//   cartNumElem.textContent = totalItems;

//   cartNumElem.classList.add("update");
//   setTimeout(() => {
//     cartNumElem.classList.remove("update");
//   }, 300);
// }

// // تأكد من تحديث العربة عند تحميل الصفحة
// window.onload = function () {
//   updateCartCount();
//   displayCartItems();
// };

// // ربط الأزرار بدالة "Add to Cart"
// document.querySelectorAll(".cart").forEach((button) => {
//   button.addEventListener("click", function () {
//     const productId = parseInt(this.dataset.id);
//     const productName = this.dataset.name;
//     const productPrice = parseFloat(this.dataset.price);

//     addToCart(productId, productName, productPrice);
//   });
// });

// // تأثير التمرير على الهيدر وزر العودة للأعلى
// var header = document.getElementById("header");
// var upToHome = document.getElementById("upToHome");
// window.onscroll = function () {
//   if (window.scrollY > 500) {
//     header.classList.add("header-fixed");
//     upToHome.classList.add("showBtn");
//   } else {
//     header.classList.remove("header-fixed");
//     upToHome.classList.remove("showBtn");
//   }
// };
// upToHome.addEventListener("click", function () {
//   window.scroll({
//     top: 0,
//     behavior: "smooth",
//   });
// });

// ***********************************************************
const allProductImages = {
  1: "img/pop_smoothie_01-720x1030.jpg", //Green Waterfall
  2: "img/pop_smoothie_02-720x1030.jpg", //Watermelon Cooler
  3: "img/pop_smoothie_03-720x1030.jpg", //Violet Banana
  4: "img/pop_smoothie_04-720x1030.jpg", //Pineapple Splash
  5: "img/08_smoothie-411x550.jpg", //Strawberry Paradise
  6: "img/05_smoothie-411x550.jpg", //Ice Raspberry
  7: "img/09_smoothie-411x550.jpg",
  8: "img/07_smoothie-411x550.jpg", //Raspberry Honey
  9: "img/01_fruits-280x355.jpg", //orange fruit
  10: "img/dish_01-1-550x550.jpg", //Salad with Mozarella
  11: "img/dish_02-1-550x550.jpg", //Eggs with Bacon and Salad
  12: "img/dish_03-1.jpg", //Salmon with Vegetables
  13: "img/dish_04-1-550x550.jpg", //Red beetroot soup
  14: "img/dish_06-1-550x550.jpg", //Tender rabbit soup
  15: "img/dish_07-1-550x550.jpg", //Chicken with Vegetables
  16: "img/dish_08-1-550x550.jpg", //Grilled Chicken Breast
  17: "img/01_smoothie-411x550.jpg", //Strawberry Summer
  18: "img/02_smoothie-411x550.jpg", //Sweet Mango
  19: "img/03_smoothie-411x550.jpg", //Fresh Strawberry
  20: "img/04_smoothie-411x550.jpg", //Pink Peach
  21: "img/01_menu_slimming-550x373.jpg", //Balanced Menu
  22: "img/02_menu_muscle-550x373.jpg", //Slimming Menu
  23: "img/03_menu_balanced-550x373.jpg", //Muscle Gain Menu
  24: "img/04_menu_vegans-550x373.jpg", //Office Menu
  25: "img/06_smoothie-411x550.jpg", //Banana Ice
  26: "img/dish_05-1-550x550.jpg", //Steaks with Asparagus
};

// دالة للحصول على رابط الصورة بناءً على ID المنتج
function getImageSource(productId) {
  if (allProductImages[productId]) {
    return allProductImages[productId];
  } else {
    console.error(`Image not found for product ID: ${productId}`);
    return "img/default-image.jpg"; // صورة افتراضية إذا لم تكن الصورة موجودة
  }
}

// دالة لعرض العناصر في العربة
function displayCartItems() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartContent = document.querySelector(".cart-content .row");
  const result = document.querySelector(".result .row");

  if (!cartContent && !result) {
    console.error("Both elements 'cart-content' and 'result' not found.");
    return;
  }

  if (cart.length === 0) {
    const emptyMessage = `<div class="col-12"><p>Your cart is currently empty.</p></div>`;
    if (cartContent) cartContent.innerHTML = emptyMessage;
    if (result) result.innerHTML = emptyMessage;
    return;
  }

  let cartHtml = "";
  let total = 0;

  cart.forEach((product) => {
    total += product.price * product.quantity;
    const imgSrc = getImageSource(product.id);

    cartHtml += `
      <div class="col-lg-4 col-md-6">
        <div class="card card-content">
          <div class="img">
            <img src="${imgSrc}" alt="${product.name}" />
          </div>
          <h2>${product.name}</h2>
          <p>Quantity: ${product.quantity}</p>
          <span class="price">$${product.price}</span>
          <button class="btn remove" data-id="${product.id}">Remove</button>
        </div>
      </div>
    `;
  });

  cartHtml += `
    <div class="col-12 mt-5 total-price">
      <p>Total: $${total.toFixed(2)}</p>
    </div>
  `;

  if (cartContent) cartContent.innerHTML = cartHtml;
  if (result) result.innerHTML = cartHtml;

  initializeRemoveButtons();
}

// دالة لإزالة المنتجات من العربة
function removeFromCart(productId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const productIndex = cart.findIndex((product) => product.id === productId);

  if (productIndex !== -1) {
    if (cart[productIndex].quantity > 1) {
      cart[productIndex].quantity -= 1;
    } else {
      cart.splice(productIndex, 1);
    }
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  displayCartItems();
  updateCartCount();
}

// تهيئة أزرار الإزالة
function initializeRemoveButtons() {
  const cartContent = document.querySelector(".cart-content");

  cartContent.addEventListener("click", function (event) {
    if (event.target.classList.contains("remove")) {
      const productId = parseInt(event.target.dataset.id);
      removeFromCart(productId);
    }
  });
}

// دالة لإضافة المنتجات إلى العربة
function addToCart(productId, productName, productPrice) {
  if (!productId || !productName || isNaN(productPrice)) {
    console.error("Invalid product details provided.");
    return;
  }

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existingProduct = cart.find((product) => product.id === productId);

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({
      id: productId,
      name: productName,
      price: productPrice,
      quantity: 1,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

// دالة لتحديث عدد المنتجات في العربة
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const totalItems = cart.reduce((sum, product) => sum + product.quantity, 0);
  const cartNumElem = document.getElementById("cartNum");

  if (cartNumElem) {
    cartNumElem.textContent = totalItems;
    cartNumElem.classList.add("update");
    setTimeout(() => {
      cartNumElem.classList.remove("update");
    }, 300);
  }
}

// تأكد من تحديث العربة عند تحميل الصفحة
window.onload = function () {
  updateCartCount();
  displayCartItems();
};

// ربط الأزرار بدالة "Add to Cart"
document.querySelectorAll(".cart").forEach((button) => {
  button.addEventListener("click", function () {
    const productId = parseInt(this.dataset.id);
    const productName = this.dataset.name;
    const productPrice = parseFloat(this.dataset.price);

    addToCart(productId, productName, productPrice);
  });
});

// تأثير التمرير على الهيدر وزر العودة للأعلى
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