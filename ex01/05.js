function countUniqueValues(arr){
  let i=0;
  for(let j=1; j<arr.length; j++){
    
    if(arr[i]!==arr[j]){
      i++;
      arr[i]=arr[j]

    }
  }
}

[1,1,2,3,3,4,5,6,6,7]