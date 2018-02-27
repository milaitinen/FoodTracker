import EStyleSheet from 'react-native-extended-stylesheet';

const BORDER_RADIUS = 4;

const styles = EStyleSheet.create({

    container: {
      paddingTop: 20,
        alignContent: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: '$primaryGreen',
        color: '$white',
        borderRadius: BORDER_RADIUS,
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    signInButton: {
        backgroundColor: '$white',
        borderRadius: BORDER_RADIUS,
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    text: {
        color: '$inputText',
        textAlign: 'center',
    },
    whiteText: {
        color: '$white',
        textAlign: 'center'
    }
});

export default styles;