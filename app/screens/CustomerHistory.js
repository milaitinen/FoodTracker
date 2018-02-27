import React from 'react';
import { FlatList, View, StatusBar, ActivityIndicator, Button } from 'react-native';
import { connect } from 'react-redux';

import { ListItem, Separator } from '../components/ListItem';
import { Searchbar } from '../components/Searchbar';
import orders from '../data/orders.json';
import restaurants from '../data/restaurants.json';

class CustomerHistory extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            history: null,
            isLoading: true
        }
    }

    componentDidMount() {
        this.filter();
    }

    handlePress = (title, data) => {
        this.props.navigation.navigate('RestaurantView', { title, data });
    };

    filter = () => {
        const history = {};
        const filteredList = orders.filter(order => order.customer.id === this.props.customerID);
        filteredList.forEach(order => order.items.forEach(i => {
            history[i.id] = i;
            history[i.id]['restaurant'] = restaurants.filter(r => r.id === order.restaurant_id)[0].name || null;
        }));

        this.setState({ history: Object.values(history), isLoading: false});
        console.log('history', history)
    };

    render() {

        if (this.state.isLoading) {
            return (
                <View>
                    <ActivityIndicator
                        animating={this.state.animating}
                        size='large'
                        color={'#88daf2'}
                    />
                </View>
            );
        }

        return (
            <View style={{ flex: 1 }}>
                <StatusBar translucent={false} barStyle="default" />
                <Button
                    onPress={() => this.props.navigation.navigate('RestaurantList')}
                    title="view"
                >
                    View all restaurants
                </Button>
                <FlatList
                    data={this.state.history}
                    renderItem={({ item, index }) => (
                        <ListItem
                            item={item.name.split('. ')[1] || item.name}
                            price={`${item.price}€`}
                            restaurant={item.restaurant}
                        />
                    )}
                    keyExtractor={order => order.id}
                    ItemSeparatorComponent={Separator}
                />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const firstName = state.firstName;
    const lastName = state.lastName;
    const customerID = state.customerID;

    return {
        firstName,
        lastName,
        customerID
    };
};

export default connect(mapStateToProps)(CustomerHistory);