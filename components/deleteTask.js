const deleteTask = function() {
  console.log("Delete Task...");
  
  const listItem = this.parentNode;
  const ul = listItem.parentNode;
      
  ul.removeChild(listItem);
};

export { deleteTask };