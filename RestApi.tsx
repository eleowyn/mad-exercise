import React from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';

const RestApi = () => {
    useEffect(() => {
        axios .get('')
    })
    return (
        <View>
            <Text>
                Rest Api
            </Text>
        </View>
    );
};

export default RestApi;