import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet } from 'react-native';

const styles = EStyleSheet.create({
    $underlayColor: '$border',
    container: {
        padding: 20,
        backgroundColor: '$white'
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    restaurant: {
        flex: 1,
        fontSize: 14,
    },
    time: {
        flex: 1,
        fonstSize: 10
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