import React, { createContext, useState } from "react";
import { Alert } from "react-native";

export const Context = createContext({});

export default function ContextProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({
        items: [],
        total: 0
    });

    function addItemCart(data) {
        let exists = cart.items.find(e => e.ean === data)
        if (exists) {
            let newItems = cart.items.map(item => item.ean === data ? {
                ...item, amount: item.amount + 1
            } : item)
            setCart(prevState => ({
                ...prevState,
                total: prevState.total + exists.price,
                items: newItems
            }))
        } else {
            let newItem = products.find(e => e.ean === data)
            if (newItem) {
                setCart(prevState => ({
                    ...prevState,
                    items: [...prevState.items, newItem],
                    total: prevState.total + newItem.price
                }))
            } else {
                Alert.alert("Atenção!", "Produto não encontrado.")
            }
        }
    }

    function removeItemCart(data, all) {
        let exists = cart.items.filter(e => e.ean === data)

        if (exists[0].amount > 1 && !all) {
            let newItems = cart.items.map(item => item.ean === data ? {
                ...item, amount: item.amount - 1
            } : item)
            setCart(prevState => ({
                ...prevState,
                items: newItems,
                total: prevState.total - exists[0].price
            }))
        } else {
            setCart(prevState => ({
                ...prevState,
                items: cart.items.filter(e => e.ean !== data),
                total: prevState.total - (exists[0].amount * exists[0].price)
            }))
        }
    }

    return (
        <Context.Provider value={{
            products,
            setProducts,
            cart,
            addItemCart,
            removeItemCart
        }}>
            {children}
        </Context.Provider>
    )

}