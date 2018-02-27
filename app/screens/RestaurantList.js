import React from 'react';
import { FlatList, View, StatusBar } from 'react-native';
import { connect } from 'react-redux';

import { ListItem, Separator } from '../components/ListItem';
import restaurants from '../data/restaurants.json';
import { Searchbar } from '../components/Searchbar';

// Display a list of restaurants found in restaurants.json
class RestaurantList extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            restaurants: restaurants
        }
    }

    // Navigate to RestaurantView when a restaurant in the list is clicked
    handlePress = (title, data) => {
        this.props.navigation.navigate('RestaurantView', { title, data });
    };

    // Filter restaurants according to the string user types into the search bar
    findAndFilter = (text) => {
        const filteredRestaurants = restaurants.filter(r => r.name.toLowerCase().includes(text.toLowerCase()));
        this.setState({ restaurants: filteredRestaurants });
    };

    render() {

        return (
            <View style={{ flex: 1 }}>
                <StatusBar translucent={false} barStyle="light-content" />
                <Searchbar
                    onChangeText={text => { this.findAndFilter(text); }}
                />
                <FlatList
                    data={this.state.restaurants}
                    renderItem={({ item, index }) => (
                        <ListItem
                            item={item.name}
                            onPress={() => this.handlePress(item.name, item)}
                        />
                    )}
                    keyExtractor={restaurant => restaurant.id}
                    ItemSeparatorComponent={Separator}
                />
            </View>
        );
    }
}

export default connect()(RestaurantList);