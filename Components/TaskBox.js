
import React from 'react';
import { Button, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import doneBtn from './../assets/done-btn.svg'
const TaskBox = ({ text, id, tasks, setTasks }) => {
    // delete completed task 
    const handleDelete = (id) => {
        let totalTasks = [...tasks]
        totalTasks.splice(id, 1)
        // const leftTask = text.filter(tas => tas.id !== id)
        // leftTask.map(l => totalTasks.push(l))
        setTasks(totalTasks)
    }
    return (
        <View style={style.taskBoxContainer}>
            <View style={style.taskBoxTextArea}>
                <View style={style.taskBoxCircle}></View>
                <Text style={style.taskBoxText}>{text}</Text>
            </View>
            {/* <Button title='done' onPress={() => handleDelete(id)}></Button> */}
            <Pressable style={style.taskBoxDoneBtn} onPress={() => handleDelete(id)}>
                <Image source={require('./../assets/fi_check-circle.png')}></Image>
            </Pressable>
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
        width: 50,
        height: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default TaskBox;
