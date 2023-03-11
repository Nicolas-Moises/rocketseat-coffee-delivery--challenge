import { createContext, ReactNode, useEffect, useState } from "react";
import { CardCoffeeProps } from "../Pages/HomeCatalog/components/CardCoffee";
import { produce } from 'immer'
import { COFFEES_ON_CART } from "../storageConfig/storageSaveItems";

export interface CartItem extends CardCoffeeProps {
    amount: number;
}

type CartContextType = {
    cartItems: CartItem[];
    cartAmountNumber: number;
    cartValueTotal: number;
    addItemsToCart: (coffee: CartItem) => void;
    checkoutHandleItemsAmount: (coffeeId: number, type: 'addItem' | 'removeItem') => void;
    deleteCardFromCart: (cardId: number) => void;
}

type CartContextProvider = {
    children: ReactNode;
}



export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProvider) {

    const [cartItems, setCartItems] = useState<CartItem[]>(() => {

        const getStorageItems = localStorage.getItem(COFFEES_ON_CART)

        if (getStorageItems) {
            return JSON.parse(getStorageItems)
        }
        return [];
    })

    const cartValueTotal = cartItems.reduce((total, cartItem) => {
        return total + cartItem.price * cartItem.amount
    }, 0)
    const cartAmountNumber = cartItems.length;

    function addItemsToCart(coffee: CartItem) {
        const coffeeAlreadyExistsInCart = cartItems.findIndex((cartItem) =>
            cartItem.id === coffee.id
        );

        const newCart = produce(cartItems, (draft) => {
            if (coffeeAlreadyExistsInCart < 0) {
                draft.push(coffee);
            } else {
                draft[coffeeAlreadyExistsInCart].amount += coffee.amount;
            }
        });

        setCartItems(newCart);
    }

    function deleteCardFromCart(cardId: number) {
        const newCart = produce(cartItems, (draft) => {
            const coffeeAlreadyExistsInCart = cartItems.findIndex((cartItem) =>
                cartItem.id === cardId
            );

            if (coffeeAlreadyExistsInCart >= 0) {
                draft.splice(coffeeAlreadyExistsInCart, 1);
            }
        })

        setCartItems(newCart)
    }


    function checkoutHandleItemsAmount(coffeeId: number, type: 'addItem' | 'removeItem') {
        const newCart = produce(cartItems, (draft) => {
            const coffeeAlreadyExistsInOrder = cartItems.findIndex((cartItem) => cartItem.id === coffeeId)

            if (coffeeAlreadyExistsInOrder >= 0) {
                const item = draft[coffeeAlreadyExistsInOrder];

                draft[coffeeAlreadyExistsInOrder].amount = type === 'addItem' ? item.amount + 1 : item.amount - 1;
            }
        });

        setCartItems(newCart);
    }

    useEffect(() => {
        localStorage.setItem(COFFEES_ON_CART, JSON.stringify(cartItems))
    }, [cartItems]);

    return (
        <CartContext.Provider value={{
            cartItems,
            addItemsToCart,
            cartAmountNumber,
            checkoutHandleItemsAmount,
            deleteCardFromCart,
            cartValueTotal
        }}>
            {children}
        </CartContext.Provider>
    )
}