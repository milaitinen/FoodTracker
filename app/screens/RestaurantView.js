import React from 'react';
import { Text, FlatList, View, StatusBar } from 'react-native';

import { InfoText } from '../components/InfoText';
import { Button } from '../components/Button';
import orders from '../data/orders';
import styles from './styles';

class RestaurantView extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            info: [],
            visited: 0,
            customerID: null,
        };
    }

    componentDidMount() {
        console.log('this.state.info', this.state.info);
        this.updateState();
    }

    updateState = () => {
      const info = this.props.navigation.state.params.data;
      const visited = orders.filter(order => order.restaurant_id === info.id).length || 0;
      if (this.props.navigation.state.params)
      this.setState({ info, visited });
    };

    onPress = () => {
        this.props.navigation.navigate('Menu', { id: this.state.info.id });
    };

    render() {
        const { info } = this.state;

        return (
            <View style={{ flex: 1, padding: 5, backgroundColor: 'white' }}>
                <StatusBar translucent={false} barStyle="default" />
                <View style={{ padding: 10, paddingBottom: 20 }}>
                    <Text>{`${info.description} \n`}</Text>

                    <InfoText icon={'phone'} text={info.phone_number} />
                    <InfoText icon={'map'} text={info.localized_city_name} />

                    <Text>{`\nThis restaurant has been visited ${this.state.visited} times during the past month.`}</Text>
                </View>
                <Button onPress={this.onPress}>
                    Click to see popular menu
                </Button>


            </View>
        );
    }
}

export default RestaurantView;