export const initialState = {
    basket: [],
    user: null,
}

export const getBasketTotal = (basket) => 
basket?.reduce((amount, item) => item.price + amount, 0)

const reducer = (state, action) => {
    console.log(action)
    switch(action.type) {
        case 'ADD_TO_BASKET':
            //Logic for add item to basket
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case 'REMOVE_FROM_BASKET':
            //Logic for removeing item to basket
            let newBasket = [...state.basket]

            const index = state.basket.findIndex((basketItem) => 
            basketItem.id === action.id)

            if(index >= 0) {
                // item exist in basket, remove it...
                newBasket.splice(index, 1)
            } else {

            }

            return { ...state, basket: newBasket };
        default:
            return state;
    }
}

export default reducer;