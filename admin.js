import { supabase } from './supabase.js'

const addBtn = document.getElementById("add-product")

addBtn.addEventListener("click", async () => {

  const name = document.getElementById("name").value
  const description = document.getElementById("description").value
  const price = document.getElementById("price").value
  const file = document.getElementById("image").files[0]

  if (!file) {
    alert("Select image")
    return
  }

  // Upload image to storage
  const fileName = Date.now() + "-" + file.name

  const { data: uploadData, error: uploadError } =
    await supabase.storage
      .from('products')
      .upload(fileName, file)

  if (uploadError) {
    console.error(uploadError)
    return
  }

  const { data: publicUrlData } =
    supabase.storage
      .from('products')
      .getPublicUrl(fileName)

  const imageUrl = publicUrlData.publicUrl

  // Insert product into database
  const { error } = await supabase
    .from('products')
    .insert([
      { name, description, price, image: imageUrl }
    ])

  if (error) {
    console.error(error)
  } else {
    alert("Product added successfully!")
    loadAdminProducts()
  }
})

async function loadAdminProducts() {

  const { data } = await supabase
    .from('products')
    .select('*')

  const container = document.getElementById("admin-products")
  container.innerHTML = ""

  data.forEach(product => {
    container.innerHTML += `
      <div>
        <img src="${product.image}" width="100">
        <h4>${product.name}</h4>
        <p>$${product.price}</p>
        <button onclick="deleteProduct('${product.id}')">Delete</button>
        <hr>
      </div>
    `
  })
}

window.deleteProduct = async function(id) {
  await supabase.from('products').delete().eq('id', id)
  loadAdminProducts()
}

loadAdminProducts()
