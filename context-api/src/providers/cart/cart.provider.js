import React, { createContext, useState, useEffect } from 'react';

import { addItemToCart, removeItemFromCart, filterItemFromCart, getCartItemCount, selectCartTotal } from './cart.utils';

export const CartContext = createContext({
            hidden: true,
            toggleHidden: () => { },
            cartItems: [],
            addItem: () => { },
            removeItem: () => { },
            clearItemFromCart: () => { },
            cartItemsCount: 0,
            total: 0,
            setCartTotal: () => { }
})

const CartProvider = ({ children }) => {

            const [hidden, setHidden] = useState(true);
            const [cartItems, setCartItems] = useState([]);
            const [cartItemsCount, setCartItemsCount] = useState(0)
            const [total, setCartTotal] = useState(0)

            const toggleHidden = () => setHidden(!hidden);
            const addItem = item => setCartItems(addItemToCart(cartItems, item))
            const removeItem = item => setCartItems(removeItemFromCart(cartItems, item))

            const clearItemFromCart = item => setCartItems(filterItemFromCart(cartItems, item))


            useEffect(() => {
                        setCartItemsCount(getCartItemCount(cartItems));
                        setCartTotal(selectCartTotal(cartItems))
            }, [cartItems])
            return (
                        <CartContext.Provider
                                    value={{
                                                hidden,
                                                toggleHidden,
                                                cartItems,
                                                addItem,
                                                cartItemsCount,
                                                removeItem,
                                                clearItemFromCart,
                                                total
                                    }}
                        >{children}</CartContext.Provider>
            )
}

export default CartProvider;