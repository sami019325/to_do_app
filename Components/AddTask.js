import React, { useState } from 'react';
import { Button, Image, StyleSheet, TextInput, View, Text } from 'react-native';

const AddTask = () => {
    const [taskText, setTaskText] = useState('sami')
    const AddTaskFunction = () => {
        console.log('clicked');
        let text = document.getElementById('taskText').ariaValueMax;

        // setTaskText(text)
    }
    return (
        <View style={styles.inputFiledContainer}>
            <TextInput id='taskText' placeholder='Write something' style={styles.inputFiled} onChangeText={newText => setTaskText(newText)}></TextInput>
            <View style={styles.inputFiledSendBtnContainer}>
                <Text>{taskText}</Text>
                {/* <Button
                    onPress={AddTask}
                    title="Learn More"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                /> */}
                <Image onPress={() => AddTaskFunction} style={styles.inputFiledSendBtn} source={require('../assets/fi_send.png')}></Image>

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