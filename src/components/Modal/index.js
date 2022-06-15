import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { theme } from "../../global/styles/theme";
import { IconComponent as Icon } from "../Icon";
import { numberToReal } from "../../utils";
import Modal from "react-native-modal";

import { styles } from "./styles";

export function WrapperModal({ visible, data, handleModal }) {
  const { red, blue } = theme.colors;
  return (
    <View styles={styles.container}>
      <Modal isVisible={visible}>
        <View style={styles.modalView}>
          <View style={styles.header}>
            <Text style={styles.descrition}>{data?.name || ""}</Text>
            <TouchableOpacity onPress={() => handleModal(false)}>
              <Icon name="close" color="#000" size={25} />
            </TouchableOpacity>
          </View>
          <View style={styles.sessionItem}>
            <Image style={styles.Image} source={{ uri: data?.image || "" }} />
            <Text style={styles.descrition}>
              {numberToReal(data?.price || 0)}
            </Text>
          </View>
          <View style={styles.sessionButtons}>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: red }]}
              onPress={() => handleModal(false)}
            >
              <Text style={styles.text}>Descartar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: blue }]}
              onPress={() => handleModal(true)}
            >
              <Text style={styles.text}>Adicionar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
