// attach our data from db

function displayProducts(product) {
    let tableRow = document.createElement("tr")
    tableRow.id = "table-row"
    tableRow.innerHTML = `
    <th scope="row">${product.id}</th>
    <td>${product.title}</td>
    <td>${product.description}</td>
    <td>${product.image}</td>
    <td>${product.price}</td>
    <td><button class="btn" id="edit">Edit</button></td>
    <td><button class="btn" id="delete">Delete</button></td>
    `
    // get the id element table-body
    document.querySelector('#table-body').append(tableRow)
    // add event listener to the edit button
    tableRow.querySelector('#edit').addEventListener('click', () => {
        // call the function that edit the specific element

    })
    tableRow.querySelector('#delete').addEventListener('clck', () => {
        // funmction that deletes a specific element
    })
}

// fetch the data the db
// the endpoint is products
let base_URL = "http://localhost:3000"
function fetchProduct() {
    fetch(`${base_URL}/products`)
    .then((res) => res.json())
    .then(products => 
        products.forEach((product) => {
            displayProducts(product)
        }))
}
fetchProduct()

// function to collect the form data
// GET
function collectFormData() {
    let form = document.querySelector('#form')
    form.addEventListener('submit', (e) => {
        // e.preventDefault()
        formData = {
            title: e.target.name.value,
            image: e.target.image.value,
            description: e.target.description.value
        }
        // postProducts function goes here
    })
}
collectFormData();