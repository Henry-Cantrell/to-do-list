export let todoButtonMaker = () => {
    const todoButton = document.createElement('button');
    todoButton.id = `todoButton${counter}`;
    todoButton.textContent = 'Add a to-do item'

    const todoButtonMaker = document.getElementById(`tableDiv${counter}`);

    todoButtonMaker.appendChild(todoButton);

    todoButtonController();
}
