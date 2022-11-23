import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'Cart',
    initialState: {items: [], isLogged: false},
    reducers: {
        addItem(state, action){
            const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
            if(itemIndex === -1){
                state.items.push({id: action.payload.id,
                    description: action.payload.description,
                    price: action.payload.price,
                    amount: action.payload.amount
                });
            } else {
                state.items[itemIndex].amount += 1;
            }

        },
        removeItem(state, action){
            const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
            state.items[itemIndex].amount -= 1;
            if(state.items[itemIndex].amount === 0){
                state.items.splice(itemIndex, 1);
            }
        },
        setIsLogged(state, action){
            state.isLogged = action.payload;
        }
    }
});
export const {addItem, removeItem, setIsLogged} = cartSlice.actions;
export default cartSlice.reducer;