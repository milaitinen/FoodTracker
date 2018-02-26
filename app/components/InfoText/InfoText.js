import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import styles from './styles';

const InfoText = ({icon, text}) => {
    return (
        <View style={styles.contactInfo}>
            <Icon name={icon} size={16}/>
            <Text>{`  ${text}`}</Text>
        </View>
    );
};

export default InfoText;