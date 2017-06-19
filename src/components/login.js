import React, { Component } from 'react';
import { Container, Content, Form, Item, Input, Label, Text, Button, Toast } from 'native-base';

export default class FormExample extends Component {
    render() {
        return (
            <Container>
                    <Content>
                        <Form>
                            <Item floatingLabel>
                                <Label>Username</Label>
                                <Input />
                            </Item>
                            <Item floatingLabel last>
                                <Label>Password</Label>
                                <Input />
                            </Item>
                            <Text style={styles.text1}>
                            Lupa Kata Sandi?
                            </Text>
                            <Button
                            small transparent
                            onPress={() => Toast.show({
                            supportedOrientations: ['portrait', 'landscape'],
                            text: 'Wrong password!',
                            position: 'center',
                            buttonText: 'Okay' })}>
                          <Text>Bahasa Indonesia</Text>
                        </Button>
                            <Button block warning style={styles.button1}>
                        <Text>MASUK</Text>
                    </Button>
                        </Form>
                    </Content>
                </Container>
        );
    }
}

const styles = {
  text1: {
    justifyContent: 'center',
    fontSize: 10
  },
  button2: {
    justifyContent: 'center',
    marginLeft: 100
  },
  button1: {
    marginTop: 15
  }
};
