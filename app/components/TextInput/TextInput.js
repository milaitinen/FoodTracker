import React from 'react';
import { View, Text, TouchableHighlight, TextInput } from 'react-native';

import styles from './styles';

const InputWithButton = (props) => {

    const containerStyles = [styles.container];

    return (
        <View style={containerStyles}>
            <TouchableHighlight
                style={styles.buttonContainer}>
                <Text>{props.buttonText}</Text>
            </TouchableHighlight>
            <View style={styles.border}/>
            <TextInput style={styles.input} underlineColorAndroid='transparent' {...props}/>
        </View>
    );
};

export default InputWithButton;