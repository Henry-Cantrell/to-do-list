export let projectFactory = (projName, notes, dueDate, description) => {
    return {projName, notes, dueDate, description};
}

export let todoFactory = (todoTitle, todoDueDate, todoNotes) => {
    return {todoTitle, todoDueDate, todoNotes};
}
