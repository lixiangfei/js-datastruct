
/**
 * 单链队列 
 */

class Queue{
    constructor(){
        this.queue = [];
    }

    enQueue(item){
        this.queue.push(item);
    }

    deQueue(){
        return this.queue.shift();
    }

    getHeader(){
        return this.queue[0];
    }

    getLength(){
        return this.queue.length;
    }

    isEmpty(){
        return this.getLength() === 0;
    }
}

/**
 * 单链队列出队列操作需要o(n),引入循环队列，循环队列出队草走平均是o(1)
 * https://baijiahao.baidu.com/s?id=1597253471156873230&wfr=spider&for=pc
 */

 class SqQueue{
     constructor(length){
        this.queue = new Array(length + 1);
        this.first = 0;
        this.last = 0;
        this.size = 0;
    }

    enQueue(item){
        if(this.first === (this.last+1) % this.queue.length){
            this.resize(this.getLength() *2 +1);
        }
        this.queue[this.last] = item;
        this.size ++;
        this.last = (this.last + 1) % this.queue.length;
    }

    deQueue(){
        if(this.isEmpty()){
            throw Error('Queue is Empty');
        }
        var r = this.queue[this.first];
        this.queue[this.first] = null;
        this.first = (this.first + 1) % this.queue.length;
        this.size --;
        //队列空间等于总长度四分之一时，且不为2时缩小总长度为当前的一半
        if(this.size === this.getLength()/4 && this.getLength() /2 !== 0){
            this.resize(this.getLength()/2);
        }
        return r;
    }

    getHeader(){
        if(this.isEmpty()){
            throw new Error('Queue is empty');
        }
        return this.queue[this.first];
    }

    getLength(){
        return this.queue.length -1;
    }

    isEmpty(){
        return this.first === this.last;
    }

    resize(length){
        let q = new Array(length);
        for(let i = 0; i < length; i++){
            q[i] = this.queue[(i+this.first) % this.queue.length];
        }
        this.queue = q;
        this.first = 0;
        this.last = this.size;
    }
 }

 module.exports = {Queue, SqQueue};