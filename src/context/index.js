import React, { useEffect, createContext, useState } from "react";
import { Alert } from "react-native";
import MP3 from "../assets/midia/audio.mp3";
import Sound from 'react-native-sound';

export const Context = createContext({});

export default function ContextProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({
        items: [],
    });
    const audio = new Sound(
        MP3,
        error => {
            if (error) {
                console.log('failed to load the sound', error);
                return;
            }
        },
    );
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
                items: newItems
            }))
        } else {
            let newItem = products.find(e => e.ean === data)
            if (newItem) {
                setCart(prevState => ({
                    ...prevState,
                    items: [...prevState.items, newItem]
                }))

            } else {
                Alert.alert("Atenção!", "Produto não encontrado.")
            }
        }
        console.log(cart);
        if (sound) {
            audio.play()
        }
    }

    function removeItemCart(data, all) {

        if(all) {
            setCart(prevState => ({
                ...prevState,
                items: cart.items.filter(e => e.ean !== data)
            }))
            return;
        }

        let exists = cart.items.filter(e => e.ean === data)

        if (exists[0].amount > 1) {
            let newItems = cart.items.map(item => item.ean === data ? {
                ...item, amount: item.amount - 1
            } : item)
            setCart(prevState => ({
                ...prevState,
                items: newItems
            }))

        } else {
            setCart(prevState => ({
                ...prevState,
                items: cart.items.filter(e => e.ean !== data)
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