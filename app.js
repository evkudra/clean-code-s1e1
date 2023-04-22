//Document is the DOM can be accessed in the console with document.window.
// Tree is from the top, html, body, p etc.

//Problem: User interaction does not provide the correct results.
//Solution: Add interactivity so the user can manage daily tasks.
//Break things down into smaller steps and take each step at a time.


// Event handling, user interaction is what starts the code execution.

const taskInput = document.getElementById("new-task");
const addButton = document.getElementById("add-button");
const incompleteTaskHolder = document.getElementById("incompleteTasks");
const completedTasksHolder = document.getElementById("completed-tasks");


//New task list item
const createNewTaskElement = (taskString) => {

  const listItem = document.createElement("li");

  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.className = "checkbox";

  const label = document.createElement("label");
  label.innerText = taskString;

  const editInput = document.createElement("input");
  editInput.type = "text";
  editInput.className = "task";

  const editButton = document.createElement("button");
  editButton.innerText = "Edit";
  editButton.className = "edit";

  const deleteButton = document.createElement("button");
  const deleteButtonImg = document.createElement("img");
  deleteButton.className = "delete";
  deleteButtonImg.src = "./remove.svg";
  deleteButton.appendChild(deleteButtonImg);
    

  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);
  return listItem;
}



var addTask = function() {
    console.log("Add Task...");
    //Create a new list item with the text from the #new-task:
    if (!taskInput.value) return;
    var listItem = createNewTaskElement(taskInput.value);

    //Append listItem to incompleteTaskHolder
    incompleteTaskHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);

    taskInput.value = "";

}

//Edit an existing task.

const editTask = function() {
  console.log("Edit Task...");
  console.log("Change 'edit' to 'save'");


  const listItem = this.parentNode;
  const editInput = listItem.querySelector('input[type=text]');
  const label = listItem.querySelector("label");
  const editBtn = listItem.querySelector(".edit");
  const containsClass = listItem.classList.contains("editMode");

  //If class of the parent is .editmode
  if (containsClass) {
    label.innerText = editInput.value;
    editBtn.innerText = "Edit";
  } else {
    editInput.value=label.innerText;
    editBtn.innerText = "Save";
  }

  listItem.classList.toggle("editMode");
};


//Delete task.
const deleteTask = function() {
  console.log("Delete Task...");

  const listItem = this.parentNode;
  const ul = listItem.parentNode;
    
  ul.removeChild(listItem);
}


//Mark task completed
var taskCompleted = function() {
    console.log("Complete Task...");

    //Append the task list item to the #completed-tasks
    var listItem = this.parentNode;
    completedTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskIncomplete);

}

//Mark task as incomplete.
var taskIncomplete = function() {
    console.log("Incomplete Task...");

    //When the checkbox is unchecked
    //Append the task list item to the #incompleteTasks.
    var listItem = this.parentNode;
    incompleteTaskHolder.appendChild(listItem);
    bindTaskEvents(listItem,taskCompleted);
}



var ajaxRequest = function() {
    console.log("AJAX Request");
}

//The glue to hold it all together.


//Set the click handler to the addTask function.
addButton.onclick = addTask;
addButton.addEventListener("click",addTask);
addButton.addEventListener("click",ajaxRequest);


var bindTaskEvents = function(taskListItem,checkBoxEventHandler) {
    console.log("bind list item events");
    //select ListItems children
    var checkBox = taskListItem.querySelector(".checkbox");
    var editButton = taskListItem.querySelector("button.edit");
    var deleteButton = taskListItem.querySelector("button.delete");


    //Bind editTask to edit button.
    editButton.onclick = editTask;
    //Bind deleteTask to delete button.
    deleteButton.onclick = deleteTask;
    //Bind taskCompleted to checkBoxEventHandler.
    checkBox.onchange = checkBoxEventHandler;
}

//cycle over incompleteTaskHolder ul list items
//for each list item
for (var i = 0; i < incompleteTaskHolder.children.length; i++){

    //bind events to list items chldren(tasksCompleted)
    bindTaskEvents(incompleteTaskHolder.children[i],taskCompleted);
}




//cycle over completedTasksHolder ul list items
for (var i = 0; i < completedTasksHolder.children.length; i++){
    //bind events to list items chldren(tasksIncompleted)
    bindTaskEvents(completedTasksHolder.children[i],taskIncomplete);
}




// Issues with usability don't get seen until they are in front of a human tester.

//prevent creation of empty tasks.

//Change edit to save when you are in edit mode.