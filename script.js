// ===============================
// CATEGORY BUTTON ACTIVE EFFECT
// ===============================
function setActive(button) {

  // remove active class from all buttons
  const buttons = document.querySelectorAll(".category-btn");
  buttons.forEach(btn => {
    btn.classList.remove("active");
  });

  // add active to clicked button
  button.classList.add("active");
}


// ===============================
// SHOP NOW BUTTON SCROLL
// ===============================
const shopBtn = document.querySelector(".shop-btn");

shopBtn.addEventListener("click", () => {
  document.querySelector(".products").scrollIntoView({
    behavior: "smooth"
  });
});


// ===============================
// CART SYSTEM
// ===============================
let cart = [];
let cartCount = 0;

const addButtons = document.querySelectorAll(".product-card button");
const checkoutBtn = document.querySelector(".checkout-btn");

addButtons.forEach(button => {

  button.addEventListener("click", () => {

    const card = button.parentElement;
    const name = card.querySelector("h3").innerText;
    const price = card.querySelector("p").innerText;

    cart.push({ name, price });
    cartCount++;

    checkoutBtn.innerText = `Checkout (${cartCount})`;

    alert(name + " added to cart!");
  });

});


// ===============================
// CHECKOUT BUTTON
// ===============================
checkoutBtn.addEventListener("click", () => {

  if (cart.length === 0) {
    alert("Your cart is empty.");
    return;
  }

  let message = "Your cart:\n\n";

  cart.forEach(item => {
    message += item.name + " - " + item.price + "\n";
  });

  alert(message);
});


// ===============================
// NEWSLETTER SUBSCRIBE
// ===============================
const subscribeBtn = document.querySelector(".newsletter button");
const emailInput = document.querySelector(".newsletter input");

subscribeBtn.addEventListener("click", () => {

  const email = emailInput.value;

  if (email === "") {
    alert("Please enter your email.");
    return;
  }

  alert("Thank you for joining YUKI 💎");

  emailInput.value = "";
});
