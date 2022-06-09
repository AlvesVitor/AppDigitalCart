import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    areaCam: {
        flex: 1
    },
    footer: {
        width: "100%",
        height: 100,
        backgroundColor: "#fff",
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    code: {
        color: '#fff',
        textAlign: "left",
        fontSize: 8
    },
    iconSync: {
        paddingHorizontal: 10
    },
    areaIcon: {
        paddingBottom: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {
        textAlign: 'center'
    },
    list: {
        width: '100%',
        paddingHorizontal: 10
    },
    containerModal: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,.2)"
    }

});