import EStyleSheet from 'react-native-extended-stylesheet';

const INPUT_HEIGHT = 48;
const BORDER_RADIUS = 4;

const styles = EStyleSheet.create({

    container: {
      paddingTop: 20,
    },
    buttonContainer: {
        backgroundColor: '$white',
        borderRadius: BORDER_RADIUS,
        borderWidth: 1,
        alignContent: 'center',
        justifyContent: 'center',
        padding: 10,
        paddingRight: 15,
        paddingLeft: 15,
        borderColor: '$primaryGreen',
    },
    text: {
        color: '$inputText',
        textAlign: 'center',
    },
});

export default styles;