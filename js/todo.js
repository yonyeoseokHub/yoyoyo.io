const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";


let toDos = [];


function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    
    console.log(event.target.parentElement);
    const li = event.target.parentElement;
    li.remove();

    console.log(typeof li.id)
    // 클릭했던 li의 id를 갖고 있는 toDo를 지우고 싶다. 
    // toDo의 id가 li의 id와 다른것을 남기고 싶다. 
    // 즉, 내가 클릭한 li.id와 다른 toDo는 남겨두고 싶다.   
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)) 
    saveToDos();
}

// ToDo를 그리는 역할
function paintToDo(newTodo){ 

    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text; // newTodo; 를 변경
    const button = document.createElement("button");
    button.innerText = "x";
    button.addEventListener("click", deleteToDo);

    li.appendChild(span);
    li.appendChild(button); 
    toDoList.appendChild(li);
}

// #7.0 
function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value; 
    toDoInput.value = ""; 
    // object를 push해주자. id와 text로 갖기 위함
    const newTodoObj = {
        text:newTodo,
        id: Date.now(), // id로 각각의 li item을 구별한다. 
    }
    toDos.push(newTodoObj); 
    // paintToDo에 string newTodo가 아닌, newTodoObj를 준다. 
    paintToDo(newTodoObj); 
    saveToDos();
}

// #7.0 end
toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    console.log(parsedToDos);
    toDos = parsedToDos;
    
    // forEach함수는 이 paintToDo를 parsedToDos배열의 요소마다 실행한다. 
    // 이전까지는 배열로 반환했는데, 이제는 object로 반환한다. 
    parsedToDos.forEach(paintToDo);
}
