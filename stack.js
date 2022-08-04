const { type } = require('os');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const prompt = require('prompt-sync')();

class Queue{
    constructor(){
        this.arr = [];
    }
    enqueue(item){
        this.arr.push(item);
    }
    dequeue(){
        return this.arr.shift();
    }
    display(){
        this.temp = this.arr.slice();
        console.log(this.temp.reverse());
    }
    isEmpty(){
        return this.arr.length === 0;
    }
    top(){
        console.log(this.arr[0]);
    }
}

const main = ()=>{
    var q1 = new Queue();
    var q2 = new Queue();
    var exit = false;
    while(!exit){
        const choice = parseInt(prompt('Enter a choice: '));
        switch(choice) {
            case 1:
                var item = (prompt("Enter item to push into stack: "));
                if(q1.isEmpty() && item.length !==0) 
                    q1.enqueue(item);
                else if(item.length !==0){
                    q2.enqueue(item);
                    while(!q1.isEmpty()){
                        q2.enqueue(q1.dequeue())
                    }
                    [q1,q2] = [q2,q1];
                }
                break;
            case 2:
                if(q1.isEmpty())
                    console.log('Stack is Empty');
                else
                    console.log(q1.dequeue());
                break;
            case 3:
                q1.display();
                break;
            case 4:
                q1.top();
                break;
            case 5:
                exit = true;
                break;
        }
    }
    process.exit();
}
console.log('Enter a choice: ');
console.log('1 to Push into Stack');
console.log('2 to Pop Out from Stack');
console.log('3 to Display to Stack');
console.log('4 to return top element from Stack');
console.log('5 to exit');
main();