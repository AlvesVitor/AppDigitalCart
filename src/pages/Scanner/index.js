import React, { useState, useContext, useEffect } from "react";
import { View, Text, Alert } from "react-native";

import { IconComponent as Icon } from "../../components/Icon";
import QRCodeScanner from "react-native-qrcode-scanner";
import { WrapperModal } from "../../components/Modal";
import MP3 from "../../assets/midia/audio.mp3";
import { Context } from "../../context";
import Sound from "react-native-sound";
import { styles } from "./styles";

const ONE_SECOND = 1000;

export function Scanner() {
  const audio = new Sound(MP3, (error) => {
    if (error) {
      console.log("failed sound", error);
      return;
    }
  });
  const [scanner, setScanner] = useState(true);
  const [product, setProdut] = useState(null);
  const [modalVisible, setModalVisible] = useState();
  const { addItemCart, products, sound } = useContext(Context);

  useEffect(() => {
    audio.setVolume(1);
    audio.release();
  }, []);

  /**
   * Valida código de barras escaneado
   * @param data
   */
  function handleBarCodeScanned({ data }) {
    let item = products.find((e) => e.ean === data) || null;
    if (sound) {
      audio.play();
    }
    setScanner(false);
    if (item) {
      setProdut(item);
      setModalVisible(true);
    } else {
      Alert.alert("Atenção!", "Produto não encontrado.", [
        {
          text: "ok",
          onPress: () => setScanner(true),
        },
      ]);
    }
  }

  function handleModal(add) {
    if (add) {
      addItemCart(product.ean, true);
    }
    setModalVisible(false);
    setTimeout(() => {
      setScanner(true);
    }, ONE_SECOND * 2);
  }

  return (
    <>
      <View style={styles.container}>
        <QRCodeScanner
          style={styles.cameraContainer}
          onRead={scanner ? handleBarCodeScanned : undefined}
          reactivate={true}
          showMarker={true}
        />
        <View style={styles.footer}>
          <View style={styles.areaIcon}>
            <Icon
              style={styles.iconSync}
              name="cellphone"
              size={25}
              color="#000"
            />
            <Icon
              style={styles.iconSync}
              name="arrow-right"
              size={25}
              color="#000"
            />
            <Icon
              style={styles.iconSync}
              name="barcode"
              size={25}
              color="#000"
            />
          </View>
          <Text style={styles.label}>
            Aponte sua camera para o código de barras.
          </Text>
        </View>
      </View>
      <WrapperModal
        visible={modalVisible}
        data={product}
        handleModal={handleModal}
      />
    </>
  );
}
