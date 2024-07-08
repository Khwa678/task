document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("Form");
    const input = document.getElementById("Input");
    const tasklist = document.getElementById("Task_list");

    console.log(form, input, tasklist);

    form.onsubmit = (e) => {
        e.preventDefault();
        addTask();
    };

    function addTask(task) {
        let taskValue = input.value;

        if (task) {
            taskValue = task.text;
        }

        console.log(taskValue);

        if (taskValue) {
            displayTask(taskValue);
        }
    }

    function displayTask(taskValue) {
        const newTask = document.createElement("li");
        newTask.innerHTML = `<span>${taskValue}</span><span class="delete_task">&#10060;</span>`;

        newTask.querySelector('.delete_task').onclick = (e) => {
            e.stopPropagation();
            deleteTask(newTask);
        };

        newTask.onclick = () => {
            newTask.classList.toggle('completed');
            updateTaskDisplay(newTask, taskValue);
        };

        tasklist.appendChild(newTask);
        input.value = "";
    }

    function updateTaskDisplay(taskElement, taskValue) {
        const taskText = taskElement.querySelector('span:first-child');
        if (taskElement.classList.contains('completed')) {
            taskText.innerHTML = `${taskValue} &#10004;`;
        } else {
            taskText.innerHTML = taskValue;
        }
    }

    function deleteTask(taskElement) {
        tasklist.removeChild(taskElement);
    }
});