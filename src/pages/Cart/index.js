import React, { useEffect, useContext } from "react";
import { View, Text, FlatList, Image } from "react-native";

import { CardProduct } from "../../components/CardProduct";
import { useNavigation } from "@react-navigation/native";
import { FabButton } from "../../components/FabButton";
import { IconComponent as Icon } from "../../components/Icon";
import CART_IMG from "../../assets/img/cart.png";
import { numberToReal } from "../../utils";
import { Context } from "../../context";
import service from "../../service";
import { styles } from "./styles";

export function Cart({ route }) {
  const { id } = route.params;
  const { setProducts, cart, products } = useContext(Context);

  const navigation = useNavigation();

  function handleOnPress() {
    navigation.navigate("Scanner");
  }

  useEffect(() => {
    if (id) {
      service
        .request(
          "GET",
          `https://mercado.carrefour.com.br/api/catalog_system/pub/products/search?fq=${id}`,
          null
        )
        .then((data) => {
          let list = [];
          data.map((itemA) => {
            itemA.items.map((itemB) => {
              let product = {
                ean: itemB.ean,
                name: itemB.name,
                image: itemB.images[0].imageUrl || "",
                price: itemB.sellers[0].commertialOffer.Price,
                amount: 1,
              };
              list.push(product);
            });
          });
          setProducts(list);
        })
        .catch((e) => alert(e));
    }
  }, []);

  return (
    <View style={styles.container}>
      {cart.items.length < 1 && (
        <View style={styles.sessionImg}>
          <Image style={styles.image} source={CART_IMG} resizeMode="contain" />
          <Text style={styles.title}>Nenhum item inserido até o momento.</Text>
        </View>
      )}
      <FlatList
        style={{ width: "100%" }}
        showsVerticalSrollIndicator={false}
        data={cart.items}
        keyExtractor={(item) => item.ean}
        renderItem={({ item }) => <CardProduct data={item} />}
      />
      <View style={styles.sessionTotal}>
        <Icon name="cart" color="#000" size={20} />
        <Text style={styles.total}>{"Total: " + numberToReal(cart.total)}</Text>
      </View>
      <FabButton style={{ bottom: 75, right: 50 }} onPress={handleOnPress} />
    </View>
  );
}
