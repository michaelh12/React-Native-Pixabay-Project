import React from 'react';
import { AppProvider } from './AppContext';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import App from '../App'
import ThumbnailComponent from './ThumbnailComponent'

const MainNavigator = createStackNavigator({
    Home: { screen: App },
    Thumbnail: { screen: ThumbnailComponent }
});

const RootContainer = createAppContainer(MainNavigator);

const AppNavigatorRoot = (props) => {

    return (
        <AppProvider>
            <RootContainer>
                {/* {props.children} */}
                <App />
            </RootContainer>
        </AppProvider>
    )
}

export default AppNavigatorRoot;