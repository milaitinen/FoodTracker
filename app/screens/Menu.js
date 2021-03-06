import React from 'react';
import { FlatList, View, StatusBar } from 'react-native';

import orders from '../data/orders.json';
import { ListItem, Separator } from '../components/ListItem';

// Display menu of the restaurant found in orders.json based on the restaurant's ID
class Menu extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            restaurantID: null,
            menu: {}
        };
    }

    componentDidMount() {
        const id = this.props.navigation.state.params.id;
        this.setMenu(id);
    }

    // filter restaurant's items from orders.json
    setMenu = (id) => {
        const menu = {};
        const filteredList = orders.filter(order => order.restaurant_id === id);
        const filteredItems = filteredList.map(order => order.items);
        filteredItems.forEach(order => order.forEach(i => menu[i.id] = i));

        this.setState({ menu, restaurantID: id })
    };

    render() {

        return (
            <View style={{ flex: 1 }}>
                <StatusBar translucent={false} barStyle="light-content" />
                <FlatList
                    data={Object.values(this.state.menu)}
                    renderItem={({ item, index }) => (
                        <ListItem
                            item={item.name.split('. ')[1] || item.name}
                            price={`${item.price}€`}
                        />
                    )}
                    keyExtractor={item => item.id}
                    ItemSeparatorComponent={Separator}
                />
            </View>
        );
    }
}

export default Menu;