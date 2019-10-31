const configureStore=()=>{
    const store ={
        state:{
            count:0
        },
    
        getState: function (){
        return this.state
    },

     dispatch : function(action){
         switch(action.type){
             case 'INCREMENT':
                 this.state.count= this.state.count+1
                 return this.state
             
              default : 
                   return this.state   
                }
   
          }
    }
return store
}

const store= configureStore()
console.log(store.getState())

const increment =() =>{
      return {type:'INCREMENT'}
}

console.log(store.dispatch(increment()))