import React from 'react';
import { Icon, Right, Button, Toast } from 'native-base';

const Buttonnew = () => {

  return (
    <Right>
    <Button
    transparent onPress={() => Toast.show({
    supportedOrientations: ['portrait', 'landscape'],
    text: 'Wrong password!',
    position: 'bottom',
    buttonText: 'Okay' })}>
      <Icon name='ios-more-outline' />
      </Button>
    </Right>

  );
};

export default Buttonnew;
