function sum(a, b){
    if(a==0) return b;
    if(b==0) return a;
    var newA = a ^ b;
    var newB = (a & b) << 1;
    return sum(newA, newB);
}

/**
 * 中序遍历的前驱后继节点
 * 实现这个算法的前提是节点有一个parent的指针指向父节点，根节点指向null
 * 
 * 
 *       1
 *    2     3
 * 4    5  6  7
 * 遍历顺序 4 2 5 1 6 3 7
 * 
 * 对于节点2来说，前驱节点是4，按照中序遍历原则，可以得出以下结论
 * 1.如果选取的节点的左节点不为空，那就找该左节点最右的节点。对于节点1来说，它有左节点2
 *    那么节点2的左右节点就是5
 * 2.如果左节点为空，且目标节点是父节点的右节点，那么前驱节点为父节点。对于节点5，没有左节点，
 * 且是节点2的有节点，所以节点2是前驱节点
 * 3.如果左节点为空，且目标节点是父节点的左节点，向上寻找到第一个是父节点的右节点的节点。对于节点5，
 * 没有左节点，且是节点3的左节点，所以向上寻找到节点1，发现节点3是节点1的右节点，所以节点1是节点6的前驱节点
 */

 function predecessor(node){
    if(!node) return;
    //1
    if(node.left){
        return getRight(node.left);
    }else{
        let parent = node.parent;
        // 2 3
        while(parent && parent.right === node){
            node = parent;
            parent = node.parent;
        }
        return parent;
    }
}

function getRight(node){
    if(!node) return;
    node = node.right;
    while(node) node = node.right;
    return node;
}


/**
 * 后继节点
 *  对于后续节点
 *   1.如果有右节点，那就找到该右节点的最左节点
 *   2.如果没有右节点，那就向上遍历直到找到一个节点是父节点的左节点。
 * 
 */

 function successor(node){
     if(!node) return;
     if(node.right){
         return getLeft(node.right);
     }else{
         var parent = node.parent;
         while(parent && parent.left === node){
            node = parent;
            parent - node.parent;
         }
        return parent;
     }
 }

 function getLeft(node){
     if(!node) return;
     node = node.left;
     while(node) node = node.left;
     return node;
 }

 var maxDepth = function(root){
     if(!root) return 0;
     return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
 }

 /**
  * 动态规划
    就是将一个问题拆分为子问题，一般那来说这些子问题都是非常相似的，那么我们可以通过
    只解决一次每个字问题来达到减少计算量的目的。
    一旦得出每个子问题的解，就纯初该结果以便下次使用
  */

  function fib(n){
      if(n < 2 && n >= 0) return n;
      return fib(n-1) + fib(n-2);
  }

  console.log(`fib 10 is:${fib(10)}`);


  function fibd(n){
      let array = new Array(n+1).fill(null);
      array[0] = 0
      array[1] = 1;
      for(let i = 2; i <= n; i++){
          array[i] = array[i=1] + array[i-2];
      }
      return array[n];
  }

  function lis(n){
      if(n.length === 0) return 0;
      let array = new Array(n.length).fill(1);
      for(let i = 1; i < n.length; i++){
          for(let j = 0; j < i; j++){
              if(n[i] > n[j]){
                  array[i] = Math.max(array[i], 1+array[j]);
              }
          }
      }

      let res = 1;
      for(let i = 0; i < array.length; i++){
          res = Math.max(res, array[i])
      }
        console.log(array)
        return res;
  }

  console.log(`lis is ${lis([0,3,4,17,2,8,6,10])}`)