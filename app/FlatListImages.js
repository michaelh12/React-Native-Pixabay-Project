import React, { useContext } from 'react';
import { AppContext } from './AppContext';
import { FlatList, View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

const FlatListImages = (props) => {

    const [state, setState] = useContext(AppContext);

    _keyExtractor = (item, index) => item.id.toString();

    const render = ({ item }) => {

        return (
            <Container>
                <Header />
                <Content>
                    <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={{ uri: 'https://pixabay.com/static/img/logo_square.png' }} />
                                <Body>
                                    <Text>PixaBay</Text>
                                    <Text note>GeekyAnts</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <TouchableHighlight onPress={() => props.navigation.navigate('SingleImage', { imageURL: item.largeImageURL, imageInfo: item })}>
                            <CardItem cardBody>
                                <Image source={{ uri: item.largeImageURL }} style={{ height: 200, width: null, flex: 1 }} />
                            </CardItem>
                        </TouchableHighlight>
                        <CardItem>
                            <Left>
                                <Button transparent>
                                    <Icon active name="thumbs-up" />
                                    <Text>{item.likes}</Text>
                                </Button>
                            </Left>
                            <Body>
                                <Button transparent>
                                    <Icon active name="chatbubbles" />
                                    <Text>{item.comments}</Text>
                                </Button>
                            </Body>
                            <Right>
                                <Text>{item.user}</Text>
                            </Right>
                        </CardItem>
                    </Card>
                </Content>
            </Container >

        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={state.images.hits}
                renderItem={render}
                keyExtractor={_keyExtractor}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})


export default FlatListImages

