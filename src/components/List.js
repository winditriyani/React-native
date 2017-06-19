import React, { Component } from 'react';
import { Picker, Text, View, Button, Icon } from 'native-base';
import { Column as Col, Row } from 'react-native-flexbox-grid';

const Item = Picker.Item;
export default class PickerExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: undefined,
            selected1: 'key0',
            results: {
                items: []
            }
        };
    }
    onValueChange(value: string) {
        this.setState({
            selected1: value
        });
    }
    render() {
        return (
          <View style={{ backgroundColor: '#42b3f4' }}>
            <Row size={12}>
              <Col sm={6} color="#ffffff">
              <Button transparent>
              <Picker
                supportedOrientations={['portrait', 'landscape']}
                iosHeader="WILAYAH"
                mode="dropdown"
                selectedValue={this.state.selected1}
                onValueChange={this.onValueChange.bind(this)}>
                <Item label="Harga Nasional" value="key0" />
                <Item label="Banda Aceh" value="key1" />
                <Item label="Medan" value="key2" />
                <Item label="Padang" value="key3" />
                <Item label="Padang" value="key4" />
                <Item label="Padang" value="key5" />
                <Item label="Padang" value="key6" />
                <Item label="Padang" value="key7" />
                <Item label="Padang" value="key8" />
                <Item label="Padang" value="key9" />
                <Item label="Padang" value="key10" />
                <Item label="Padang" value="key11" />
             </Picker>
             <Icon name='ios-arrow-down' />
                </Button>
              </Col>
            <Col sm={6} alignItems="center" justifyContent="center">
                <Text>
                    Second Column
                </Text>
            </Col>
          </Row>
        </View>
              );
          }
      }
