let cart = [];
let total = 0;

// Sample products
const products = [
    {id:1,name:"Product 1",price:20,desc:"High quality cute item",img:"https://via.placeholder.com/200"},
    {id:2,name:"Product 2",price:35,desc:"Luxury pastel design",img:"https://via.placeholder.com/200"}
];

const productList = document.getElementById("product-list");

// Render products
function renderProducts() {
    productList.innerHTML = "";
    products.forEach(p=>{
        const card = document.createElement("div");
        card.className = "product";
        card.innerHTML = `
            <img src="${p.img}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p>${p.desc}</p>
            <p>$${p.price}</p>
            <button onclick="addToCart(${p.id})">Add to Cart</button>
        `;
        productList.appendChild(card);
    });
}

renderProducts();

// Add to cart
function addToCart(id){
    const product = products.find(p=>p.id===id);
    cart.push(product);
    total += product.price;
    updateCart();
}

function updateCart(){
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";
    cart.forEach(item=>{
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
    });
    document.getElementById("total").textContent = total;
    document.getElementById("cart-count").textContent = cart.length;
}

// Checkout button
document.getElementById("checkout-btn").addEventListener("click", ()=> {
    if(cart.length===0){alert("Cart is empty!");return;}
    alert(`Order placed! Total: $${total}`);
});
const stripe = Stripe("pk_test_51T6dmMRqkXSWgBuAEHDDU8hsRzs1udKAbK8XaLutRPDxF9H9ZWMsDbNEkfFLxwalRq4i9tcg74KPMz6Zvqsxhtnr00c1ODJX3A");

document.getElementById("stripe-btn").addEventListener("click", async () => {
    const response = await fetch("/create-checkout-session", {method:"POST"});
    const session = await response.json();
    stripe.redirectToCheckout({ sessionId: session.id });
});
emailjs.send("service_uj2nvv8","template_h6nlm6i",{
    cart: JSON.stringify(cart),
    total: total

}).then(res=>alert("Email sent!"));
import { supabase } from './supabase.js'

async function loadProducts() {
  const { data, error } = await supabase
    .from('products')
    .select('*')

  const container = document.getElementById("product-list")
  container.innerHTML = ""

  data.forEach(product => {
    container.innerHTML += `
      <div class="product">
        <img src="${product.image}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p>$${product.price}</p>
        <button>Add to Cart</button>
      </div>
    `
  })
}

loadProducts()
function setActive(button) {
    document.querySelectorAll(".category-btn").forEach(btn => {
        btn.classList.remove("active");
    });
    button.classList.add("active");
}

