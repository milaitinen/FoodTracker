import React from 'react';
import { Text, View, StatusBar } from 'react-native';

import { ContactInfo } from '../components/ContactInfo';
import { Button } from '../components/Button';
import orders from '../data/orders';

// Display information of a restaurant: description, phone number, location (city), etc.
class RestaurantView extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            info: [],   // information of the restaurant e.g. description, phone number, location
            visited: 0  // number of times the restaurant has been visited in the past month
        };
    }

    componentDidMount() {
        this.updateState();
    }

    // Fetch information of the restaurant and put it into this.state.info and this.state.visited
    updateState = () => {
      const info = this.props.navigation.state.params.data;
      const visited = orders.filter(order => order.restaurant_id === info.id).length || 0;
      this.setState({ info, visited });
    };

    // Navigate to Menu screen when the button is clicked
    onPress = () => {
        this.props.navigation.navigate('Menu', { id: this.state.info.id });
    };

    render() {
        const { info } = this.state;

        return (
            <View style={{ flex: 1, padding: 5, backgroundColor: 'white' }}>
                <StatusBar translucent={false} barStyle="light-content" />
                <View style={{ padding: 10, paddingBottom: 20 }}>
                    <Text>{`${info.description} \n`}</Text>

                    <ContactInfo icon={'phone'} text={info.phone_number} />
                    <ContactInfo icon={'map'} text={info.localized_city_name} />

                    <Text>{`\nThis restaurant has been visited ${this.state.visited} times during the past month.`}</Text>
                </View>
                <Button onPress={this.onPress}>
                    Popular menu
                </Button>


            </View>
        );
    }
}

export default RestaurantView;