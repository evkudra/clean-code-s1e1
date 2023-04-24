//Document is the DOM can be accessed in the console with document.window.
// Tree is from the top, html, body, p etc.

//Problem: User interaction does not provide the correct results.
//Solution: Add interactivity so the user can manage daily tasks.
//Break things down into smaller steps and take each step at a time.


// Event handling, user interaction is what starts the code execution.

import { createNewTaskElement } from "./components/createNewTaskElement.js";
import { deleteTask } from "./components/deleteTask.js";
import { editTask } from "./components/editTask.js";
import { bindTaskEvents } from "./components/bindTaskEvents.js";


const taskInput = document.getElementById("new-task");
const addButton = document.getElementById("add-button");
const incompleteTaskHolder = document.getElementById("incompleteTasks");
const completedTasksHolder = document.getElementById("completed-tasks");


const addTask = function() {
  console.log("Add Task...");

  if (!taskInput.value || taskInput.value.trim().length === 0) {
    taskInput.value = "";
    return
  }
  const listItem = createNewTaskElement(taskInput.value);

  incompleteTaskHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);

  taskInput.value = "";
}


//Mark task completed
const taskCompleted = function() {
  console.log("Complete Task...");

  const listItem = this.parentNode;
  completedTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskIncomplete);
};

//Mark task as incomplete.
const taskIncomplete = function() {
  console.log("Incomplete Task...");
   
  const listItem = this.parentNode;
  incompleteTaskHolder.appendChild(listItem);
  bindTaskEvents(listItem,taskCompleted);
};


const ajaxRequest = () => {
  console.log("AJAX Request");
};


addButton.addEventListener("click",addTask);
addButton.addEventListener("click",ajaxRequest);


//cycle over incompleteTaskHolder ul list items

for (let i = 0; i < incompleteTaskHolder.children.length; i++){
  bindTaskEvents(incompleteTaskHolder.children[i],taskCompleted);
}


//cycle over completedTasksHolder ul list items
for (let i = 0; i < completedTasksHolder.children.length; i++){
  bindTaskEvents(completedTasksHolder.children[i],taskIncomplete);
}


// Issues with usability don't get seen until they are in front of a human tester.

//prevent creation of empty tasks.

//Change edit to save when you are in edit mode.