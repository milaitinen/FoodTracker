import React from 'react';
import { FlatList, View, StatusBar, ActivityIndicator} from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';

import { ListItem, Separator } from '../components/ListItem';
import { Button } from '../components/Button'
import orders from '../data/orders.json';
import restaurants from '../data/restaurants.json';

// Display customer's recent orders along with the name of the restaurant, date, and time
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

    // filter necessary order information from orders.json based on customerID and include it into this.state.history
    filter = () => {
        const history = {};

        // filter objects in orders.json so that customerID matches
        const filteredList = orders.filter(order => order.customer.id === this.props.customerID);

        // add orders to object 'history' and add key-values restaurantID and time-completed to each order object
        filteredList.forEach(order => order.items.forEach(i => {
            history[i.id] = i;
            history[i.id]['restaurant'] = restaurants.filter(r => r.id === order.restaurant_id)[0].name || null;
            history[i.id]['time_completed'] = order.time_completed;
        }));

        // sort time_completed (Unix time) in ascending order
        const sortedList = Object.values(history).sort((a, b) => {
            return (b.time_completed) - (a.time_completed);
        });

        // finally, format time_completed to a more readable format
        sortedList.forEach((a, i) => {
            sortedList[i]['time_completed'] = moment.unix(sortedList[i]['time_completed']).format('YYYY-MM-DD HH:mm');
        });

        this.setState({ history: sortedList, isLoading: false});
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
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <StatusBar translucent={false} barStyle="light-content" />
                <Button
                    onPress={() => this.props.navigation.navigate('RestaurantList')}
                    title="view"
                >
                    Find restaurants
                </Button>
                <FlatList
                    data={this.state.history}
                    renderItem={({ item, index }) => (
                        <ListItem
                            item={item.name.split('. ')[1] || item.name}
                            price={`${item.price}€`}
                            restaurant={item.restaurant}
                            time_completed={item.time_completed}
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
    const customerID = state.customerID;

    return {
        customerID
    };
};

export default connect(mapStateToProps)(CustomerHistory);