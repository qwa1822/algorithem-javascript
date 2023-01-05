

function outer(arr){

  let outerScopedVariable=[];

  function helper(helperInput){
    if(helperInput.length===0){
      return;
    }
    if(helperInput[0]%2!==0){
      outerScopedVariable.push(helperInput[0])
    }

    helper(helperInput.slice(1))
  }
  helper(arr)

  return outerScopedVariable;
}

console.log(outer[1,3,4,5,6,7,8,2,3,1,4]);

