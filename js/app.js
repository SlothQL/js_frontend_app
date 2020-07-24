document.addEventListener('DOMContentLoaded', () => {

    const form = document.querySelector('#new-item-form');
    form.addEventListener('submit', handleSubmitForm);

    const deleteButton = document.querySelector('#delete-button');
    deleteButton.addEventListener('click', handleDeleteButton);
})

const handleSubmitForm = function(event) {
    event.preventDefault();
    const newItem = createNewListItem(event);
    const list = document.querySelector('#plant-list');
    list.appendChild(newItem);
    this.reset();
}

const createNewListItem = function() {
    var data = new FormData(event.target);
    var output = '';
    for (const entry of data) {
        console.log(entry);
        output = output + entry[1] + "\r";
    };
    const newListItem = document.createElement('li');
    newListItem.classList.add('list-item');
    newListItem.textContent = `${this.plant.value} Type: ${this.type.value} Sun Level: ${output} Watering: ${this.watering.value}`;
    return newListItem;
}

const handleDeleteButton = function() {
    const list = document.querySelector('#plant-list');
    list.textContent = '';
}