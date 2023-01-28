import React from 'react';
import { Button, Image, StyleSheet, TextInput, View } from 'react-native';

const AddTask = () => {
    return (
        <View style={styles.inputFiledContainer}>
            <TextInput placeholder='Write something' style={styles.inputFiled}></TextInput>
            <View style={styles.inputFiledSendBtnContainer}>
                <Image style={styles.inputFiledSendBtn} source={require('../assets/fi_send.png')}></Image>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    inputFiledContainer: {
        backgroundColor: '#C3ACD0',
        bottom: 0,
        padding: 5,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',

    },
    inputFiled: {
        width: '80%',
        innerHeight: 50,
        padding: 5,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 20,
        margin: 5,
        backgroundColor: '#FFFBF5',
        fontSize: 18
    },
    inputFiledSendBtn: {
        with: 25,
        height: 25,
    },
    inputFiledSendBtnContainer: {
        width: '20%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
})
export default AddTask;