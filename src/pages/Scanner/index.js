import React, { useEffect, useState, useContext } from "react";
import { View, Text, Alert, Modal } from 'react-native';

import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import { useNavigation } from "@react-navigation/native";
import QRCodeScanner from 'react-native-qrcode-scanner';
import { Context } from "../../context";
import { WrapperModal } from "../../components/Modal";
import { styles } from "./styles";

const ONE_SECOND = 1000;
export function Scanner({ route }) {
    const [scanner, setScanner] = useState(true);
    const navigation = useNavigation();
    const { addItemCart } = useContext(Context);

    function handleBarCodeScanned({ data }) {
        setScanner(false)
        // Alert.alert("Produto", data)
        // addItemCart(data, true)
        // setTimeout(() => {
        //     setScanner(true)
        // }, ONE_SECOND * 2)
    };

    function handleGoBack() {
        navigation.goBack()
        setScanner(true)
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
                        <Icon style={styles.iconSync} name="cellphone" size={25} color="#3C4F76" />
                        <Icon style={styles.iconSync} name="arrow-right" size={25} color="#3C4F76" />
                        <Icon style={styles.iconSync} name="barcode" size={25} color="#3C4F76" />
                    </View>
                    <Text style={styles.label}>Aponte sua camera para o código de barras.</Text>
                </View>
            </View>
            <WrapperModal visible={!scanner} />
        </>
    );
}
