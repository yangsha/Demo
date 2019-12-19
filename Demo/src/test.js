 
  
// var getPermutation = function(n, k) {
//   // let i;
//   // // initial factorial array => 0!,1!,2!,...,(n-1)!
//   // let factorials = [1];
//   // for (i = 1; i < n; i++) {
//   //   factorials[i] = i * factorials[i-1];
//   // }
//   // // initial array => 1,2,3,...,n
//   // let arr = [];
//   // for (i = 1; i <= n; i++) {
//   //   arr.push(i);
//   // }
//   // let result = '';
//   // while(k >1) {
//   //   n -= 1;
//   //   let cur = Math.floor((k-1) / factorials[n]);
//   //   result += arr[cur];
//   //   arr.splice(cur, 1);
//   //   k -= cur*factorials[n];
//   // }
//   // return result + arr.join('');
//    let factorials = [1]
//    for(let i=1;i<n;i++){
//      factorials[i] = i*factorials[i-1]
//    }
//    let arr =[]
//    for(let i=0;i<n;i++){
//      arr.push(i+1)
//    }
//    let result = ''
//    while(k>1){
//      n-=1
//      let current = Math.floor((k-1)/factorials[n])
//      result+=arr[current]
//      arr.splice(current,1)
//      k-=current*factorials[n]
//    }
//    return result+arr.join('')
// };
//
// console.log(getPermutation(4,9
// ))


var uniquePathsWithObstacles = function(obstacleGrid) {
  if(obstacleGrid.length===0||obstacleGrid.length===1&&obstacleGrid[0].length===0) return 0
  if(obstacleGrid[0][0]===1) return 0
  obstacleGrid[0][0]=1
  for(let i=1;i<obstacleGrid.length;i++){
    obstacleGrid[i][0] = obstacleGrid[i][0]===1?0:obstacleGrid[i-1][0]===0?0:1;
  }
  for(let j=1;j<obstacleGrid[0].length;j++){
    obstacleGrid[0][j] = obstacleGrid[0][j]===1?0:obstacleGrid[0][j-1]===0?0:1;
  }
  for(let i=1;i<obstacleGrid.length;i++){
    for(let j=1;j<obstacleGrid[0].length;j++){
      obstacleGrid[i][j] = obstacleGrid[i][j]===1?0:obstacleGrid[i-1][j]+obstacleGrid[i][j-1]
    }
  }
  return obstacleGrid[obstacleGrid.length-1][obstacleGrid[0].length-1]
};


var minPathSum = function(grid) {
  if(grid.length===0||grid.length===1&&grid[0].length===0){
    return 0
  }
  let m = grid.length;
  let n = grid[0].length;
  for(let i=1;i<n;i++){
    grid[0][i] += grid[0][i-1]
  }
  for(let j=1;j<m;j++){
    grid[j][0]+=grid[j-1][0];
  }
  for(let i=1;i<m;i++){
    for(let j=1;j<n;j++){
      grid[i][j] += Math.min(grid[i-1][j],grid[i][j-1])
    }
  }
  return grid[m-1][n-1]
};

var removeDuplicates = function(nums) {
  if(nums.length<=2){
    return nums.length
  }
  let count = 1;
  let point = 1;
  for(let i=1;i<nums.length;i++){
    if(nums[i]!==nums[i-1]){
      nums[point++] = nums[i]
      count=1
    }else if(count<2){
      nums[point++]=nums[i]
      count++
    }
  }
  return point
};

var search = function(nums, target) {
  if(nums.length===0){
    return false
  }
  if(nums.length===1){
    return nums[0]===target
  }
  let left = 0,right=nums.length-1
  while(left<=right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return true
    }
    if(nums[left]<nums[mid]){
      if(target<nums[mid]&&target>=nums[left]){
        right = mid-1
      }else{
        left = mid+1
      }
    } else if(nums[left]===nums[mid]){
      left++
    }else {
      if(target>nums[mid]&&target<=nums[right]){
        left=mid+1
      }else{
        right = mid-1
      }
    }
  }
  return false
};
console.log(search([1,1,3,1],3))
//删除列表中的重复元素1，序列遍历，遇到重复就删除
var deleteDuplicates = function(head) {
  let dummy = new ListNode(null);
  dummy.next = head;
  let point = dummy;
  while(point.next!==null){
    let prevPoint = point;
    point =  point.next;
    if(point.val===prevPoint.val){
      prevPoint.next = point.next
      point=prevPoint
    }
  }
  return dummy.next
};
//删除链表中的重复元素2
var deleteDuplicates2 = function(head) {
  let dummy = new ListNode(null)
  dummy.next = head
  let point = dummy
  while(head!==null&&head.next!==null){
    let equal = false
    while(head.next!==null&&head.val===head.next.val){
      head = head.next;
      equal = true;
    }
    if(equal){
      point.next = head.next;
      equal = false;
    } else{
      point = head;
    }

    head = head.next;
  }
  return dummy.next
};
//1 2 3 3 4 4 5 
var partition = function(head, x) {
  let left = new ListNode(null);
  let point1 = left;
  let right = new ListNode(null);
  let point2 = right;
  while(head!==null){
    if(head.val<x){
      point1.next = head;
      point1 = point1.next;
    }else{
      point2.next =  head;
      point2 = point2.next;
    }
    head = head.next;
  }
  point2.next = null;
  point1.next = right.next;
  return left.next;
};


var rob = function(nums) {
    if(nums.length<=0){
      return 0
    }
    if(nums.length===1){
      return nums[0]
    }
    let pre = nums[0];
    let curr = Math.max(nums[0],nums[1]);
    for(let i=2;i<nums.length;i++){
       let temp = curr;
       curr = Math.max(pre+nums[i],curr);
       pre = temp;
    }
   return curr
};
//console.log(rob([2,1,1,2]))

// for i in range(20):
// index = df.iloc[i,11].find('。')
// string = df.iloc[i,11][0:index+1]
// print(string)
// result=[]
// # 规则1 本品包含
// if('含'in string):
// start = string.find('含')
// if ('：' in string):
// start = string.find('：')
// end = string.find('。')
// string =  string[start+1:end]
// result = string.split('、') if  '、' in string else string.split('，')
// number = ['0','1','2','3','4','5','6','7','8','9']
// for i in range(len(result)):
// for j in range(len(result[i])):
// if(result[i][j] in number):
// result[i] = result[i][0:j]
// break
//
//
// # 规则2  本品主要成分为
// elif('为'in string and '辅料为' not in string):
// punctuation = [',','。']
// start = string.find('为')
// for i in range(len(string)):
// if(string[i]=='，'or string[i]=='。'):
// end = i
// break
// result.append(string[start+1:end])
//
// # 规则3  没有前缀 直接成分实体
// else:
// string = string[0:index]
// if('辅料为' in string):
// index = string.find('辅料为')
// string = string[0:index-1]
// result = string.split('、')
// file = 'result/result-component/'+str(i)+'.txt'
// with open(file,'w',encoding='utf-8') as f:
// f.write(('\n').join(result))
// print(('\n').join(result))
// print('---------------')
// print('成分抽取结束')        
 

//





//console.log(singleNumber([4,1,2,1,2]))


var singleNumber2 = function(nums) {
  let set = new Set()
  let sum = 0;
  let result = 0
  for(let i=0;i<nums.length;i++){
    sum+=nums[i]
    set.add(nums[i])
  }
  for(let number of set){
    result+=number
  }
  return ((result*3-sum)/2)
};
console.log(singleNumber2([0,1,0,1,0,1,99]))












