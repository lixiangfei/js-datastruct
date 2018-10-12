/**
 * 树有多种结构，二叉树是树中最常见的结构
 * 二叉树拥有一个根节点，每个节点至多拥有两个子节点，为左节点和右节点。树的最底层节点称
 * 为叶节点，当一颗树的叶数量为满时，该树称为满二叉树。
 * 
 * 
 * 二分搜索树
 *  二分搜索树也是二叉树，拥有二叉树的特性。但是区别在于二分搜索树每个节点的值
 * 都比它的左子树的值大，比右子树的值小。
 * 
 * 这种存储方式很适合用于数据搜索。
 */
var {Queue} =  require('./queue.js');
 class Node{
     constructor(value){
         this.value = value;
         this.left = null;
         this.right = null;
     }
 }

 class BST{
     constructor(){
         this.root = null;
         this.size = 0;
     }

     getSize(){
         return this.size;
     }

     isEmpty(){
         return this.size === 0;
     }

     addNode(v){
         this.root = this._addChild(this.root, v);
     }

     //添加节点
     _addChild(node, v){
        if(!node){
            this.size++;
            return new Node(v);
        }

        if(node.value > v){
            node.left = this._addChild(node.left, v);
        }else if(node.value < v){
            node.right = this._addChild(node.right, v);
        }
        return node;
     }

     /**
      * 递归先序遍历
        先访问 中节点->左节点->右节点
      */

      preTraversal(){
          this._pre(this.root);
      }

      _pre(node){
          if(node){
              console.log(node.value);
              this._pre(node.left);
              this._pre(node.right);
          }
      }

      pre(root){
        if(root){
            let stack = [];
            stack.push(root);
            while(stack.length > 0){
                root = stack.pop();
                console.log(root.value);
                if(root.right){
                    stack.push(root.right);
                }
                if(root.left){
                    stack.push(root.left);
                }
            }
        }
      }

      mid(root){
          if(root){
              let stack = [];
                // 所以首先应该先把最左边节点遍历到底依次 push 进栈
                // 当左边没有节点时，就打印栈顶元素，然后寻找右节点
                // 对于最左边的叶节点来说，可以把它看成是两个 null 节点的父节点
              while(stack.length > 0 || root) {
                  if(root){
                      stack.push(root);
                      root = root.left;
                  }else{
                      root = stack.pop();
                      console.log(root);
                      root = root.right;
                  }
              } 
            }
      }

      pos(root){
        if(root){
            let stack1 = [];
            let stack2 = [];
            // 后序遍历是先左再右最后根
            // 所以对于一个栈来说，应该先 push 根节点
            // 然后 push 右节点，最后 push 左节点
            stack1.push(root);

            while(stack1.length > 0){
                root = stack1.pop();
                stack2.push(root);
                if(root.left){
                    stack1.push(root.left);
                }
                if(root.right){
                    stack1.push(root.right);
                }
            }
            while (stack2.length > 0) {
                console.log(s2.pop());
            }

        }
      }
      midTraversal(){
          this._mid(this.root);
      }

      _mid(node){
          if(node){
              this._mid(node.left);
              console.log(node.value);
              this._mid(node.right);
          }
      }

      backTraversal(){
          this._back(this.root);
      }

      _back(node){
        if(node){
            this._back(node.left);
            this._back(node.right);
            console.log(node.value);
        }
      }


    //   广度遍历
    breadthTraversal(){
        if(!thi.root) return null;
        let q = new Queue();
        //将根节点入队
        q.enQueue(this.root);

        while(!q.isEmpty()){
            //队首出队，判断是否有左右子树
            let n = q.deQueue();
            console.log(n.value);
            if(n.left) q.enQueue(n.left);
            if(n.right) q.enQueue(n.right);
        }
    }

    //寻找最大值，最小值，二分搜索树的特性，所以最小值在根左边，最大值在根右边
    getMin(){
        return this._getMin(this.root).value;
    }

    _getMin(node){
        if(!node.left) return node;
        return this._getMin(node.left);
    }

    getMax(){
        return this._getMax(this.root).value;
    }

    _getMax(){
        if(!node.right) return node;
        return this._getMax(node.right);
    }

    //向上取整和向下取整，向下取整，根据树的特性，值在根节点左侧。
    floor(v){
        let node = this._floor(this.root, v);
        return node? node.value :null;
    }

    _floor(node, v){
        if(!node) return null;
        if(node.value === v) return v;
        if(node.value > v){
            return this._floor(node.left, v);
        }
        let right = this._floor(node.right, v);
        if(right) return right;
        return node;
    }
 }