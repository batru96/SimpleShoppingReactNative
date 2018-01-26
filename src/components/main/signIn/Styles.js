import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    form: {
        borderWidth: 1,
        borderColor: 'white',
        padding: 16
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 24
    },
    inputTitle: {
        color: 'white'
    },
    input: {
        color: 'white',
        borderWidth: 1,
        borderColor: 'white',
        height: 40,
        paddingHorizontal: 8,
    },
    buttonForgot: {
        marginTop: 8,
        flexDirection: 'row',
        alignSelf: 'flex-end'
    },
    forgotPassword: {
        textDecorationLine: 'underline',
        color: 'white',
    },
    buttonLogin: {
        borderColor: 'white',
        borderWidth: 1,
        padding: 8,
        alignSelf: 'center',
        marginTop: 16
    },
    buttonLoginText: {
        color: 'white'
    }
});

export default styles;
