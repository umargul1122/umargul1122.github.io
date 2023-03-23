document.addEventListener('DOMContentLoaded' , function() {



document.querySelector("form").onsubmit = function (){
    let task = document.querySelector("#task").value
    let li = document.createElement("li")

    li.innerHTML = task
    document.querySelector("#tasklist").append(li)
    return false;
}

 document.querySelector("#removetask").onclick = function () {
    const taskList = document.querySelector("#tasklist");
    const lastTask = taskList.lastElementChild;
    if (lastTask) {
      taskList.removeChild(lastTask);
    }
  }









}
)