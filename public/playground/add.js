/*function add()
  return function(){
        console.log('returned function called ')
  }
  console.log(add())
  */

  function add(){
      return function(n1,n2){
          return n1+n2
      }

  }
  console.log(add()(5,7))