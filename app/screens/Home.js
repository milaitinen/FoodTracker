import React from 'react';
import { Text, StatusBar, View } from 'react-native';
import { connect } from 'react-redux';

import { SignInButton } from '../components/Button';
import { TextInput } from '../components/TextInput';
import styles from './styles';
import orders from '../data/orders.json';
import { insertFirstname, insertLastname, insertID } from '../redux/actions';

// Home screen, where user can either log in with his/her name (.e.g 'Tapio' and 'Ruutu'), or enter as anonymous user
class Home extends React.Component {

    constructor(props)
    {
        super(props);
    }

    // If correct first and last name is entered, navigate to CustomerHistory screen.
    // If name is not found in order.json, alert will be displayed.
    logIn = () => {
        const customer = orders.filter(i =>
            i.customer.first_name === this.props.firstName && i.customer.last_name === this.props.lastName);
        if (customer[0]) {
            this.props.navigation.navigate('CustomerHistory');
            this.props.dispatch(insertID(customer[0].customer.id))
        } else {
            alert('No customer data found. You can also log in as anonymous user.');
        }
    };

    // Navigate to RestaurantList. Anonymous user cannot see his/her order history
    logInAnonymous = () => {
        this.props.navigation.navigate('RestaurantList');
    };

    render() {
        return (
            <View style={styles.container} >

                <StatusBar translucent={false} barStyle="light-content" />
                <Text style={styles.title} >FoodTracker</Text>

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

// Necessary to retrieve information from Redux store
const mapStateToProps = (state) => {
    const firstName = state.firstName;
    const lastName = state.lastName;

    return {
        firstName,
        lastName
    };
};

export default connect(mapStateToProps)(Home);