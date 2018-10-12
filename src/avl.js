class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}

/**
 * 二分搜索树实际在业务中受到限制，因为不是严格的o(logN),在极端情况下会退化
 * 成链表，比如加入一组升序的数字就会造成这种情况
 * 
 * AVL数改进了二分搜索树，在AVL数中任意节点的左右字数的高度差都不大于1，这样保证
 * 了时间复杂度是严格的o(logN),基于此，对AVL数增加或删除节点时可能需要旋转
 * 树来达到高度的平衡。
 * 
 * AVL数改进了二分搜索树
 * 
 * 对于AVL数，添加节点会有四种情况  左左  右右  左右 右左
 *                               右旋   左旋   需要两次旋转
 * 
 * 
 */

 class AVL{
     constructor(){
         this.root = null;
     }

     addNode(v){
         this.root = this._addChild(this.root, v);
     }

     _addChild(node, v){
         if(!node){
             return new Node(v);
         }

         if(node.value > v){
             node.left = this._addChild(node.left, v);
         }else if(node.value < v){
             node.right = this._addChild(node.right, v);
         }else{
             node.value = v;
         }

         node.height = 1 + Math.max(this._getHeight(node.left), this._getHeight(node.right));

         let factor = this._getBalanceFactor(node);

         //当需要右旋时，根节点的左树一定比右树高度高
         if(factor > 1 && this._getBalanceFactor(node.left) >= 0){
             return this._rightRotate(node);
         }
         //当需要左旋时，根节点的左树一定比右数高度矮
         if(factor < -1 && this._getBalanceFactor(node.right) <= 0){
            return this._leftRotate(node);
         }

         //左右
         //节点的左树比右树高，并且节点的左树的右树比节点的左树的左树高
         if(factor > 1 && this._getBalanceFactor(node.left) < 0){
             node.left = this._leftRotate(node.left);
             return this._rightRotate(node);
         }
        //右左
        //节点的左树比右树矮，并且节点的右树的右树比节点的右树的左树矮
         if(factor < -1 && this._getBalanceFactor(node.right) > 0){
             node.right = this._rightRotate(node.right);
             return this._leftRotate(node)
         }
            return node;
     }

     _getHeight(node){
         if(!node) return 0;
         return node.height;
     }

     _getBalanceFactor(node){
         return this._getHeight(node.left) - this._getHeight(node.right);
     }
       
     _rightRotate(node){
         //旋转后新根节点
         let newRoot = node.left;
         let moveNode = newRoot.right;

         newRoot.right = node;
         node.left = moveNode;

         node.height =
                1 + Math.max(this._getHeight(node.left), this._getHeight(node.right))
         newRoot.height =
            1 +
            Math.max(this._getHeight(newRoot.left), this._getHeight(newRoot.right))
         return newRoot;
     }
    
     _leftRotate(node){
         let newNode = node.right;
         let moveNode = newRoot.left;
         newRoot.let = node;
         node.right = moveNode;
            // 更新树的高度
         node.height =
            1 + Math.max(this._getHeight(node.left), this._getHeight(node.right))
         newRoot.height =
         1 +
            Math.max(this._getHeight(newRoot.left), this._getHeight(newRoot.right))

         return newRoot

     }
 }


