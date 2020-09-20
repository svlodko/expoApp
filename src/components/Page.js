import {StyleSheet, View, Image, Text, Vibration, TextInput, TouchableOpacity} from 'react-native';
import React, {useState, useEffect, useReducer} from 'react';
import reducer from "../reducer/reducer";

const Page = () => {

    const [state, dispatch] = useReducer(reducer, localStorage.getItem('text'))
    const [inputText, setInputText] = useState()

    useEffect(() => {
        localStorage.setItem('text', state)
    }, [state])

    const addTitleToText = () => {
        if (inputText !== '') {
            dispatch({
                type: 'ADD',
                payload: inputText
            })
            setInputText('')
            Vibration.vibrate()
        }
    }

    return (
        <View style={styles.container}>
            <Image
                source={{
                    uri: 'https://media.alienwarearena.com/media/lua.png',
                }}
                style={{width: "100%", height: 250, marginTop: 40, marginBottom: 50}}
                resizeMode='contain'
            />

            <Text style={styles.text}>Input your text:</Text>

            <TextInput
                style={styles.input}
                onChange={e => setInputText(e.target.value)}
                value={inputText}
            >
            </TextInput>
            <TouchableOpacity style={styles.button} onPress={addTitleToText}>
                <Text style={{color: 'white'}}>Change text</Text>
            </TouchableOpacity>
            <Text style={styles.storageText}>Actual text is: {state}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: "#575DD9",
        alignSelf: 'stretch',
        margin: 32,
        height: 64,
        borderRadius: 6,
        paddingHorizontal: 1,
        fontSize: 24
    },
    button: {
        backgroundColor: "#575DD9",
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
        paddingVertical: 12,
        paddingHorizontal: 32,
        marginTop: 32,
        marginHorizontal: 32,
        borderRadius: 6
    },
    text: {
        color: 'black',
        fontSize: 24,
        fontWeight: '300'
    },
    storageText:{
        color: 'black',
        fontSize: 24,
        fontWeight: '300',
        marginTop: 32,

    }
});


export default Page
