import React, { useEffect, useState } from "react";
import { CardCompany } from "../../components/CardCompany";
import { View, FlatList } from "react-native";
import service from "../../service";

import { styles } from "./styles";

export function Company({ route }) {
  const [companies, setCompanies] = useState([]);
  const { cep } = route.params;

  useEffect(() => {
    if (cep) {
      service
        .request(
          "GET",
          `https://mercado.carrefour.com.br/api/checkout/pub/regions?country=BRA&postalCode=${cep}`,
          null
        )
        .then((data) => {
          let list = [];
          data.map((item) => {
            list.push(...item.sellers)
          })
          setCompanies(list)
        })
        .catch((e) => alert(e));
    }
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: "100%" }}
        showsVerticalSrollIndicator={false}
        data={companies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CardCompany data={item} />}
      />
    </View>
  );
}
