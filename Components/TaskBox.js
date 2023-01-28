import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const TaskBox = () => {
    return (
        <View style={style.taskBoxContainer}>
            <View style={style.taskBoxTextArea}>
                <View style={style.taskBoxCircle}></View>
                <Text style={style.taskBoxText}>sami</Text>
            </View>
        </View>
    );

};
const style = StyleSheet.create({
    taskBoxContainer: {
        backgroundColor: "#F7EFE5",
        margin: 10,
        marginTop: 10,
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',

    },
    taskBoxText: {
        color: '#222222',
        fontWeight: 'bold',
        fontSize: 18,
        margin: 5,
        width: '90%',
        backgroundColor: 'red',
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    taskBoxTextArea: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '80%',
    },
    taskBoxCircle: {
        width: 18,
        height: 18,
        borderWidth: 4,
        borderColor: '#C3ACD0',
        borderRadius: 50,
    }
})

export default TaskBox;