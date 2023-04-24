const taskInput = document.getElementById("new-task");
const addButton = document.getElementById("add-button");
const incompleteTaskHolder = document.getElementById("incompleteTasks");
const completedTasksHolder = document.getElementById("completed-tasks");

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
  deleteButtonImg.src = "./images/remove.svg";
  deleteButton.appendChild(deleteButtonImg);
      
  
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);
  return listItem
};

export { createNewTaskElement };