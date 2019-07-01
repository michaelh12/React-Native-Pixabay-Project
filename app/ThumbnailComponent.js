import React, { useContext, useEffect } from 'react';
import { Container, Header, Content, Text, Body, Title, Right, Button } from 'native-base';
import { View } from 'react-native';
import { AppContext } from './AppContext';
import SingleThumbnail from './SingleThumbnail';

const ThumbnailComponent = (props) => {

    const [state, setState] = useContext(AppContext);

    const searchValue = props.navigation.getParam('searchValue');

    const fetchImages = async () => {
        let pixabayResponse = await fetch(`https://pixabay.com/api/?key=12918787-9a05a0a0e245237cd25609ab0&q=${searchValue}&image_type=photo&safesearch=true`);
        let responseJson = await pixabayResponse.json();
        setState({ imagesLoaded: true, images: responseJson })
    }

    useEffect(() => {

        if (!state.imagesLoaded) fetchImages();

    })

    return (
        <Container>
            <Header >
                <Body>
                    <Title>{`Thumbnail View: ${searchValue ? searchValue : 'Empty'}`}</Title>
                </Body>
                <Right>
                    <Button onPress={() => {

                        props.navigation.navigate('FlatList')
                    }}>
                        <Text>Flat List! Clicke me!</Text>
                    </Button>
                </Right>
            </Header>
            <Text>Circular Thumbnail</Text>
            <Content contentContainerStyle={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', }} >
                {state.imagesLoaded ? state.images.hits.map((hit) => {
                    return <SingleThumbnail key={hit.id} uri={hit.largeImageURL} />
                }) : <Text>Images Loading...</Text>}

            </Content>

        </Container >
    );
}


export default ThumbnailComponent;
