export const AmountReducer = (state = 0,  action) => {
         if (action.type === "ADD-ITEM"){
            return  state + action.payload
           
         }
         else if (action.type === "ADD-ITEM"){
            return  state - action.payload
           
         }
         else{
            return state
         }
} 