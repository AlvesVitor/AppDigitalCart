import React, { useState, useContext, useEffect } from "react";
import { View, Text } from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { WrapperModal } from "../../components/Modal";
import MP3 from "../../assets/midia/audio.mp3";
import { IconComponent as Icon } from "../../components/Icon";
import { Context } from "../../context";
import Sound from 'react-native-sound';
import { styles } from "./styles";

const ONE_SECOND = 1000;

export function Scanner() {
    const audio = new Sound(
        MP3,
        error => {
            if (error) {
                console.log('failed sound', error);
                return;
            }
        },
    );
    const [scanner, setScanner] = useState(true);
    const [product, setProdut] = useState(null);
    const [modalVisible, setModalVisible] = useState();
    const { addItemCart, products } = useContext(Context);

    useEffect(() => {
        audio.setVolume(1);
        audio.release();
    }, []);

    function handleBarCodeScanned({ data }) {
        setProdut(products.find(e => e.ean === data) || null);
        audio.play()
        setScanner(false)
        setModalVisible(true)
    };

    function handleModal(add) {
        if (add) {
            addItemCart(product.ean, true)
        }
        setModalVisible(false)
        setTimeout(() => {
            setScanner(true)
        }, ONE_SECOND * 2)
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
                        <Icon style={styles.iconSync} name="cellphone" size={25} color="#000" />
                        <Icon style={styles.iconSync} name="arrow-right" size={25} color="#000" />
                        <Icon style={styles.iconSync} name="barcode" size={25} color="#000" />
                    </View>
                    <Text style={styles.label}>Aponte sua camera para o código de barras.</Text>
                </View>
            </View>
            <WrapperModal visible={modalVisible} data={product} handleModal={handleModal} />
        </>
    );
}
