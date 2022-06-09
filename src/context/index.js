import React, { useEffect, createContext, useState } from "react";
import { Alert } from "react-native";
import MP3 from "../assets/midia/audio.mp3";
import Sound from 'react-native-sound';

export const Context = createContext({});

const audio = new Sound(
    MP3,
    error => {
        if (error) {
            console.log('failed to load the sound', error);
            return;
        }
    },
);
export default function ContextProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({
        items: [],
        total: 0
    });
    useEffect(() => {
        audio.setVolume(1);
        audio.release();
    }, []);

    function addItemCart(data, sound) {
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
        if (sound) {
            audio.play()
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