/**
 * trie 前缀树或者字典树，是一种有序树，用于保存关联数组，其中的键通常是字符串
 *特点：
  1.根节点代表空字符串，每个节点都有N条连接，每条连接代表一个字符
  2.节点不存储字符，只有路径才存储，这点和其他树结构不同
  3.从根节点开始到任意一个节点，将沿途经过的字符连接起来就是该节点对应的字符串
 *
 */

class TridNode{
    constructor(){
        //代表每个字符经过节点的次数
        this.path = 0;
        //代表到该节点的字符串有几个
        this.end = 0;
        //链接
        this.next = new Array(26).fill(null);
    }
}

class Trie{
    constructor(){
        this.root = new TridNode();
    }

    insert(str){
        if(!str) return;
        let node = this.root;
        for(let i = 0; i < str.length; i++){
            var index = str[i].charCodeAt() - 'a'.charCodeAt();
            if(!node.next[index]){
                node.next[index] = new TridNode();
            }
            node.path += 1;
            node = node.next[index];
        }
        node.end += 1;
    }

    search(str){
        if(!str) return;
        let node = this.root;
        for(let i = 0; i < str.length; i++){
            let index = str[i].charCodeAt() - 'a'.charCodeAt();
            if(!node.next[index]){
                return 0;
            }
            node = node.next[index];
        }
        return node.end;
    }

    delete(str){
        if(!this.search(str)) return;
        let node = this.root;
        for(let i = 0; i < str.length; i++){
            let index = str[i].charCodeAt() - 'a'.charCodeAt()
            // 如果索引对应的节点的 Path 为 0，代表经过该节点的字符串
        // 已经一个，直接删除即可
            if(--node.next[index].path == 0){
                node.next[index] = null;
                return;
            }
            node = node.next[index];
        }
        node.end -= 1;
    }
}