const readline = require('readline');
const ClientManager = require('./ClientManager');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const manager = new ClientManager();

function menubar(){
    console.log('\n=== Insurance CLI Tracker ===');
    console.log('1. Add client');
    console.log('2. View all clients');
    console.log('3. Filter clients by policy type');
    console.log('4. View claim progress for client');
    console.log('5. Advance claim step');
    console.log('6. View Time for policy to expire');
    console.log('7. Exit');
    rl.question('choose an option:', handleMenu);
}