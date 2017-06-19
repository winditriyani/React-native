import React from 'react';
import { button } from 'react-native';

class Types extends React.Component {

    toggleDrawer = () => {
        this.props.navigator.toggleDrawer({
            side: 'left',
            animated: true
        });
    };

    render() {
        return (
                <button onPress={this.toggleDrawer} />
        );
    }
}

export default Types;
