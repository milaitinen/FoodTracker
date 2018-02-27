import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import color from 'color';

import styles from './styles';

const SignInButton = ({ onPress, children }) => {
    const underlayColor = color('#00BD9D').darken(0.1);

    return (
        <View style={styles.container}>
            <TouchableHighlight
                onPress={onPress}
                style={styles.signInButton}
                underlayColor={underlayColor}
            >
                <Text style={styles.text}>{children}</Text>
            </TouchableHighlight>
        </View>
    );
};

export default SignInButton;