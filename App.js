import {StyleSheet, View, Button} from 'react-native';
import React from 'react';
import {useState} from 'react'
import {Provider} from "react-redux";
import {store} from './src/reducer/reducer'
import Page from "./src/components/Page";

const App = () => {

    return (
        <Provider store={store}>
            <View>
                <View style={styles.container}>
                </View>
                <Page/>
            </View>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


export default App