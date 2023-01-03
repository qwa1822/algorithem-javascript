function add(arr1,num){

    if(num>arr1.length){
      return null;
    }

    let max=-Infinity;
    for(let i=0; i<arr1.length-num+1; i++){
      temp=0;
      for(let j=0; j<num; j++){
        temp+=arr1[i+j];
      }
      if(temp>max){
        max=temp;
      }
      console.log(temp,max);
    }
    return max;
}

console.log(add([0,1,31,33,1,2],3));


function maxSubarraySum(arr,num){
  let maxSum=0;
  let tempSUm=0;
  if(arr.length<num) return null;
  for(let i=0; i<num; i++){
    maxSum+=arr[i];
  }
  tempSUm=maxSum;

  for(let i=num; i<arr.length; i++){
    tempSUm=tempSUm-arr[i-num]+arr[i];
    maxSum=Math.max(maxSum,tempSum);
  }
  return maxSum;
}