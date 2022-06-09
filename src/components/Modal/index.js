import React, { useState } from "react";
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import { View, Text, Button, TouchableOpacity, Image } from "react-native";
import Modal from "react-native-modal";

import { theme } from "../../global/styles/theme";

import { styles } from "./styles";

export function WrapperModal() {
    const [visible, setVisible] = useState(true);
    const { red, blue } = theme.colors;
    return (
        <View styles={styles.container}>
            <Modal isVisible={visible}>
                <View style={styles.modalView}>
                    <View style={styles.header}>
                        <Text>Produto</Text>
                        <TouchableOpacity>
                            <Icon name="close" color="#000" size={25} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.sessionItem}>
                        <Image style={styles.Image} source={{ uri: "https://carrefourbr.vteximg.com.br/arquivos/ids/14648737/batata-monalisa-carrefour-600-g-1.jpg?v=637511892564730000" }} />
                        <Text>R$ 4,99</Text>
                    </View>
                    <View style={styles.sessionButtons}>
                        <TouchableOpacity style={[styles.button, { backgroundColor: red }]}>
                            <Text style={styles.text}>Descartar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, { backgroundColor: blue }]}>
                            <Text style={styles.text}>Adicionar</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </Modal>
        </View>
    );
}