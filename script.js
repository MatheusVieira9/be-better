
let taskCreatButton = document.querySelector("button, #create_task_button")
let taskSpace = document.querySelector("#task_space_creation")

taskCreatButton.onclick = () => {
    taskSpace.innerHTML = '<textarea name="task box" id="text_box" cols="30" rows="1"></textarea><label for="text_box">Write your task</label>'
    
}

