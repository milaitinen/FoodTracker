import React from 'react';
import { FlatList, View, StatusBar } from 'react-native';

import { ListItem, Separator } from '../components/List';
import restaurants from '../data/restaurants.json';
import { Searchbar } from '../components/Searchbar';

class RestaurantList extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            restaurants: restaurants
        }
    }

    handlePress = (title, data) => {
        this.props.navigation.navigate('RestaurantView', { title, data });
    };

    findAndFilter = (text) => {
        const filteredRestaurants = restaurants.filter(r => r.name.toLowerCase().includes(text.toLowerCase()));
        this.setState({ restaurants: filteredRestaurants });
    };

    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar translucent={false} barStyle="default" />
                <Searchbar
                    onChangeText={text => { this.findAndFilter(text); }}
                />
                <FlatList
                    data={this.state.restaurants}
                    renderItem={({ item, index }) => (
                        <ListItem
                            text={item.name}
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

export default RestaurantList;