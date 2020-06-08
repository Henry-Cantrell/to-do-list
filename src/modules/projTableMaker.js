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