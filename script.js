const theme = document.getElementById('theme');
const newItemInput = document.getElementById('addi');
const todoList = document.querySelector('.content ul');
const itemsLeft = document.querySelector('.items-left span');

itemsLeft.innerText = document.querySelectorAll('.list-item input[type="checked"]');
theme.addEventListener('click', () =>{
    document.querySelector('body').classList = [theme.checked ? 'light-theme']
});