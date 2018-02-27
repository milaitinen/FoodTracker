import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import styles from './styles';

const ListItem = ({
                      item,
                      price,
                      restaurant,
                      onPress,
                      selected=false,
                      visible=true,
                  }) => (

    <TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
        <View style={styles.container}>
            <View style={styles.row}>
                <Text>{item}</Text>
                <Text>{price}</Text>
            </View>
            <View style={styles.restaurant}>
                <Text style={styles.text}>{restaurant}</Text>
            </View>
        </View>
    </TouchableHighlight>
);

export default ListItem;