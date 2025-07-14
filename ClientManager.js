class Client{
    constructor(name, policy, durationDays){
        this.name = name;
        this.policyType = this.policyType;
        this.startDate = new Date();
        this.durationDays = durationDays;
        this.claimStep = 'Submitted';
        this.claimSteps = ['Submitted', 'Verified','Approved','Paid';]
    }

    advanceStep(){
        const index = this.claimSteps.indexOf(this.claimStep);
        if(index < this.claimSteps.length -1){
            this.claimStep = this.claimSteps[index + 1];
        }
    }

    timeLeft(){
        const now = new Date();
        const end = new Date(this.startDate);
        end.setDate(end.getDate() + this.durationDays);
        const diff = end - now;
        return Math.ceil(diff/1000 * 60 *60 * 24); // Convert milliseconds to days
    }
}

class ClientManager{
    constructor(){
        this.clients = [];
    }

    addClient(){
        const client = new Client(name, policyType, durationDays);
        this.clients.push(client);
    }

    listClients(){
        return this.clients;
    }

    filterByPolicy(policyType){
        return this.clients.filter(c => c.policyType === policyType);
    }

    findName(name){
        return this.clients.find(c => c.name.toLowerCase() === name.toLowerCase());
    }

}

module.exports = ClientManager;