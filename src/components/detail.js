import React, { Component } from 'react';
import { Image } from 'react-native';
import {
  Container,
  Content,
  Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';

export default class CardShowcaseExample extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Card style={{ flex: 0 }}>
                        <CardItem>
                            <Left>
                                <Thumbnail source={require('./img/NB-logo.png')} />
                                <Body>
                                    <Text>NativeBase</Text>
                                    <Text note>April 15, 2016</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Image style={{ resizeMode: 'cover' }} source={require('./imgs/home.png')} />
                                <Text>
                                    //Your text here
                                </Text>
                                <Button transparent textStyle={{color: '#87838B'}}>
                                    <Icon name="logo-github" />
                                    <Text>1,926 stars</Text>
                                </Button>
                            </Body>
                        </CardItem>
                   </Card>
                </Content>
            </Container>
        );
    }
}
