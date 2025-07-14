const readline = require("readline");
const ClientManager = require("./ClientManager");
const { type } = require("os");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const manager = new ClientManager();

function menu() {
  console.log("\n=== Insurance CLI Tracker ===");
  console.log("1. Add client");
  console.log("2. View all clients");
  console.log("3. Filter clients by policy type");
  console.log("4. View claim progress for client");
  console.log("5. Advance claim step");
  console.log("6. View Time for policy to expire");
  console.log("7. Exit");
  rl.question("choose an option:", handleMenu);
}

function handleMenu(option) {
  switch (option) {
    case '1':
      rl.question('Client Name:', (name) => {
        rl.question('Policy Type:', (type) => {
          rl.question('Duration in days:', (days) => {
            manager.addClient(name, type, parseInt(days));
            console.log('✅Client added successfully');
            menu();
          });
        });
      });

      break;
    case '2':
      manager.listClients().forEach((c) => {
        console.log(
          `-${c.name} (${c.policyType}) |Step:${
            c.claimStep
          }|${c.timeLeft()} days left`
        );
      });
      menu();

      break;
    case '3':
        rl.question('Enter policy type to filter:', type =>{
            const filtered = manager.filterByPolicy(type);
            filtered.forEach(c => console.log(`-${c.name} | ${c.claimStep}`));
            menu();
        });

        break;
        case '4':
            rl.question('Enter client name:', name =>{
                const client = manager.findClient(name);
                if(client){
                    console.log(`➡️Claim Step: ${client.claimStep}`);
                }else{
                    console.log('❌Client not found');
                }
                menu();
            });

            break;
            case '5':
                rl.question('Enter client name:', name => {
                    const client = manager.findClient(name);
                    if (client) {
                        client.advanceStep();
                        console.log(`✅ Step advanced to: ${client.claimStep}`);
                    } else {
                        console.log('❌Client not found');
                    }
                    menu();
                });

                case '6':
                    rl.question('Enter client name:', name => {
                        const client = manager.findClient(name);
                        if (client) {
                            console.log(`${client.timeLeft()} days left until policy expires`);                            
                        } else {
                            console.log('❌Client not found');
                        }
                        menu();
                    });

                    break;
                    case '7':
                        default:
                            console.log('❌Invalid option');
                            menu();
  }
}

menu();