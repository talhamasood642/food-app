export const reducer = (state, action) => {

     if (action.type === "REMOVE-ITEM") {
          return {
               ...state,
               items: state.items.filter((curElem) => {
                                 return curElem.id !== action.payload
               })
          }
     }
        if (action.type === "INCREAMENT") {
          const curElem = state.items.map((curElem)=>{
             if(curElem.id === action.payload){
               return{
                     ...curElem,
                    quantity: curElem.quantity + 1

               }
          }

             return curElem;
          })

          return{
               ...state,
               items:curElem
          }
    
     }


     if (action.type === "DECREAMENT") {
          const decItem = state.items.map((curItem) => {
               if (curItem.id === action.payload) {
                    return {
                         ...curItem,
                         quantity: curItem.quantity - 1
                    }
               }
               return curItem;
          })
               .filter((curItem) => curItem.quantity !== 0)
          return {
               ...state,
               items: decItem,
          }
     }

     

if (action.type === "CLEAR-CART"){
     return {
          ...state,
          items: []
     }
}



 if(action.type === "GET_TOTAL"){
     const {totalItem , totalAmount} = state.items.reduce((accum , curValue)=>{
          const {quantity , price} = curValue;
          const total = price * quantity;
          accum.totalAmount += total
          accum.totalItem +=  quantity
          return accum
     },{
          totalItem:0,
          totalAmount:0
     })
     return{...state , totalItem ,totalAmount}
 }
     return state;

}