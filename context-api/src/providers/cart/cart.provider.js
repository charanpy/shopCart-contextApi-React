import React, { createContext, useState } from 'react';

import { addItemToCart, removeItemFromCart } from './cart.utils';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'
export const CartContext = createContext({
            hidden: true,
            toggleHidden: () => { },
            cartItems: [],
            addItem: () => { },
            removeItem: () => { },
            clearItemFromCart: () => { },
            cartItemsCount: 0
})

const CartProvider = ({ children }) => {

            const [hidden, setHidden] = useState(true);
            const [cartItems, setCartItems] = useState([]);
            const [cartItemsCount, setCartItemsCount] = useState(0)

            const toggleHidden = () => setHidden(!hidden);
            const addItem = item => setCartItems(addItemToCart(cartItems, item))
            const removeItem = item => setCartItems(removeItemFromCart(cartItems, item))
            const cartItemCount = () => setCartItemsCount(cartItems.reduce(
                        (accumalatedQuantity, cartItem) =>
                                    accumalatedQuantity + cartItem.quantity,
                        0
            ))
            return (
                        <CartContext.Provider
                                    value={{
                                                hidden,
                                                toggleHidden,
                                                cartItems,
                                                addItem,
                                                cartItemsCount,
                                                removeItem
                                    }}
                        >{children}</CartContext.Provider>
            )
}

export default CartProvider;