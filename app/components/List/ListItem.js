import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import Icon from './Icon';

const ListItem = ({
    text,
    price,
    onPress,
    selected=false,
    checkmark=true,
    visible=true,
    customIcon=null,
    iconBackground,
}) => (
    <TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
        <View style={styles.row}>
            <Text style={styles.text}>{text}</Text>
            {(price) ? <Text style={styles.text}>{price}</Text> : null}
        </View>
    </TouchableHighlight>
);

export default ListItem;