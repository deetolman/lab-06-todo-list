const addTodo = {
    init(onAdd) {
        const form = document.getElementById('add-form');
        
        form.addEventListener('submit', function(event) {
            event.preventDefault();
        
            const elements = form.elements;

            const todo = {
                task: elements.task.value,
                date: new Date (elements.date.value),
            };
            onAdd(todo);
        });
    }
};

export default addTodo;