import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import color from 'color';

import styles from './styles';

const Button = ({ onPress, children }) => {
    const underlayColor = color('#E2E2E2').darken(0.1);

    return (
        <View style={{ padding: 10 }}>
            <TouchableHighlight
                onPress={onPress}
                style={styles.buttonContainer}
                underlayColor={underlayColor}
            >
                <Text style={styles.text}>{children}</Text>
            </TouchableHighlight>
        </View>
    );
};

export default Button;