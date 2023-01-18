// define DOM element
const taskInput = document.querySelector("#addTodoInput");
const addButton = document.querySelector("#addTodoButton");
const tasksList = document.querySelector("#tasksList");


const tasks = [];


// add ul element for to the task list div


// check if user has clicked an add button
addButton.addEventListener("click", function (){
    // if the button has been clicked a button
    const PATTERN = /\w+?/

    // check if the input field has any content
    if(!PATTERN.test(taskInput.value)){
        // if there is no content then let the users
        alert("task input field is required");
    } else {
        // if there is any content submitted then proceed with adding the todo in the array
        tasks.push(taskInput.value);


        tasksList.innerHTML += `
                    <div class="taskDiv" class="p-3 my-3">
                        <table class="table table-borderless my-2">
                            <tr>
                              <td>${taskInput.value}</td> 
                              <td><button class="btn btn-danger btn-sm delete float-end">Delete</button></td> 
                              <td><button class="btn btn-success btn-sm done float-start">Done</button></td> 
                            </tr>   
                        </table>
                    </div>`;

        const deleteBtns = document.querySelectorAll(".delete");
        const doneBtns = document.querySelectorAll(".done");

        console.log(deleteBtns);

        for(let btn = 0; btn < deleteBtns.length; btn++){
            deleteBtns[btn].addEventListener("click", function (){
                this.parentNode.parentNode.remove();
            });
        }

        for(let i = 0; i < doneBtns.length; i++){
            doneBtns[i].addEventListener("click", function (){
                this.parentNode.parentNode.style.color = "green";
                this.parentNode.parentNode.style.border = "1px solid green";
                this.parentNode.parentNode.style.backgroundColor = "#eee";
            })
        }

        taskInput.value = "";
    }
});
// console.log(tasks) <-- array






