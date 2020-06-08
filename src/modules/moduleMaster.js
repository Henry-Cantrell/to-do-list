    export let projectInputMaker = () => {

    const formDiv = document.createElement('div');
    formDiv.id='formdiv';

    const projNameField = document.createElement('input');
    projNameField.placeholder = 'Name of project';
    projNameField.id='projNameField';
    projNameField.type='text';

    const projNotesField = document.createElement('input');
    projNotesField.placeholder = 'Your notes go here';

    projNotesField.id='projNotesField';
    projNotesField.type='text';

    const projDueDate = document.createElement('input');
    projDueDate.placeholder = 'mm/dd/yy';
    projDueDate.id = 'projDueDate';
    projDueDate.type='text';

    const projDescField = document.createElement('input');
    projDescField.placeholder='Description of project';
    projDescField.id='projDescField';
    projDescField.type='text';

    const createProjButton = document.createElement('button');
    createProjButton.textContent='Make a project';
    createProjButton.id='createProjButton'

    formDiv.appendChild(projNameField);
    formDiv.appendChild(projNotesField);
    formDiv.appendChild(projDueDate);
    formDiv.appendChild(projDescField);
    formDiv.appendChild(createProjButton);

    const contentDiv = document.getElementById('contentDiv');
    contentDiv.appendChild(formDiv)
    projButtonController();
}

export let projButtonController = () => {

    const projButton = document.getElementById('createProjButton');

    projButton.addEventListener('click', () => {

    counter++;

    const projectFactoryMaker = projectFactory((document.getElementById('projNameField').value) ,(document.getElementById('projNotesField').value) ,(document.getElementById('projDueDate').value),(document.getElementById('projDescField').value));
    projectFactoryMaker.id = counter;
    
    if (projectFactoryMaker.projName === "" && projectFactoryMaker.notes === "" && projectFactoryMaker.dueDate === "" &&  projectFactoryMaker.description === "")
        {window.alert('Please enter some project data!')} 
        else {objectArray.push(projectFactoryMaker), projTableMaker()};
    })
}

export let projTableMaker = () => {

    const table = document.createElement('table');

    const tableDiv = document.createElement('div');
    tableDiv.id = (`tableDiv${counter}`);
    tableArray.push(tableDiv);

    table.id = counter;

    for (var i=0; i<objectArray.length; i++) {

        if (table.id == objectArray[i].id) {

            const row = document.createElement('row');

            const nameCell = document.createElement('td');
            const notesCell = document.createElement('td');
            const dueDateCell = document.createElement('td');
            const descriptionCell = document.createElement('td');
        
            nameCell.textContent = objectArray[i].projName;
            notesCell.textContent = objectArray[i].notes;
            dueDateCell.textContent = objectArray[i].dueDate;
            descriptionCell.textContent = objectArray[i].description;
        
            if (objectArray[i].projName != "") {row.appendChild(nameCell)};
            if (objectArray[i].notes != "") {row.appendChild(notesCell)};
            if (objectArray[i].dueDate != "") {row.appendChild(dueDateCell)};
            if (objectArray[i].description != "") {row.appendChild(descriptionCell)};

            table.appendChild(row);

            const projMasterDiv = document.getElementById('projMasterDiv')

            if (objectArray[i].projName === "" && objectArray[i].notes === "" && objectArray[i].dueDate === "" &&  objectArray[i].description === "")
            {return false} 
            else {tableDiv.appendChild(table), projMasterDiv.appendChild(tableDiv), todoButtonMaker(), projDeleteButtonMaker()};
        }
    }
}

export let projDeleteButtonMaker = () => {
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete this project'
    deleteButton.id = `deleteButtonProj${counter}`;
    const divMaster = document.getElementById('projMasterDiv')

    const tableDiv = document.getElementById(`tableDiv${counter}`);

    tableDiv.appendChild(deleteButton);

    deleteButton.addEventListener ('click', () => {
        console.log(tableDiv)
        divMaster.removeChild(tableDiv)
    }
    )
}

export let todoButtonMaker = () => {
    const todoButton = document.createElement('button');
    todoButton.id = `todoButton${counter}`;
    todoButton.textContent = 'Add a to-do item'

    const todoButtonMaker = document.getElementById(`tableDiv${counter}`);

    todoButtonMaker.appendChild(todoButton);

    let todoButtonController = () => {

    todoButton.addEventListener('click', () => {
        
        const todoTitle = document.createElement('input')
        todoTitle.placeholder = 'What do you need to do?'
        todoTitle.id = `todoTitle${counter}`

        const todoDueDate = document.createElement('input')
        todoDueDate.placeholder = 'When is it due?'
        todoDueDate.id = `todoDueDate${counter}`

        const todoNotes = document.createElement('input')
        todoNotes.placeholder = 'Add any notes that you like'
        todoNotes.id = `todoNotes${counter}`

        todoButtonMaker.appendChild(todoTitle)
        todoButtonMaker.appendChild(todoDueDate)
        todoButtonMaker.appendChild(todoNotes)

        const addButton = document.createElement('button')
        addButton.textContent = 'Save to-do list'

        todoButtonMaker.appendChild(addButton)

        addButton.addEventListener('click', () => {

            todoCounter++

            const newTodo = todoFactory((document.getElementById(`todoTitle${counter}`).value), (document.getElementById(`todoDueDate${counter}`).value), (document.getElementById(`todoNotes${counter}`).value))

            const todoTable = document.createElement('table')
            todoTable.id = (`todoTable${todoCounter}`)
            const todoRow = document.createElement('row')

            const todoCellOne = document.createElement('td')
            todoCellOne.textContent = newTodo.todoTitle

            const todoCellTwo = document.createElement('td')
            todoCellTwo.textContent = newTodo.todoDueDate

            const todoCellThree = document.createElement('td')
            todoCellThree.textContent = newTodo.todoNotes

            todoButtonMaker.removeChild(todoTitle)
            todoButtonMaker.removeChild(todoDueDate)
            todoButtonMaker.removeChild(todoNotes)
            todoButtonMaker.removeChild(addButton)

            if (todoCellOne.textContent != "") {todoRow.appendChild(todoCellOne)}
            if (todoCellTwo.textContent != "") {todoRow.appendChild(todoCellTwo)}
            if (todoCellThree.textContent != "") {todoRow.appendChild(todoCellThree)}

            todoTable.appendChild(todoRow)
            todoButtonMaker.appendChild(todoTable)
            
            let deleteButtonMaker = () => {

            const todoDeleteButton = document.createElement('button')
        todoDeleteButton.textContent = 'Delete this todo item'
        todoDeleteButton.id = `todoDeleteButton${todoCounter}`

        todoTable.appendChild(todoDeleteButton);

        todoDeleteButton.addEventListener('click', () => {
        todoButtonMaker.removeChild(todoTable)
    })} 
       deleteButtonMaker() })
    })} 
todoButtonController()}

export let projectFactory = (projName, notes, dueDate, description) => {
    return {projName, notes, dueDate, description};
}

export let todoFactory = (todoTitle, todoDueDate, todoNotes) => {
    return {todoTitle, todoDueDate, todoNotes};
}

export let counter = 0;
export let todoCounter = 0;
export let todoArray = [];
export let objectArray = [];
export let tableArray = [];