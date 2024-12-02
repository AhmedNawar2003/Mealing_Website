var allProductImages = {
    1: "img/pop_smoothie_01-720x1030.jpg", // Green Waterfall
    2: "img/pop_smoothie_02-720x1030.jpg", // Watermelon Cooler
    3: "img/pop_smoothie_03-720x1030.jpg", // Violet Banana
    4: "img/pop_smoothie_04-720x1030.jpg", // Pineapple Splash
    5: "img/08_smoothie-411x550.jpg", // Strawberry Paradise
    6: "img/05_smoothie-411x550.jpg", // Ice Raspberry
    7: "img/09_smoothie-411x550.jpg",
    8: "img/07_smoothie-411x550.jpg", // Raspberry Honey
    9: "img/01_fruits-280x355.jpg", // orange fruit
    10: "img/dish_01-1-550x550.jpg", // Salad with Mozarella
    11: "img/dish_02-1-550x550.jpg", // Eggs with Bacon and Salad
    12: "img/dish_03-1.jpg", // Salmon with Vegetables
    13: "img/dish_04-1-550x550.jpg", // Red beetroot soup
    14: "img/dish_06-1-550x550.jpg", // Tender rabbit soup
    15: "img/dish_07-1-550x550.jpg", // Chicken with Vegetables
    16: "img/dish_08-1-550x550.jpg", // Grilled Chicken Breast
    17: "img/01_smoothie-411x550.jpg", // Strawberry Summer
    18: "img/02_smoothie-411x550.jpg", // Sweet Mango
    19: "img/03_smoothie-411x550.jpg", // Fresh Strawberry
    20: "img/04_smoothie-411x550.jpg", // Pink Peach
    21: "img/01_menu_slimming-550x373.jpg", // Balanced Menu
    22: "img/02_menu_muscle-550x373.jpg", // Slimming Menu
    23: "img/img/03_menu_balanced-550x373.jpg", // Muscle Gain Menu
    24: "img/04_menu_vegans-550x373.jpg", // Office Menu
    25: "img/06_smoothie-411x550.jpg", // Banana Ice
    26: "img/dish_05-1-550x550.jpg", // Steaks with Asparagus
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
    const result = document.querySelector("#result");
    if (cart.length === 0) {
      result.innerHTML = `<div class="col-12"><p>Your cart is currently empty.</p></div>`;
      return;
    }
  
    let cartHtml = "";
    let total = 0;
  
    cart.forEach((product) => {
      total += product.price * product.quantity;
      const imgSrc = getImageSource(product.id);
  
      cartHtml += `
        <div class="col-lg-4 col-md-6">
          <div class="card inner-card">
            <div class="image">
              <img src="${imgSrc}" alt="${product.name}" />
            </div>
            <div class="card-body">
              <h2>${product.name}</h2>
              <p>Quantity: ${product.quantity}</p>
              <span class="price">$${product.price}</span>
              <button class="btn remove" data-id="${product.id}">Remove</button>
            </div>
          </div>
        </div>
      `;
    });
  
    cartHtml += `
      <div class="col-12 mt-5 total-price">
        <p>Total: $${total.toFixed(2)}</p>
      </div>
    `;
  
    result.innerHTML = cartHtml;
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
    const result = document.querySelector("#result");
  
    result.addEventListener("click", function (event) {
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
  
    cartNumElem.textContent = totalItems;
  
    cartNumElem.classList.add("update");
    setTimeout(() => {
      cartNumElem.classList.remove("update");
    }, 300);
  }
  
  // تأكد من تحديث العربة عند تحميل الصفحة
  document.addEventListener("DOMContentLoaded", function () {
    updateCartCount();
    displayCartItems();
  });
  
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