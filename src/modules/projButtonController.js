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