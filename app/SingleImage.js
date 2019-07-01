import React from 'react';
import { Image, TouchableHighlight } from 'react-native';
import { Container, Header, Right, Title, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';

const SingleImage = (props) => {
    const imageInfo = props.navigation.getParam('imageInfo');
    return (
        <Container>
            <Header>
                <Left>
                    <Button transparent>
                        <Icon name='arrow-back' />
                    </Button>
                </Left>
                <Body>
                    <Button onPress={() => props.navigation.navigate('Home')}>
                        <Title>Seach Again :)</Title>

                    </Button>
                </Body>
                <Right>
                    <Button transparent>
                        <Icon name='menu' />
                    </Button>
                </Right>
            </Header>
            <Content>
                <Card style={{ flex: 0 }}>
                    <CardItem>
                        <Left>
                            <Thumbnail source={{ uri: 'Image URL' }} />
                            <Body>
                                <Text>{imageInfo.user}</Text>
                                <Text>Full image URL: {imageInfo.pageURL}</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Image source={{ uri: props.navigation.getParam('imageURL') }} style={{ height: 400, width: 400, flex: 1 }} />
                            <Text>
                                Views: {imageInfo.id}
                            </Text>
                        </Body>
                    </CardItem>
                    <CardItem>
                        <Left>
                            <Button transparent textStyle={{ color: '#87838B' }}>
                                <Icon name="logo-github" />
                                <Text>{imageInfo.likes}</Text>
                            </Button>
                        </Left>
                    </CardItem>
                </Card>
            </Content>
        </Container >
    )
}

export default SingleImage
