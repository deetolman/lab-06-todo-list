function makeTodo(todo) {
    const html = /*html*/`
        <li class="todo">
            <h3 class="todo ${new Date(todo.date) < Date.now() ? 'overdue' : ''}">
            ${todo.date.toLocaleString()} ${todo.task}
            </h3>
            
            <button class="danger">Remove</button>
        </li>
        `;
    const template = document.createElement('template');
    
    template.innerHTML = html;
        
    return template.content;
}

const list = document.getElementById('todos');
    
const todoList = {
    init(todos, onRemove) {
        for(let i = 0; i < todos.length; i++) {
            todoList.add(todos[i]);
        }
        todoList.onRemove = onRemove;
    },
    add(todo) {
        const dom = makeTodo(todo);
        const removeButton = dom.querySelector('button');
        const listItem = dom.querySelector('li');

        removeButton.addEventListener('click', function() {
            todoList.onRemove(todo);
            listItem.remove();
        });
        list.appendChild(dom);
    }
};


export default todoList;