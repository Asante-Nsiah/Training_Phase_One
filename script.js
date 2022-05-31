const inputField = document.getElementById('inputField');
const addTodo = document.getElementById('addTodo');
const toDoBucket = document.getElementById('todoBucket');
const clear = document.getElementById('clear');

addTodo.addEventListener('click',  () => {
    if(inputField.value === '') {
        return
    } 
    let toDoList = document.createElement('p')
    toDoList.classList.add('todoBucket')
    toDoList.innerText = inputField.value;
    toDoBucket.appendChild(toDoList);
    inputField.value = '';
    toDoList.addEventListener('click', ()=>{
        toDoList.classList.toggle('done')
    })

    toDoList.addEventListener('dblclick', ()=>{
        toDoBucket.removeChild(toDoList);
    })

})

clear.addEventListener('click', ()=>{
    toDoBucket.innerText = '';
})