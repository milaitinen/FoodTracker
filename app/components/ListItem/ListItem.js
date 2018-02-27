import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import styles from './styles';

const ListItem = ({
    item,
    price,
    restaurant,
    time_completed,
    onPress,
    selected = false,
    visible = true,
}) => (

    <TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
        <View style={styles.container}>
            <View style={styles.row}>
                <Text>{item}</Text>
                <Text>{price}</Text>
            </View>
            {
                restaurant &&
                <View style={styles.restaurant}>
                    <Text style={styles.text}>{restaurant}</Text>
                </View>
            }
            {
                time_completed &&
                <View style={styles.time}>
                    <Text style={{ color: '#797979', fontSize: 10 }}>{time_completed}</Text>
                </View>
            }
        </View>
    </TouchableHighlight>

);

export default ListItem;