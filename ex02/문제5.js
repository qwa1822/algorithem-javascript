// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib(a){
  // add whatever parameters you deem necessary - good luck!  
    //  d d d d   /**/
  // 1 1 2 3 5
  if(a<=2){
      return 1;
  }
  return fib(a-2)+fib(a-1)
}