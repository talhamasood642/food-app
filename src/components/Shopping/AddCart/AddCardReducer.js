export const reducer = (state, action) => {
    if (action.type === "CARD-DELETE") {
        return {
            ...state,
            items: state.items.filter((curElem) => {
                return curElem.id !== action.payload

            })
        }
    }

    return state;

        }