import {StyleSheet, Button, View, Vibration, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setDecrementCount, setIncrementCount, setInputText} from "../reducer/reducer";

const Page = () => {

    const dispatch = useDispatch()
    const count = useSelector(state => state.count)
    const text = useSelector(state => state.text)

    function onCountIncrement() {
        dispatch(setIncrementCount(count + 2))
    }

    function onCountDecrement() {
        dispatch(setDecrementCount(count - 2))
    }

    function onTextChange() {
        dispatch(setInputText(event.target.value))
    }

    return (
        <View style={styles.container}>
            <View>
                <Button
                    onPress={() => (onCountIncrement(), Vibration.vibrate())}
                    title="Increment"
                />
            </View>
            <View>
                <Button
                    onPress={() => onCountDecrement()}
                    title="Decrement"
                />
            </View>
            <Text>COUNTER {count}</Text>
            <View>
                <Text>{text}</Text>
            </View>
            <TextInput
                style={styles.input}
                onChangeText={() => onTextChange()}
            />
            {/*<Button*/}
            {/*    title='Tap to Save'*/}
            {/*    onPress={() => onTextChange()}*/}
            {/*/>*/}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});


export default Page