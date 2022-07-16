window.addEventListener('load', () => {
    const form = document.querySelector('#newTodoForm');
    const input = document.querySelector('#newTodoInput');
    const list_el = document.querySelector('#todoList');
    const btnEdit = '<i class="fa-solid fa-pen"></i>';
    const btnDelete = '<i class="fa-solid fa-trash-can"></i>';
    const btnSave = '<i class="fa-solid fa-check"></i>';
    const done = document.querySelector('#text');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const todo = input.value;

        if(!todo) {
            swal.fire({
                icon: 'error',
                title: 'Please Fill'
            });
            return;
        } else {form.reset();}

        const todo_el = document.createElement("div");
        todo_el.classList.add("todo");

        const todo_content_el = document.createElement("div");
        todo_content_el.classList.add("content");
        todo_el.appendChild(todo_content_el);

        const todo_input_el = document.createElement("input");
        todo_input_el.classList.add("text");
        todo_input_el.type = "text";
        todo_input_el.value = todo;
        todo_input_el.setAttribute("readonly", "readonly")
        todo_content_el.appendChild(todo_input_el);

        const todo_actions_el = document.createElement("div");
        todo_actions_el.classList.add("actions");

        const todo_edit_el = document.createElement("span");
        todo_edit_el.classList.add("edit");
        todo_edit_el.innerHTML = btnEdit;

        const todo_delete_el = document.createElement("span");
        todo_delete_el.classList.add("delete");
        todo_delete_el.innerHTML = btnDelete;

        todo_actions_el.appendChild(todo_edit_el);
        todo_actions_el.appendChild(todo_delete_el);

        todo_el.appendChild(todo_actions_el)
        list_el.appendChild(todo_el);
        
        // Todo Is Done
        todo_content_el.addEventListener("click", () => {
            todo_input_el.classList.toggle("done");
        })

        // Edit Todo
        todo_edit_el.addEventListener("click", () => {
            if (todo_edit_el.innerHTML == btnEdit){
                todo_input_el.removeAttribute("readonly");
                todo_input_el.focus();
                todo_edit_el.innerHTML = btnSave;
            } else {
                todo_input_el.setAttribute("readonly", "readonly");
                todo_edit_el.innerHTML = btnEdit;
            }
        })

        // Delete Todo
        todo_delete_el.addEventListener("click", () => {
            list_el.removeChild(todo_el);
        })
    })
})