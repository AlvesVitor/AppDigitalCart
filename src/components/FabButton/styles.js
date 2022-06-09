import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        position: 'absolute'
    },
    button: {
        position: 'absolute',
        width: 60,
        height: 60,
        borderRadius: 60/2,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowRadius: 5,
        shadowOffset: { height: 10 },
        shadowOpacity: 0.1,
    },
})
