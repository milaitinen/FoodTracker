import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import color from 'color';

import styles from './styles';

const Button = ({ onPress, children }) => {
    const underlayColor = color('#00BD9D').darken(0.1);

    return (
        <View style={{ paddingHorizontal: 40, paddingVertical: 10 }}>
            <TouchableHighlight
                onPress={onPress}
                style={styles.button}
                underlayColor={underlayColor}
            >
                <Text style={styles.whiteText}>{children}</Text>
            </TouchableHighlight>
        </View>
    );
};

export default Button;