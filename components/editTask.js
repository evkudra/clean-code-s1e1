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
    if (!editInput.value.trim().length) {
      alert('Fill in the input field');
      return
    }
    label.innerText = editInput.value;
    editBtn.innerText = "Edit";
    
  } else {
    editInput.value = label.innerText;
    editBtn.innerText = "Save";
  }

  listItem.classList.toggle("editMode");
};

export { editTask };