class Stack{
    constructor(){
        this.stack = [];
    }

    push(item){
        this.stack.push(item);
    }

    pop(){
        return this.stack.pop();
    }

    getCount(){
        return this.stack.length;
    }

    isEmpty(){
        return this.getCount() === 0;
    }
}

function test(str){
    let map = {
        '(':-1,
        ')':1,
        '[':-2,
        ']':2,
        '{':-3,
        '}':3
    }
    let stack = [];
    for(let i = 0; i < str.length; i++){
        if(map[str[i]] < 0){
            stack.push(str[i]);
        }else{
            let last = stack.pop();
            if(map[last] + map[str[i]] != 0) return false;
        }
    }
    if(stack.length > 0) return false;
    return true;
}

console.log(test('([]())'));