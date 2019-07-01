import React, { useContext, useEffect } from 'react';
import { Container, Header, Content, Thumbnail, Text, Body, Title } from 'native-base';
import { View } from 'react-native';


const SingleThumbnail = (props) => {
    return (
        <View>
            <Thumbnail large source={{ uri: props.uri }} />
        </View>
    )
}

export default SingleThumbnail

