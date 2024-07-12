const ui = new UI();
const btn = document.getElementById("button-addon2");
const Task = document.getElementById("input");
const table = document.getElementById("Task-list");

btn.addEventListener("click", (e) => {
  ui.creartUI(Task.value);
  ui.saveToLocalStorage();
  Task.value = "";
});

table.addEventListener("click", (e) => {
  if (e.target.className === "delete") {
    ui.RemoveTask(e.target);
  }
});
