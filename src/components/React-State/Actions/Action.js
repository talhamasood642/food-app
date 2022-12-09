export  const addincreament = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "ADD-ITEM",
            payload: amount
        })
    }
}
    
    





export const adddecreament = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "REMOVE-ITEM",
            payload: amount
        })
    }
}