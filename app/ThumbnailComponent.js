import React, { useContext } from 'react';
import { Container, Header, Content, Thumbnail, Text, List, ListItem } from 'native-base';
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
    return (
        <Container style={{}}>
            <Header />


            <Text>Circular Thumbnail</Text>

            <Container style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                <View >
                    {/* <Text>Square Thumbnail</Text>
                <Thumbnail square small source={{ uri: uri }} />
                <Thumbnail square source={{ uri: uri }} />
                <Thumbnail square large source={{ uri: uri }} /> */}

                    <Thumbnail small source={{ uri: uri }} />
                    {/* <Thumbnail small style={{ flex: 1 }} source={{ uri: uri }} />
                <Thumbnail small style={{ flex: 1 }} source={{ uri: uri }} />
                <Thumbnail small style={{ flex: 1 }} source={{ uri: uri }} />
                <Thumbnail small style={{ flex: 1 }} source={{ uri: uri }} />
                <Thumbnail small style={{ flex: 1 }} source={{ uri: uri }} />
                <Thumbnail small style={{ flex: 1 }} source={{ uri: uri }} />
                <Thumbnail small style={{ flex: 1 }} source={{ uri: uri }} />
                <Thumbnail small style={{ flex: 1 }} source={{ uri: uri }} />
                <Thumbnail small style={{ flex: 1 }} source={{ uri: uri }} /> */}


                    {/* <Thumbnail source={{ uri: uri }} />
                <Thumbnail large source={{ uri: uri }} /> */}
                </View>
                <View >
                    <Thumbnail small source={{ uri: uri }} />
                </View>
                <View >
                    <Thumbnail small source={{ uri: uri }} />
                </View>
                <View >
                    <Thumbnail small source={{ uri: uri }} />
                </View>
                <View >
                    <Thumbnail small source={{ uri: uri }} />
                </View>
                <View >
                    <Thumbnail small source={{ uri: uri }} />
                </View>
                <View >
                    <Thumbnail small source={{ uri: uri }} />
                </View>
                <View >
                    <Thumbnail small source={{ uri: uri }} />
                </View>
                <View >
                    <Thumbnail small source={{ uri: uri }} />
                </View>
                <View >
                    <Thumbnail small source={{ uri: uri }} />
                </View>
                <View >
                    <Thumbnail small source={{ uri: uri }} />
                </View>
                <View >
                    <Thumbnail small source={{ uri: uri }} />
                </View>
                <View >
                    <Thumbnail small source={{ uri: uri }} />
                </View>
                <View >
                    <Thumbnail small source={{ uri: uri }} />
                </View>
                <View >
                    <Thumbnail small source={{ uri: uri }} />
                </View>


                {/* <Content  >
                    <Thumbnail small source={{ uri: uri }} />
                </Content>
                <Content >
                    <Thumbnail small source={{ uri: uri }} />
                </Content>
                <Content >
                    <Thumbnail small source={{ uri: uri }} />
                </Content>
                <Content >
                    <Thumbnail small source={{ uri: uri }} />
                </Content>
                <Content >
                    <Thumbnail small source={{ uri: uri }} />
                </Content>
                <Content >
                    <Thumbnail small source={{ uri: uri }} />
                </Content>
                <Content >
                    <Thumbnail small source={{ uri: uri }} />
                </Content>
                <Content >
                    <Thumbnail small source={{ uri: uri }} />
                </Content>
                <Content >
                    <Thumbnail small source={{ uri: uri }} />
                </Content>
                <Content >
                    <Thumbnail small source={{ uri: uri }} />
                </Content>
                <Content >
                    <Thumbnail small source={{ uri: uri }} />
                </Content>
                <Content >
                    <Thumbnail small source={{ uri: uri }} />
                </Content>
                <Content >
                    <Thumbnail small source={{ uri: uri }} />
                </Content>
                <Content >
                    <Thumbnail small source={{ uri: uri }} />
                </Content> */}
            </Container>
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
//                     <Thumbnail square small source={{ uri: uri }} />
//                     <Thumbnail square source={{ uri: uri }} />
//                     <Thumbnail square large source={{ uri: uri }} />
//                     <Text>Circular Thumbnail</Text>
//                     <Thumbnail small source={{ uri: uri }} />
//                     <Thumbnail source={{ uri: uri }} />
//                     <Thumbnail large source={{ uri: uri }} />
//                 </Content>
//             </Container>
//         );
//     }
// }

export default ThumbnailComponent;
