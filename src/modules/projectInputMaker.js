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
    projDescField.placeholder='Notes';
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
        {console.log('Holy PB&J, Batman!')} 
        else {objectArray.push(projectFactoryMaker), projTableMaker()};
    })
}

export let projTableMaker = () => {

    const table = document.createElement('table');

    const tableDiv = document.createElement('div');
    tableDiv.id = `tableDiv${counter}`;

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
            
            const body = document.getElementById('body')

            if (objectArray[i].projName === "" && objectArray[i].notes === "" && objectArray[i].dueDate === "" &&  objectArray[i].description === "")
            {return false} 
            else {tableDiv.appendChild(table), body.appendChild(tableDiv), todoButtonMaker()};
        }
    }
}

export let todoButtonMaker = () => {
    const todoButton = document.createElement('button');
    todoButton.id = `todoButton${counter}`;
    todoButton.textContent = 'Add a to-do item'

    const todoButtonMaker = document.getElementById(`tableDiv${counter}`);

    todoButtonMaker.appendChild(todoButton);

    todoButtonController();
}

export let todoButtonController = () => {
    const button = document.getElementsByTagName('button').namedItem(`todoButton${counter}`)
    
    button.addEventListener('click', () => {
        
        const todoTitle = document.createElement('input')
        todoTitle.placeholder = 'What do you need to do?'
        todoTitle.id = `todoTitle${counter}`

        const todoDueDate = document.createElement('input')
        todoDueDate.placeholder = 'When is it due?'
        todoDueDate.id = `todoDueDate${counter}`

        const todoNotes = document.createElement('input')
        todoNotes.placeholder = 'Add any notes that you like'
        todoNotes.id = `todoNotes${counter}`

        const tableDiv = document.getElementById(`tableDiv${counter}`)

        tableDiv.appendChild(todoTitle)
        tableDiv.appendChild(todoDueDate)
        tableDiv.appendChild(todoNotes)

        const addButton = document.createElement('button')
        addButton.textContent = 'Save to-do list'

        tableDiv.appendChild(addButton)

        addButton.addEventListener('click', () => {

            const newTodo = todoFactory((document.getElementById(`todoTitle${counter}`).value), (document.getElementById(`todoDueDate${counter}`).value), (document.getElementById(`todoNotes${counter}`).value))

            const todoTable = document.createElement('table')
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
        })

    })
}

export let projectFactory = (projName, notes, dueDate, description) => {
    return {projName, notes, dueDate, description};
}

export let todoFactory = (todoTitle, todoDueDate, todoNotes) => {
    return {todoTitle, todoDueDate, todoNotes};
}

export let counter = 0;
export let todoArray = [];
export let objectArray = [];