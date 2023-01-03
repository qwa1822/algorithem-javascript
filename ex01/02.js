function same(arr1,arr2){
  if(arr1.length!==arr2.length){
    return false;
  }

  for(let i=0; i<arr1.length; i++){
    let correntIndex=arr2.indexOf(arr1[i]**2);
    if(correntIndex===-1){
      return false;
    }
    arr2.splice(correntIndex,1)
  }
  return true;
}

function same2(arr1,arr2){
  let prequncyCount1={};
  let prequncyCount2={};

  
  for(let val of prequncyCount1){
    prequncyCount1[val]=(prequncyCount1[val]||0)+1;
  }
  for(let val of prequncyCount2){
    prequncyCount2[val]=(prequncyCount2[val]||0)+1;
  }
  for(let key in prequncyCount1){
    if(!(key**2 in prequncyCount2)){
      return false;
    }
    if(prequncyCount2[key**2]!==prequncyCount1[key]){
      return false;
    }
  }
  return true;
}

console.log(same([1,2,3,2],[9,1,4,4]));