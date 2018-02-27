import React from 'react';
import { SearchBar } from 'react-native-elements';
import styles from './styles';

class Searchbar extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {
            search: ''
        }
    }

    render() {
        return (
            <SearchBar
                autoCorrect={false}
                lightTheme
                onChangeText={this.props.onChangeText}
                containerStyle={styles.searchBarContainer}
                inputStyle={ styles.searchBarInput }
                icon={{ style: styles.searchIcon }}
                placeholder={'Search restaurant'}
            />
        );
    }
};

export default Searchbar;