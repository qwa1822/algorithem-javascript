// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55 

function recursiveRange(num){
  //1 2 3 4 5 6
if(num===0){
   return 0;
}
   return num+recursiveRange(num-1);
}

