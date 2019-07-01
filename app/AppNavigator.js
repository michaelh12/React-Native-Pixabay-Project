import React from 'react';
import { AppProvider } from './AppContext';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import App from '../App';
import ThumbnailComponent from './ThumbnailComponent';
import FlastListImagesComponent from './FlatListImages';

const MainNavigator = createStackNavigator({
    Home: { screen: App },
    Thumbnail: { screen: ThumbnailComponent },
    FlatList: { screen: FlastListImagesComponent }
});

const RootContainer = createAppContainer(MainNavigator);

const AppNavigatorRoot = (props) => {

    return (
        <AppProvider>
            <RootContainer>
                {/* {props.children} */}
                {/* <App /> */}
            </RootContainer>
        </AppProvider>
    )
}

export default AppNavigatorRoot;