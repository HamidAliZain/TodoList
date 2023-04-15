import inquirer from 'inquirer';
let con = true;
async function Todo() {
    const array = [];
    let condition = true;
    while (condition) {
        const choose = await inquirer.prompt([
            {
                name: "choices",
                type: 'list',
                message: '',
                choices: ['add todo', 'exit']
            },
        ]);
        if (choose.choices == "add todo") {
            const addTodo = await inquirer.prompt([
                {
                    name: "todo",
                    type: 'input',
                    message: 'Write the Text',
                },
            ]);
            array.push(addTodo.todo);
            console.log(array);
        }
        else {
            condition = false;
        }
    }
}
Todo();
