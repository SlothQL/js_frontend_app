document.addEventListener('DOMContentLoaded', () => {

    const form = document.querySelector('#new-item-form');
    form.addEventListener('submit', handleSubmitForm);

    const deleteButton = document.querySelector('#delete-button');
    deleteButton.addEventListener('click', handleDeleteButton);
})

const handleSubmitForm = function(event) {
    event.preventDefault();
    console.log(event);
    const newItem = createNewListItem(event);
    const list = document.querySelector('#plant-list');
    list.appendChild(newItem);
    this.reset();
}

const createNewListItem = function() {
    const newListItem = document.createElement('li');
    newListItem.classList.add('list-item');
    newListItem.textContent = `${this.plant.value} Type: ${this.type.value} Sun Level: ${this.sun.value} Watering: ${this.watering.value}`;
    console.log(newListItem);
    return newListItem;
}

const handleDeleteButton = function() {
    const list = document.querySelector('#plant-list');
    list.textContent = '';
}