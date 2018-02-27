import React from 'react';
import { Text, StatusBar, View } from 'react-native';
import { connect } from 'react-redux';

import { SignInButton } from '../components/Button';
import { TextInput } from '../components/TextInput';
import styles from './styles';
import orders from '../data/orders.json';
import { insertFirstname, insertLastname, insertID } from '../redux/actions';

class Home extends React.Component {

    constructor(props)
    {
        super(props);
    }


    logIn = () => {
        const customer = orders.filter(i =>
            i.customer.first_name === this.props.firstName && i.customer.last_name === this.props.lastName);

        if (customer[0]) {
            this.props.navigation.navigate('CustomerHistory');
            this.props.dispatch(insertID(customer[0].customer.id))
        } else {
            alert('No customer data found. You can also log in as anonymous viewer.');
        }
    };

    logInAnonymous = () => {
        this.props.navigation.navigate('RestaurantList');
    };

    render() {
        return (
            <View style={styles.container} >

                <StatusBar translucent={false} backgroundColor="blue" barStyle="light-content" />
                <Text style={styles.title} >FoodFighter</Text>

                <TextInput
                    placeholder={'First name'}
                    onChangeText={firstName => this.props.dispatch(insertFirstname(firstName))}
                />

                <TextInput
                    placeholder={'Last name'}
                    onChangeText={lastName => this.props.dispatch(insertLastname(lastName))}
                />

                <SignInButton onPress={this.logIn}>Sign In</SignInButton>
                <SignInButton onPress={this.logInAnonymous}>Enter as Anonymous</SignInButton>

            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const firstName = state.firstName;
    const lastName = state.lastName;

    return {
        firstName,
        lastName
    };
};

export default connect(mapStateToProps)(Home);