import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet } from 'react-native';

const styles = EStyleSheet.create({
    $underlayColor: '$border',
    container: {
        backgroundColor: '$white'
    },
    row: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    restaurant: {
        flex: 1,
        paddingHorizontal: 20,
        paddingBottom: 16,
        fontSize: 14,
        textAlign: 'right',
    },
    separator: {
        marginLeft: 20,
        backgroundColor: '$border',
        flex: 1,
        height: StyleSheet.hairlineWidth
    },
    text: {
        color: '$primaryGreen'
    }

});

export default styles;