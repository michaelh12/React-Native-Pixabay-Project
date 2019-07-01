import React, { useContext, useEffect } from 'react';
import { Container, Header, Content, Thumbnail, Text, Body, Title } from 'native-base';
import { View } from 'react-native';
import { AppContext } from './AppContext';

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
    console.log(props.navigation.getParam('searchValue'));
    const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
    useEffect(() => {
        setState(uri)
    })
    console.log(state)
    return (
        <Container>

            <Header >

                <Body>
                    <Title>{`Thumbnail View: ${searchValue ? searchValue : 'Empty'}`}</Title>
                </Body>

            </Header>


            <Text>Circular Thumbnail</Text>

            <Content contentContainerStyle={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', }} >
                <View>
                    {/* <Text>Square Thumbnail</Text>
                <Thumbnail square large source={{ uri: uri }} />
                <Thumbnail square source={{ uri: uri }} />
                <Thumbnail square large source={{ uri: uri }} /> */}

                    <Thumbnail large source={{ uri: 'https://pixabay.com/get/55e2d4464b5aa414f6da8c7dda79367c1c3ed6e25b566c4870297add924bc55cba_1280.jpg' }} />
                    {/* <Thumbnail large style={{ flex: 1 }} source={{ uri: uri }} />
                <Thumbnail large style={{ flex: 1 }} source={{ uri: uri }} />
                <Thumbnail large style={{ flex: 1 }} source={{ uri: uri }} />
                <Thumbnail large style={{ flex: 1 }} source={{ uri: uri }} />
                <Thumbnail large style={{ flex: 1 }} source={{ uri: uri }} />
                <Thumbnail large style={{ flex: 1 }} source={{ uri: uri }} />
                <Thumbnail large style={{ flex: 1 }} source={{ uri: uri }} />
                <Thumbnail large style={{ flex: 1 }} source={{ uri: uri }} />
                <Thumbnail large style={{ flex: 1 }} source={{ uri: uri }} /> */}


                    {/* <Thumbnail source={{ uri: uri }} />
                <Thumbnail large source={{ uri: uri }} /> */}
                </View>
                <View >
                    <Thumbnail large source={{ uri: uri }} />
                </View>
                <View >
                    <Thumbnail large source={{ uri: uri }} />
                </View>
                <View >
                    <Thumbnail large source={{ uri: uri }} />
                </View>
                <View >
                    <Thumbnail large source={{ uri: uri }} />
                </View>
                <View >
                    <Thumbnail large source={{ uri: uri }} />
                </View>
                <View >
                    <Thumbnail large source={{ uri: uri }} />
                </View>
                <View >
                    <Thumbnail large source={{ uri: uri }} />
                </View>
                <View >
                    <Thumbnail large source={{ uri: uri }} />
                </View>
                <View >
                    <Thumbnail large source={{ uri: uri }} />
                </View>
                <View >
                    <Thumbnail large source={{ uri: uri }} />
                </View>
                <View >
                    <Thumbnail large source={{ uri: uri }} />
                </View>
                <View >
                    <Thumbnail large source={{ uri: uri }} />
                </View>
                <View >
                    <Thumbnail large source={{ uri: uri }} />
                </View>
                <View >
                    <Thumbnail large source={{ uri: uri }} />
                </View>


                {/* <Content  >
                    <Thumbnail large source={{ uri: uri }} />
                </Content>
                <Content >
                    <Thumbnail large source={{ uri: uri }} />
                </Content>
                <Content >
                    <Thumbnail large source={{ uri: uri }} />
                </Content>
                <Content >
                    <Thumbnail large source={{ uri: uri }} />
                </Content>
                <Content >
                    <Thumbnail large source={{ uri: uri }} />
                </Content>
                <Content >
                    <Thumbnail large source={{ uri: uri }} />
                </Content>
                <Content >
                    <Thumbnail large source={{ uri: uri }} />
                </Content>
                <Content >
                    <Thumbnail large source={{ uri: uri }} />
                </Content>
                <Content >
                    <Thumbnail large source={{ uri: uri }} />
                </Content>
                <Content >
                    <Thumbnail large source={{ uri: uri }} />
                </Content>
                <Content >
                    <Thumbnail large source={{ uri: uri }} />
                </Content>
                <Content >
                    <Thumbnail large source={{ uri: uri }} />
                </Content>
                <Content >
                    <Thumbnail large source={{ uri: uri }} />
                </Content>
                <Content >
                    <Thumbnail large source={{ uri: uri }} />
                </Content> */}
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
