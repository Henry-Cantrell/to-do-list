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
