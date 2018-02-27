import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '$primaryGreen'
    },
    title: {
        textAlign: 'center',
        color: 'white',
        fontSize: 40,
        fontWeight: '600',
        marginTop: 15,
        paddingBottom: 30,
    },
});

