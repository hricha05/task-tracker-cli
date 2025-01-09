const fs = require("fs");

// Create todo
const createTodo = (title, todo) => {
    try {
        // Check of the json file exists
        fs.access('todos.json', (err) => {
            // if it does not exist, create a new json file
            if(err){
                fs.writeFileSync('todo.json', JSON.stringify([]))
            }
            // read todo.json if it exists
            const todoBuffer = fs.readFileSync('todo.json');
            // convert it to string
            let dataJSON = todoBuffer.toString();
            // parse the data
            const todos = JSON.parse(dataJSON);

            // check if the todo title exists
            const duplicateTodo = todos.find((todo) => {
                return todo.title === title;
            })

            if(!duplicateTodo) {
                todos.push({
                    title: title,
                    todo: todo,
                });
                dataJSON = JSON.stringify(todos);
                fs.writeFileSync("todo.json", dataJSON);
                console.log("New Todo Added");
            } else {
                console.log("Todo title has already been used");
            }
        })
    } catch(error) {
        console.log("An error occurred, try again")
    }
};

// list todos
const listTodo = () => {
    try {
        // read from the todos.json if it exists
        const todoBuffer = fs.readFileSync("todos.json");
        // convert it to string
        let dataJSON = todoBuffer.toString();
        // parse data
        const todos = JSON.parse(dataJSON);

        console.log(todos)

    } catch(error){
        console.log("An error occurred")
    }
}
// display on todo

// delete todo