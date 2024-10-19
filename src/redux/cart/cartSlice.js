import { createSlice } from "@reduxjs/toolkit";

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
            
            // Find the product by its unique identifier (use productID, or ensure your identifier is correct)
            const item = state.cartItems.find((i) => i.productID === product.productID);
            
            if (item) {
                // If product exists, just update the amount
                item.amount += product.amount;
            } else {
                // If product does not exist, add as a new item
                state.cartItems.push(product);
            }

            // Update totals
            state.numItemsInCart += product.amount;
            state.cartTotal += product.price * product.amount;
            state.tax = 0.1 * state.cartTotal;
            state.orderTotal = state.cartTotal + state.shipping + state.tax;

            // Save updated state to local storage
            localStorage.setItem('cart', JSON.stringify(state));
            cartSlice.caseReducers.calculateTotals(state);

            alert("Added successfully");
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




// The issue in your original addItem function is related to how you're identifying and handling products in the cart:

// 1. Incorrect product identifier (cardID)
// You are using cardID to find an item in the cart:

// javascript
// Copy code
// const item = state.cartItems.find((i) => i.cardID === product.cardID);
// This identifier may not correctly represent the unique product. Typically, products have a unique productID, id, or sku. If cardID is not the correct field for identifying a product, the logic will fail to differentiate between distinct products, causing it to modify the amount of an existing item rather than adding a new product.

// 2. Adding product amount instead of creating a new product
// When a product already exists in the cart, you increment the amount, but if a different product is added (with a different id), the product should be added as a new item to state.cartItems. If your identifier is incorrect (cardID vs. productID), it can mistakenly modify an existing product's amount rather than adding the new product.

// 3. Redundant calculateTotals call
// You are manually updating state.tax and state.orderTotal right after adding the item, but then you call cartSlice.caseReducers.calculateTotals(state) again. This makes your manual calculation redundant because the calculateTotals function recalculates totals anyway.

// Example of the issues in the flow:
// When adding the second product to the cart (even if it's different), it may match the wrong product due to cardID, causing it to increase the amount of an unrelated product.
// Summary of problems:
// Wrong identifier (cardID) — You should use a reliable product identifier (e.g., productID, id) to differentiate between products.
// Duplicate logic — You're calculating totals twice, once manually and again by calling calculateTotals. You only need to call calculateTotals.
// By fixing these issues, your code should function correctly, allowing new products to be added independently and keeping accurate totals.




