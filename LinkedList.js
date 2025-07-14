class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }

    add(data){
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next){
                current = current.next;
            }
            current.next = newNode;            
        }
    }

    print(){
        let current = this.head;
        const result = [];
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        return result.join(' → ');
    }

    toArray(){
        let current = this.head;
        const result =[];
        while (current) {
            result.push(current.data);
            current = current.next;            
        }        
        return result;
    }
}