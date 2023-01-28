import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import doneBtn from './../assets/done-btn.svg'
const TaskBox = () => {
    return (
        <View style={style.taskBoxContainer}>
            <View style={style.taskBoxTextArea}>
                <View style={style.taskBoxCircle}></View>
                <Text style={style.taskBoxText}>sami ahned is going to a partty tonings</Text>
            </View>
            <View style={style.taskBoxDoneBtn}>
                <Image source={require('./../assets/fi_check-circle.png')}></Image>
            </View>
        </View>
    );

};
const style = StyleSheet.create({
    taskBoxContainer: {
        backgroundColor: "#F7EFE5",
        margin: 10,
        marginTop: 2,
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',

    },
    taskBoxText: {
        color: '#222222',
        fontWeight: 'bold',
        fontSize: 18,
        margin: 10,
        width: '80%',
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    taskBoxTextArea: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '90%',
    },
    taskBoxCircle: {
        width: 18,
        height: 18,
        borderWidth: 4,
        borderColor: '#C3ACD0',
        borderRadius: 50,
    },
    taskBoxDoneBtn: {
        width: 40,
        height: 40,
        backgroundColor: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default TaskBox;