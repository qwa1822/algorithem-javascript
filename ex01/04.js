

function sumZero(sum1){
  // 전체구조
  for(let i=0; i<sum1.length; i++){
    // 그다음순서 순환구조 
    for(let j=i+1; j<sum1.length; j++){
      if(sum1[i]+sum1[j]===0){
        return[sum1[i],[sum1[j]]]
      }
    }
    
  }
}


function sumzero2(arr){
  let left=0;
  let right=arr.length-1;
  while(left<right){
    let sum=arr[left]+arr[right];
    if(sum===0){
      return [arr[left],arr[right]];
    }else if(sum>0){
      right--;
    } else{
      left++;
    }
  }
}

console.log(sumZero([-4,-3,-2,-1,0,1,2,5]));