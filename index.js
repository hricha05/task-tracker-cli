const yargs = require("yargs");
const utils = require("./utils.js");

yargs.command({
    command: "add",
    describe: "Add a new todo",
    builder: {
        title: {
            describe: "Todo title",
            type: "string",
            demandOption: true,
        },
        todo: {
            describe: "Todo Body",
            type: "string",
            demandOption: true,
        },
    },
    handler: function (argv) {
        utils.createTodo(argv.title, argv.todo)
    },
});

yargs.command({
    command: "list",
    describe: "Get all Todos",
    handler: function () {
        utils.listTodo()
    },
});