import { createSlice } from "@reduxjs/toolkit";
import { productData } from "../../Data/productData";
const cartSlice = createSlice({
  name: "post",
  initialState: {
    items: productData,
    totalAmount: 0,
    totalCount: 0,
  },

  reducers: {
    getCartTotal: (state, action) => {
      let { totalAmount, totalCount } = state.items.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem;
          const itemTotal = price * quantity;

          cartTotal.totalAmount += itemTotal;
          cartTotal.totalCount += quantity;
          return cartTotal;
        },
        {
          totalAmount: 0,
          totalCount: 0,
        }
      );
      state.totalAmount = parseInt(totalAmount.toFixed(2));
      state.totalCount = totalCount;
     
    },
    remove: (state, action) => {
      state.items = state.items
        .map((item) => {
          if (item.id === action.payload) {
            return { ...item, quantity: item.quantity - item.quantity };
          }
          return item;
        })

        let { totalAmount, totalCount } = state.items.reduce(
          (cartTotal, cartItem) => {
            const { price, quantity } = cartItem;
            const itemTotal = price * quantity;
  
            cartTotal.totalAmount += itemTotal;
            cartTotal.totalCount += quantity;
            return cartTotal;
          },
          {
            totalAmount: 0,
            totalCount: 0,
          }
        );
        state.totalAmount = parseInt(totalAmount.toFixed(2));
        state.totalCount = totalCount;
    },
    increase: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      console.log(state.items)
    },
    decrease: (state, action) => {
      state.items = state.items
        .map((item) => {
          if (item.id === action.payload) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
      console.log(state.items)
    },
    clearCart: (state, action) => {
      state.items = [];
    },
    getCartItems: (state) => {
      state.items = productData;
    },
    cartIncrease: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      let { totalAmount, totalCount } = state.items.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem;
          const itemTotal = price * quantity;

          cartTotal.totalAmount += itemTotal;
          cartTotal.totalCount += quantity;
          return cartTotal;
        },
        {
          totalAmount: 0,
          totalCount: 0,
        }
      );
      state.totalAmount = parseInt(totalAmount.toFixed(2));
      state.totalCount = totalCount;
    },
    cartDecrease: (state, action) => {
      state.items = state.items
        .map((item) => {
          if (item.id === action.payload) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })

        let { totalAmount, totalCount } = state.items.reduce(
          (cartTotal, cartItem) => {
            const { price, quantity } = cartItem;
            const itemTotal = price * quantity;
  
            cartTotal.totalAmount += itemTotal;
            cartTotal.totalCount += quantity;
            return cartTotal;
          },
          {
            totalAmount: 0,
            totalCount: 0,
          }
        );
        state.totalAmount = parseInt(totalAmount.toFixed(2));
        state.totalCount = totalCount;

      console.log(state.items)
    },
  },
});

export const {
  getCartTotal,
  remove,
  increase,
  decrease,
  clearCart,
  getCartItems,
  cartIncrease,
  cartDecrease,
} = cartSlice.actions;

export default cartSlice.reducer;
