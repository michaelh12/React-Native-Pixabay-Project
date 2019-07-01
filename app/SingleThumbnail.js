import React from 'react';
import { Thumbnail } from 'native-base';
import { View } from 'react-native';


const SingleThumbnail = (props) => {
    return (
        <View>
            <Thumbnail large source={{ uri: props.uri }} />
        </View>
    )
}

export default SingleThumbnail

