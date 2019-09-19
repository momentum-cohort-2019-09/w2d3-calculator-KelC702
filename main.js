const acButton = document.querySelector(".AC")
const addButton = document.querySelector('#add-button')
const addItemForm = document.querySelector('#add-item-form')
const removeButton = document.querySelector('#remove-items')

addButton.addEventListener('click', function (event) {
    function addNewItem(event) {
        event.preventDefault()
