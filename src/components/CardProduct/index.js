import React, { useContext } from "react";
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { numberToReal } from "../../utils";
import { Context } from "../../context";

import { styles } from "./styles";

export function CardProduct({ data }) {
  const { ean, image, name, price, amount } = data;
  const { addItemCart, removeItemCart } = useContext(Context);

  return (
    <View style={styles.container} >

      <View style={styles.sessionImg}>
        <Image style={styles.logo} source={{ uri: image }} resizeMode="contain" />
        <Text style={styles.subTitle}>{numberToReal(price)}</Text>
      </View>

      <View style={styles.AreaDescription}>
        <Text style={styles.title}>{name}</Text>

        <View style={styles.sessionAmount}>
          <TouchableOpacity onPress={() => removeItemCart(ean, false)}>
            <Icon
              name="minus"
              size={20}
              color="red"
            />
          </TouchableOpacity>
          <Text style={styles.amountText}>{amount}</Text>
          <TouchableOpacity onPress={() => addItemCart(ean)}>
            <Icon
              name="plus"
              size={20}
              color="green"
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.sessionTotal}>
        <TouchableOpacity onPress={() => removeItemCart(ean, true)}>
          <Icon
            name="delete-outline"
            size={20}
            color="red"
          />
        </TouchableOpacity>
        <Text style={styles.totalText}>{numberToReal(price * amount)}</Text>
      </View>

    </View>
  );
}
