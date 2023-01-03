

function sameFrequncy(arr1,arr2){
  let strarr1=arr1.toString();
 let strarr2=arr2.toString();

  let prequncy1={};
  let prequncy2={};
  for(let i=0; i<strarr1.length; i++){
    prequncy1[strarr1[i]]=(prequncy1[strarr1[i]]||0)+1;
  }
  for(let j=0; j<strarr2.length; j++){
    prequncy2[i]=(prequncy[strarr2[i]]||0)+1;
  }

  for(let key of prequncy1){
    if(prequncy1[key]!==prequncy2[key]) return false;
  }
  return true;
}