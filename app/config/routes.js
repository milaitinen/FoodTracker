import { StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Home from '../screens/Home';
import RestaurantList from '../screens/RestaurantList';
import RestaurantView from '../screens/RestaurantView';
import Menu from '../screens/Menu';

const HomeStack = StackNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                header: () => null,
                headerTitle: 'Home',
                headerBackTitle: null,
            },
        },
        RestaurantList: {
            screen: RestaurantList,
            navigationOptions: {
                headerTitle: 'Restaurants',
                headerBackTitle: null,
            },
        },
        RestaurantView: {
            screen: RestaurantView,
            navigationOptions: ({ navigation }) => ({
                headerTitle: navigation.state.params.title,
                headerBackTitle: null
            }),
        },
        Menu: {
            screen: Menu,
            navigationOptions: ({ navigation }) => ({
                headerTitle: 'Popular menu'
            }),
        }
    },
    {
        headerMode: 'screen',
    },
);
/*
const CurrencyListStack = StackNavigator({
    CurrencyList: {
        screen: CurrencyList,
        navigationOptions: ({ navigation }) => ({
            headerTitle: navigation.state.params.title,
        }),
    },
});
*/
export default StackNavigator(
    {
        Home: {
            screen: HomeStack,
        }
    },
    {
        mode: 'modal',
        headerMode: 'none',
        cardStyle: { paddingTop: StatusBar.currentHeight },
    },
);