import DATA from './data.js';
const term = new VanillaTerminal({
    commands: {
        ls: (terminal, parameters) => {
            terminal.output('about.txt &emsp; projects.txt');
            terminal.setPrompt('[root]');
        },
        cat: (terminal, parameters) => {
            terminal.output(DATA[parameters[0]]);
            terminal.setPrompt('[root]');
        },
        async: (terminal) => {
            terminal.idle();
            setTimeout(() => terminal.output('Async 300'), 300);
            setTimeout(() => terminal.output('Async 1300'), 1300);
            setTimeout(() => {
                terminal.output('Async 2000');
                terminal.setPrompt();
            }, 2000);
        },
    },

    welcome: 'Get starting by running <code>help</code>',
    prompt: '[root]',
    separator: '$',
});

term.onInput((command, parameters) => {
});

     
