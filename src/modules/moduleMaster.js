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

    projDeleteController(deleteButton, divMaster, tableDiv)

    tableDiv.appendChild(deleteButton);
}

export let projDeleteController = (deleteButton, divMaster, tableDiv) => {
    deleteButton.addEventListener ('click', () => {
        divMaster.removeChild(tableDiv)
    }
    )
}

export let todoButtonController = (todoButton, tableDiv) => {

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

        const thisTitle = todoTitle
        const thisDueDate = todoDueDate
        const thisNotes = todoNotes

        tableDiv.appendChild(todoTitle)
        tableDiv.appendChild(todoDueDate)
        tableDiv.appendChild(todoNotes)

        addButtonMaker(tableDiv, thisTitle, thisDueDate, thisNotes)
    })}

export let addButtonMaker = (tableDiv, todoTitle, todoDueDate, todoNotes) => {
    const addButton = document.createElement('button')

    const divTable = tableDiv

    console.log(divTable)
    
    addButton.textContent = 'Save to-do list'

    addButtonController(addButton, divTable, todoTitle, todoDueDate, todoNotes)

    tableDiv.appendChild(addButton)
}

export let addButtonController = (addButton, tableDiv, todoTitle, todoDueDate, todoNotes) => {

    addButton.addEventListener('click', () => {

        todoCounter++

        const newTodo = todoFactory((document.getElementById(`todoTitle${counter}`).value), (document.getElementById(`todoDueDate${counter}`).value), (document.getElementById(`todoNotes${counter}`).value))

        console.log(newTodo)

        const todoTable = document.createElement('table')
        todoTable.id = (`todoTable${todoCounter}`)
        const todoRow = document.createElement('row')

        const todoCellOne = document.createElement('td')
        todoCellOne.textContent = newTodo.todoTitle

        const todoCellTwo = document.createElement('td')
        todoCellTwo.textContent = newTodo.todoDueDate

        const todoCellThree = document.createElement('td')
        todoCellThree.textContent = newTodo.todoNotes

        tableDiv.removeChild(todoTitle)
        tableDiv.removeChild(todoDueDate)
        tableDiv.removeChild(todoNotes)
        tableDiv.removeChild(addButton)

        if (todoCellOne.textContent != "") {todoRow.appendChild(todoCellOne)}
        if (todoCellTwo.textContent != "") {todoRow.appendChild(todoCellTwo)}
        if (todoCellThree.textContent != "") {todoRow.appendChild(todoCellThree)}

        todoTable.appendChild(todoRow)
        tableDiv.appendChild(todoTable)

        deleteButtonMaker(todoTable, tableDiv)
        
})}

export let deleteButtonMaker = (todoTable, tableDiv) => {
    const todoDeleteButton = document.createElement('button')
    todoDeleteButton.textContent = 'Delete this todo item'
    todoDeleteButton.id = (`todoDeleteButton${todoCounter}`)

    deleteButtonController(todoDeleteButton, todoTable, tableDiv)

    todoTable.appendChild(todoDeleteButton);
}

export let deleteButtonController = (todoDeleteButton, todoTable, tableDiv) => {
    todoDeleteButton.addEventListener('click', () => {
        tableDiv.removeChild(todoTable)
    })
}

export let todoButtonMaker = () => {
    const todoButton = document.createElement('button');
    todoButton.id = (`todoButton${counter}`);
    todoButton.textContent = 'Add a to-do item'

    const todoButtonMaker = document.getElementById(`tableDiv${counter}`);

    todoButtonController(todoButton, todoButtonMaker);

    todoButtonMaker.appendChild(todoButton);
}


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