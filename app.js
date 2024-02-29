const inputForm = document.getElementById('input-form');
const taskList = document.getElementById('task');

function addTask(){
   if (inputForm.value === '') {
    alert('You must write something!');
   } else {
    let li =document.createElement('li');
    li.innerHTML = inputForm.value;
    taskList.appendChild(li);
    let span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.appendChild(span);
   }
   inputForm.value = '';
   saveData();
}

taskList.addEventListener('click',function (e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle('checked');
        saveData();
    } else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem('data', taskList.innerHTML);
}

function showTask(){
    taskList.innerHTML = localStorage.getItem('data');
}
showTask();