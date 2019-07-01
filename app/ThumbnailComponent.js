import React, { useContext, useEffect } from 'react';
import { Container, Header, Content, Text, Body, Title, Right, Button } from 'native-base';
import { View } from 'react-native';
import { AppContext } from './AppContext';
import SingleThumbnail from './SingleThumbnail';

// const ThumbnailComponent = (props) => {
//     const [state, setState] = useContext(AppContext);
//     const searchValue = props.navigation.getParam('searchValue');
//     console.log(props.navigation.getParam('searchValue'));
//     return (
//         <View>
//             <Text>TESTING123</Text>
//             <Text>{state[0].name}</Text>
//             <Text>Search Term:{props.navigation.getParam('searchValue')} </Text>
//         </View>
//     )
// }

const ThumbnailComponent = (props) => {

    const [state, setState] = useContext(AppContext);


    const searchValue = props.navigation.getParam('searchValue');

    console.log(props.navigation, 'navigation parameter')

    const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";

    const fetchImages = async () => {
        let pixabayResponse = await fetch(`https://pixabay.com/api/?key=12918787-9a05a0a0e245237cd25609ab0&q=${searchValue}&image_type=photo&safesearch=true`);
        let responseJson = await pixabayResponse.json();
        setState({ imagesLoaded: true, images: responseJson })
    }

    useEffect(() => {

        if (!state.imagesLoaded) fetchImages();

        // fetchImages();
    })

    console.log(state)

    return (
        <Container>

            <Header >

                <Body>
                    <Title>{`Thumbnail View: ${searchValue ? searchValue : 'Empty'}`}</Title>
                </Body>

                <Right>
                    <Button onPress={() => {

                        console.log('working');
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
                {/* <SingleThumbnail uri={uri} />
                <SingleThumbnail uri={uri} />
                <SingleThumbnail uri={state.imagesLoaded ? state.images.hits[0].largeImageURL : ''} />
                <SingleThumbnail uri={state.imagesLoaded ? state.images.hits[0].largeImageURL : ''} />
                <SingleThumbnail uri={state.imagesLoaded ? state.images.hits[0].largeImageURL : ''} />
                <SingleThumbnail uri={state.imagesLoaded ? state.images.hits[0].largeImageURL : ''} /> */}

                {/* <SingleThumbnail uri={state.images.hits[0].largeImageURL || ''} /> */}
                {/* <SingleThumbnail uri={uri} />
                <SingleThumbnail uri={"https://pixabay.com/get/57e9d6414e54aa14f6da8c7dda79367c1c3ed6e25b566c4870297add924bc158b8_1280.jpg"} />
                <SingleThumbnail uri={"https://pixabay.com/get/57e9d6414e54aa14f6da8c7dda79367c1c3ed6e25b566c4870297add924bc158b8_1280.jpg"} />
                <SingleThumbnail uri={"https://pixabay.com/get/57e9d6414e54aa14f6da8c7dda79367c1c3ed6e25b566c4870297add924bc158b8_1280.jpg"} />
                <SingleThumbnail uri={"https://pixabay.com/get/57e9d6414e54aa14f6da8c7dda79367c1c3ed6e25b566c4870297add924bc158b8_1280.jpg"} />
                <SingleThumbnail uri={"https://pixabay.com/get/57e9d6414e54aa14f6da8c7dda79367c1c3ed6e25b566c4870297add924bc158b8_1280.jpg"} />
                <SingleThumbnail uri={"https://pixabay.com/get/57e9d6414e54aa14f6da8c7dda79367c1c3ed6e25b566c4870297add924bc158b8_1280.jpg"} />
                <SingleThumbnail uri={"https://pixabay.com/get/57e9d6414e54aa14f6da8c7dda79367c1c3ed6e25b566c4870297add924bc158b8_1280.jpg"} /> */}




            </Content>

        </Container >
    );
}


// export default class ThumbnailExample extends Component {
//     render() {
//         const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
//         return (
//             <Container>
//                 <Header />
//                 <Content>
//                     <Text>Square Thumbnail</Text>
//                     <Thumbnail square large source={{ uri: uri }} />
//                     <Thumbnail square source={{ uri: uri }} />
//                     <Thumbnail square large source={{ uri: uri }} />
//                     <Text>Circular Thumbnail</Text>
//                     <Thumbnail large source={{ uri: uri }} />
//                     <Thumbnail source={{ uri: uri }} />
//                     <Thumbnail large source={{ uri: uri }} />
//                 </Content>
//             </Container>
//         );
//     }
// }

export default ThumbnailComponent;
