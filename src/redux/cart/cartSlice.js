import { createSlice } from "@reduxjs/toolkit"




const defaultState = {
    cartItems: [],
    numItemsInCart: 0,
    cartTotal: 0,
    shipping: 500,
    tax: 0,
    orderTotal:0
}


const getCartFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('cart')) || defaultState;
}



const cartSlice = createSlice({
    name: "cart",
    initialState: getCartFromLocalStorage,
    reducers: {
        addItem: (state, action) => {
           
            const { product } = action.payload;
            const item = state.cartItems.find((i) => i.cardID === product.cardID)
            
            if (item) {
                item.amount+=product.amount
            } else {
                state.cartItems.push(product)
            }

            state.numItemsInCart += product.amount;

            state.cartTotal += product.price * product.amount;
            state.tax = 0.1 * state.cartTotal;
            state.orderTotal = state.cartTotal + state.shipping + state.tax;
            
            localStorage.setItem('cart', JSON.stringify(state))
            cartSlice.caseReducers.calculateTotals(state);

            alert("Added succesfully");  
        },


        clearCart: (state) => {
            localStorage.setItem('cart', JSON.stringify(defaultState))
            return defaultState;
        },
        

        removeItem: (state, action) => {
            const { cartID } = action.payload;
            const product = state.cartItems.find((i) => i.cartID === cartID);
            state.cartItems = state.cartItems.filter((i) => i.cartID !== cartID);
             state.numItemsInCart -= product.amount;
            state.cartTotal -= product.price * product.amount;

            cartSlice.caseReducers.calculateTotals(state);
            alert("Removed succesfully")
        },
        

        editItem: (state, action) => { 
            const { cartID, amount } = action.payload;
            const item = state.cartItems.find((i) => i.cartID === cartID);
            state.numItemsInCart += amount - item.amount;
            state.cartTotal += item.price * (amount - item.amount);
            item.amount = amount;
            cartSlice.caseReducers.calculateTotals(state);

        }, 


        calculateTotals: (state) => {
            state.tax = 0.1 * state.cartTotal;
            state.orderTotal = state.cartTotal + state.shipping + state.tax;

            localStorage.setItem('cart', JSON.stringify(state));
        }
    }
});


export const { addItem, clearCart, removeItem, editItem } = cartSlice.actions;


export default cartSlice.reducer;



// ################ How is state getting numItemsInCart? ################

// When the reducer is called, state represents the current version of the slice state. Since the slice's initial state is either coming from localStorage or the defaultState, numItemsInCart is part of the state object from the very beginning.
// The value of numItemsInCart is initially 0 (from defaultState), and you're updating it by adding product.amount each time the addItem action is dispatched.