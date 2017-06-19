import React from 'react';
import { Text, View, Image } from 'react-native';
import { Icon, Button, Thumbnail } from 'native-base';
import Card from './Card';
import CardSection from './CardSection';
import Buttonnew from './Button';

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image } = album;
  const {
    headerContentStyle,
    headerTextStyle,
    thumbnailContainerStyle,
    imageStyle
  } = styles;
  return (
    <Card>
      <CardSection>
        <Image
        style={imageStyle}
        source={{ uri: image }}
        />
      </CardSection>

      <CardSection>
        <View style={thumbnailContainerStyle}>
        <Thumbnail source={{ uri: thumbnail_image }} />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Button transparent>
        <Icon active name="heart" />
          <Text>12 Likes</Text>
        </Button>
        <Button transparent>
          <Icon active name="chatbubbles" />
            <Text>4 Comments</Text>
          </Button>
        <Buttonnew />
      </CardSection>
    </Card>
  );
};

AlbumDetail.navigationOptions = {
  drawer: {
      icon: () => (
        <Image
          style={[styles.tabIcon, { tintColor: 'black' }]}
        />
  ) }
};
const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 200,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
