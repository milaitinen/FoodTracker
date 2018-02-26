import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container: {
        backgroundColor: '$primaryGreen'
    },

    searchBarContainer: {
        backgroundColor: 'transparent',
        borderBottomWidth: 0,
        borderTopWidth:0,
        paddingRight: 25,
        paddingLeft: 25,
        paddingBottom: 3,
    },

    searchBarInput: {
        backgroundColor: '$white',
    },

    searchIcon: {
        paddingRight: 5,
        fontSize: 20,
        paddingLeft: 22,
    },

});