const inputBox = document.getElementById('input-box')
const taskList = document.getElementById('task-list')
const addButton = document.getElementById('add-button')
const toggleButton = document.getElementById('darkModeToggle')
const body = document.body
const filterOption = document.querySelector('.filter-todo')

// add task 

addButton.addEventListener('click',function(e){
    e.preventDefault()
    if(inputBox.value === '')
        alert('You must write something')
    else{
        let li = document.createElement('li')
        li.innerHTML = inputBox.value
        taskList.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML= '\u00d7'
        li.appendChild(span)
        
    }
    inputBox.value = ''
    saveData()
})



addButton.addEventListener('keydown',function(e){
    if(e.key === 'Enter'){
        addButton.click()
    }
})

//  remove task 





taskList.addEventListener('click',function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')
        saveData()
    }

    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove()
        saveData()
    }
  

 
    
},false)







//  save localstorage

function saveData(){
    localStorage.setItem('data', taskList.innerHTML)
}

function showList(){
    taskList.innerHTML = localStorage.getItem('data') 
    
}

showList()






// dark mode 

 if(localStorage.getItem('theme')=== 'dark'){
    body.classList.add('dark-mode')
    toggleButton.innerHTML = '&#9728'
 }

 toggleButton.addEventListener('click', function(){
    body.classList.toggle('dark-mode')
    if(body.classList.contains('dark-mode')){
        localStorage.setItem('theme', 'dark')
        toggleButton.innerHTML = '&#9728'
    }else{
        localStorage.setItem('theme','light')
        toggleButton.innerHTML = '&#127769'

    }
 })






// filter tasks


filterOption.addEventListener('change', function(e){
    const todos = Array.from(taskList.children) 
    todos.forEach(todo =>{
        switch(e.target.value){
            case 'all':
                todo.style.display = 'flex'
                break
            case 'completed':
                if(todo.classList.contains('checked')){
                    todo.style.display = 'flex'
                }else{
                    todo.style.display = 'none'
                }
                break
            case 'uncompleted':
                if(!todo.classList.contains('checked')){
                    todo.style.display = 'flex'
                }else{
                    todo.style.display = 'none'
                }
                break

        }
    })
        
})


showList()