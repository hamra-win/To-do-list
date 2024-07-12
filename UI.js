class UI {
  creartUI(input) {
    const list = document.getElementById("Task-list");
    const TaskList = document.createElement("tr");
    TaskList.innerHTML = `
    <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
   
    <td >${input}</td>
    <td><a href="#" class="delete">Delete Task<a></td>
    `;
    list.appendChild(TaskList);
  }

  RemoveTask(table) {
    table.parentElement.parentElement.remove();
  }
  saveToLocalStorage() {
    const tableRows = document
      .getElementById("table")
      .getElementsByTagName("tbody")[0]
      .getElementsByTagName("tr");
    const data = [];
    for (let i = 0; i < tableRows.length; i++) {
      const Status = tableRows[i].querySelector("#flexCheckDefault").value;
      const Task = tableRows[i].value;
      data.push({ Status, Task });
    }
    localStorage.setItem("tableData", JSON.stringify(data));
  }
}
