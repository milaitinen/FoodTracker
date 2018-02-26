import React from 'react';
import { Text, StatusBar, TextInput, Keyboard, View, TouchableHighlight } from 'react-native';

import { Button } from '../components/Button';
import { InputWithButton } from '../components/TextInput';
import styles from './styles';
import orders from '../data/orders.json';

class Home extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {
            firstName: '',
            lastName: ''
        };
    }


    logIn = () => {
        const { firstName, lastName } = this.state;
        const customer = orders.filter(i => i.customer.first_name === firstName && i.customer.last_name === lastName);

        if (customer[0]) {
            this.props.navigation.navigate('RestaurantList', { customerID: customer[0].customer.id });
        } else {
            alert('No customer data found. You can also log in as anonymous viewer.');
        }
    };

    logInAnonymous = () => {
        this.props.navigation.navigate('RestaurantList', { customerID: null });
    };

    render() {
        return (
            <View style={styles.container} >

                <StatusBar translucent={false} backgroundColor="blue" barStyle="light-content" />
                <Text style={styles.title} >FoodFighter</Text>

                <InputWithButton
                    placeholder={'First name'}
                    onChangeText={firstName => this.setState({ firstName })}
                />

                <InputWithButton
                    placeholder={'Last name'}
                    onChangeText={lastName => this.setState({ lastName })}
                />

                <Button onPress={this.logIn}>Sign In</Button>
                <Button onPress={this.logInAnonymous}>Enter as Anonymous</Button>

            </View>
        );
    }
}

export default Home;