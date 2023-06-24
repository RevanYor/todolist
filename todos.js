let input = prompt('What would you like to do?');
const todos = ['Collect stuff','Clean room'];
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('************')
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos}`);
        }
        console.log('************')
    } else if (input === 'new') {
        const newTodo = prompt('Ok, what is the new todo?');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list!`)
    } else if (input === 'delete') {
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
        console.log(`Ok, deleted &{deleted}`);
        } else {
            console.log('Unkown index')
        }
        
    }
    input = prompt('What would you like to do?')
}

console.log('Ok, quit the app!')