import React, { useContext } from 'react';
import { AppContext } from './AppContext';
import { FlatList, View, StyleSheet, Image } from 'react-native';
//Text, 
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

const FlatListImages = () => {

    const [state, setState] = useContext(AppContext);

    _keyExtractor = (item, index) => item.id.toString();

    // _onPressItem = (id) => {
    //     // updater functions are preferred for transactional updates
    //     this.setState((state) => {
    //         // copy the map rather than modifying state.
    //         const selected = new Map(state.selected);
    //         selected.set(id, !selected.get(id)); // toggle
    //         return { selected };
    //     });
    // };

    const render = ({ item }) => {
        console.log('each item being rendered', item)

        return (


            // <Text style={styles.item}>{item.type}</Text>
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
                        <CardItem cardBody>
                            <Image source={{ uri: item.largeImageURL }} style={{ height: 200, width: null, flex: 1 }} />
                        </CardItem>
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
            </Container>



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

