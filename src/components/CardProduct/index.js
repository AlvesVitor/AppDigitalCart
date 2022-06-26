import React, { useContext, useState, useEffect } from "react";

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { IconComponent as Icon } from "../../components/Icon";
import { numberToReal } from "../../utils";
import { Context } from "../../context";
import { styles } from "./styles";

export function CardProduct({ data }) {
  const { ean, image, name, description, price, amount } = data;
  const [inputAmount, setInputAmount] = useState(amount.toString());
  const { addItemCart, removeItemCart, updateAmountCart } = useContext(Context);

  useEffect(() => {
    setInputAmount(amount.toString());
  }, [amount]);

  /**
   * Chama a função de atualizar quantidade do item no carrinho caso o
   * valor inserido seja maior que 0 e diferente do estado anterior
   */
  function handleUpdateAmount() {
    if (inputAmount > 0 && inputAmount !== amount) {
      updateAmountCart(ean, inputAmount);
    } else {
      setInputAmount(amount.toString());
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.sessionImg}>
        <TouchableOpacity onPress={() => Alert.alert(name, description)}>
          <Image
            style={styles.logo}
            source={{ uri: image }}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={styles.title}>{numberToReal(price)}</Text>
      </View>

      <View style={styles.AreaDescription}>
        <Text style={styles.title}>{name}</Text>

        <View style={styles.sessionAmount}>
          <View style={styles.areaInput}>
            <TouchableOpacity onPress={() => removeItemCart(ean, false)}>
              <Icon name="minus" size={22} color="red" />
            </TouchableOpacity>
            <TextInput
              keyboardType="numeric"
              style={styles.input}
              value={inputAmount}
              onChangeText={(e) => setInputAmount(e)}
              onBlur={handleUpdateAmount}
            />
            <TouchableOpacity onPress={() => addItemCart(ean)}>
              <Icon name="plus" size={22} color="green" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.sessionTotal}>
        <TouchableOpacity onPress={() => removeItemCart(ean, true)}>
          <Icon name="delete-outline" size={22} color="red" />
        </TouchableOpacity>
        <Text style={styles.totalText}>{numberToReal(price * amount)}</Text>
      </View>
    </View>
  );
}
