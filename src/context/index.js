import React, { createContext, useState } from "react";
import { Alert } from "react-native";

export const Context = createContext({});

export default function ContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({
    items: [],
    total: 0,
  });
  const [sound, setSound] = useState(true);

  /**
   * Atualiza diretamente a quantidade do item inserido no carrinho
   * @param data - ean do produto
   * @param amount - quantidade do produto
   */
  function updateAmountCart(data, amount) {
    let exists = cart.items.find((e) => e.ean === data);
    if (exists) {
      let newItems = cart.items.map((item) =>
        item.ean === data
          ? {
              ...item,
              amount: amount,
            }
          : item
      );

      let reductionValueAmount =
        parseFloat(cart.total) -
        parseInt(exists.amount) * parseFloat(exists.price);
      let newTotal =
        parseFloat(reductionValueAmount) + parseFloat(exists.price) * amount;

      setCart((prevState) => ({
        ...prevState,
        total: newTotal,
        items: newItems,
      }));
    } else {
      Alert.alert("Atenção!", "Produto não encontrado.");
    }
  }

  /**
   * Adiciona um item no carrinho
   * @param data - ean do produto
   */
  function addItemCart(data) {
    let exists = cart.items.find((e) => e.ean === data);
    if (exists) {
      let newItems = cart.items.map((item) =>
        item.ean === data
          ? {
              ...item,
              amount: parseInt(item.amount) + 1,
            }
          : item
      );
      setCart((prevState) => ({
        ...prevState,
        total: parseFloat(prevState.total) + parseFloat(exists.price),
        items: newItems,
      }));
    } else {
      let newItem = products.find((e) => e.ean === data);
      if (newItem) {
        setCart((prevState) => ({
          ...prevState,
          items: [...prevState.items, newItem],
          total: prevState.total + newItem.price,
        }));
      } else {
        Alert.alert("Atenção!", "Produto não encontrado.");
      }
    }
  }

  /**
   * Remove um item no carrinho
   * @param data - ean do produto
   * @param all - boolean verificado para exclusão do item por completo do carrinho
   */
  function removeItemCart(data, all) {
    let exists = cart.items.find((e) => e.ean === data);

    if (exists.amount > 1 && !all) {
      let newItems = cart.items.map((item) =>
        item.ean === data
          ? {
              ...item,
              amount: parseInt(item.amount) - 1,
            }
          : item
      );
      setCart((prevState) => ({
        ...prevState,
        items: newItems,
        total: parseFloat(prevState.total) - parseFloat(exists.price),
      }));
    } else {
      setCart((prevState) => ({
        ...prevState,
        items: cart.items.filter((e) => e.ean !== data),
        total:
          parseFloat(prevState.total) -
          parseInt(exists.amount) * parseFloat(exists.price),
      }));
    }
  }

  return (
    <Context.Provider
      value={{
        products,
        setProducts,
        cart,
        addItemCart,
        removeItemCart,
        updateAmountCart,
        sound,
        setSound,
      }}
    >
      {children}
    </Context.Provider>
  );
}
