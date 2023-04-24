import { editTask } from "./editTask.js";
import { deleteTask } from "./deleteTask.js";


const bindTaskEvents = (taskListItem,checkBoxEventHandler) => {
  console.log("bind list item events");
  
  const checkBox = taskListItem.querySelector(".checkbox");
  const editButton = taskListItem.querySelector("button.edit");
  const deleteButton = taskListItem.querySelector("button.delete");
  
    
  editButton.addEventListener('click', editTask);
  deleteButton.addEventListener('click', deleteTask);

  //Bind taskCompleted to checkBoxEventHandler.
  checkBox.onchange = checkBoxEventHandler;
};

export { bindTaskEvents };