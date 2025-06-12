import React from 'react';
import {View, StyleSheet} from 'react-native';


const Flexbox = () => {
    return (
        <View style={styles.container}>
            <View style={styles.redContainer}> </View>
            <View style={styles.greenContainer}> </View>
            <View style={styles.blueContainer}> </View>
            <View style={styles.greenContainer}> </View>
        </View>
    );
};

export default Flexbox;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'yellow',
        flex: 1,
        flexDirection: 'column', // atur main axis (top-bottom)
        justifyContent: 'flex-start', // main axis
        alignItems: 'center', // cross axis
    },
    redContainer: {
        backgroundColor: 'red',
        // flex: 1,
        height: 100,
        width: 100,
    },
    greenContainer: {
        backgroundColor: 'green',
        height: 100,
        width: 100,
    },
    blueContainer: {
        backgroundColor: 'blue',
        height: 100,
        width: 100,
    },
});