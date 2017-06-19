import React, { Component } from 'react';
import {
  Header,
   Right,
   Button,
   Icon,
   Text
 } from 'native-base';

export default class HeaderIcon extends Component {
    render() {
        return (
            <Header>
            <Button transparent iconLeft>
             <Icon name='ios-menu' />
             <Text>PETANI</Text>
         </Button>
                <Right>
                  <Button transparent>
                    <Icon name='ios-search' />
                  </Button>
                  <Button transparent>
                    <Icon name='ios-notifications' />
                  </Button>
                  <Button transparent>
                    <Icon name='ios-text' />
                  </Button>
                </Right>
            </Header>
        );
    }
}
