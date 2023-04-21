import { createContext, useEffect, useState } from "react";


const addCartItem = (cartItems, productToAdd) => {
    // find if cartItems contains productToAdd
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );
    // if found, increment quantity
    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }
    // return new array with modified cartItems/ new cartItems

    return [...cartItems, { ...productToAdd, quantity: 1 }]
}


// const removeCartItem = (cartItems, productToRemove) => {
//     // find if cartItems contains productToRemove
//     const existingCartItem = cartItems.find(
//       (cartItem) => cartItem.id === productToRemove.id
//     );
//     // if not found, return the original cartItems array
//     if (!existingCartItem) {
//       return cartItems;
//     }
//     // if quantity is 1, remove item from cart
//     if (existingCartItem.quantity === 1) {
//       return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
//     }
//     // decrement quantity if item quantity is greater than 1
//     return cartItems.map((cartItem) =>
//       cartItem.id === productToRemove.id
//         ? { ...cartItem, quantity: cartItem.quantity - 1 }
//         : cartItem
//     );
//   };

const removeCartItem = (cartItems, productToRemove) => {
    // find if cartItems contains productToRemove
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToRemove.id
    );
    // if not found, return the original cartItems array
    if (!existingCartItem) {
        return cartItems;
    }
    // if quantity is 1, return the original cartItems array
    if (existingCartItem.quantity === 1) {
        return cartItems;
    }
    // decrement quantity if item quantity is greater than 1
    return cartItems.map((cartItem) =>
        cartItem.id === productToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    );
};


const cartItemsToClear = (cartItems, clearItems) => {
    return cartItems.filter((cartItem) => cartItem.id !== clearItems.id);

};



export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    cartCount: 0,
    cartTotal: 0,
    removeFromCart: () => { },
    clearCartItems: () => { }
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setCartCount(newCartCount);
    }, [cartItems]);


    useEffect(() => {
        const newCartTotal = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity * cartItem.price,
            0
            );
        setCartTotal(newCartTotal);
    }, [cartItems]);


    // This code decreases cart item quantity by 1
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }
    // This code increases cart Item quantity by 2
    const removeFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove))
    };


    const clearCartItems = (clearItems) => {
        setCartItems(cartItemsToClear(cartItems, clearItems))
    };

    const value = { 
        isCartOpen, 
        setIsCartOpen, 
        addItemToCart, 
        cartItems, 
        cartCount, 
        removeFromCart, 
        clearCartItems,
        cartTotal };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
};