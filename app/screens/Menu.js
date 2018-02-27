import React from 'react';
import { FlatList, View, StatusBar, ActivityIndicator } from 'react-native';

import orders from '../data/orders.json';
import { ListItem, Separator } from '../components/ListItem';
import styles from './styles';

class Menu extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            restaurantID: null,
            isLoading: true,
            menu: {}
        };
    }

    componentDidMount() {
        const id = this.props.navigation.state.params.id;
        this.setMenu(id);
    }

    setMenu = (id) => {
        const menu = {};
        const filteredList = orders.filter(order => order.restaurant_id === id);
        const filteredItems = filteredList.map(order => order.items);
        filteredItems.forEach(order => order.forEach(i => menu[i.id] = i));

        this.setState({ menu, restaurantID: id, isLoading: false})
    };

    render() {
        const { info } = this.state;

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
                <FlatList
                    data={Object.values(this.state.menu)}
                    renderItem={({ item, index }) => (
                        <ListItem
                            item={item.name.split('. ')[1] || item.name}
                            price={`${item.price}€`}
                        />
                    )}
                    keyExtractor={index => index}
                    ItemSeparatorComponent={Separator}
                />
            </View>
        );
    }
}

/*<StatusBar translucent={false} barStyle="default" />
                <FlatList
                    data={menu}
                    renderItem={({ item, index }) => (
                        <ListItem
                            text={item.name}
                        />
                    )}
                    keyExtractor={restaurant => restaurant.id}
                    ItemSeparatorComponent={Separator}
                />*/

export default Menu;