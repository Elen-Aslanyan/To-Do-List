
const toggleButton = document.getElementById('darkModeToggle')
const body = document.body

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



