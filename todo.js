const tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
const list = document.querySelector('.container__todoList');
const modal = document.getElementById('modal-window');
const modalBlockView = document.getElementById('modal-window-block');

const add = () => {
    let number = tasks.length + 1;
    const task = document.createElement('li');
    task.innerText = `Task number ${number}`;
    task.className = 'container__todoTask';
    tasks.push(task.innerText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    list.appendChild(task);
    list.style.display = "block";
}

const remove = () => {
    tasks.pop();
    localStorage.setItem('tasks', JSON.stringify(tasks));
    list.removeChild(list.lastChild);
    if (tasks.length === 0) {
    list.style.display = "none";
    }
}

const removeBlocker = () => {
    const Div = document.querySelector('.blockView');
    Div.parentNode.removeChild(Div);
}

const clearAll = () => {
    modal.style.display = "block";
    const myDiv = document.createElement('div');
    myDiv.className = 'blockView';
    document.body.appendChild(myDiv);
    const close = document.getElementsByClassName("close")[0];
    close.onclick = function () {
        modal.style.display = "none";
        removeBlocker();
    };
}

const clearConfirmed = () => {
    tasks.length = 0;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    list.innerHTML = "";
    modal.style.display = "none";
    list.style.display = "none";
    removeBlocker();
}

const cancelClear = () => {
    modal.style.display = "none";
    removeBlocker();
}

const displayTasks = (() => {
    if (tasks.length > 0) {
        list.style.display = "block";
        tasks.forEach((el, index) =>  {
           const task = document.createElement('li');
            task.innerText = `Task number ${index + 1}`;
            task.className = 'container__todoTask';
            list.appendChild(task);
        })
    }
})();

