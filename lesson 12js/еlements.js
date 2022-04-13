export const bigWrapper = document.createElement('div')
bigWrapper.classList.add('container')

export const wrapperRow = document.createElement('div')
wrapperRow.classList.add('container-wrapper')

export const deleteAllButton = document.createElement('button')
deleteAllButton.textContent = 'Delete All'
deleteAllButton.classList.add('btn')

export const addTodoTextField = document.createElement('input')
addTodoTextField.placeholder = 'Enter todo...'
addTodoTextField.setAttribute('id', 'todo-input')

export const addTodoButton = document.createElement('button')
addTodoButton.textContent = 'Add'
addTodoButton.classList.add('btn')

export const transformedTodos = todosDB.map(getTodo) 
