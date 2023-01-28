import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import TaskBox from './Components/TaskBox';

export default function App() {

  const tasksDemo = [
    { id: 0, ss: 'dddd' },
    { id: 1, ss: 'dddd' },

  ]

  const [tasks, setTasks] = useState(tasksDemo)
  const [taskText, setTaskText] = useState('Add task')
  const [taskTextDefault, settaskTextDefault] = useState('')
  const AddTaskFunction = () => {
    let newTasK = { id: tasks.length + 1, ss: taskText }
    setTasks([newTasK, ...tasks]);
    settaskTextDefault(true)
  }


  return (
    <View style={styles.container}>
      {/* Heading ---------------- */}
      <View style={styles.headingBG}>
        <Text style={styles.headingContainer}>All Tasks</Text>
      </View>


      {/* Body------------------ */}
      <ScrollView style={styles.body}>
        {/* <Text>{tasks[11].ss}</Text> */}
        {
          tasks.map(t => <TaskBox key={t.id} text={t.ss} tasks={tasks} setTasks={setTasks}></TaskBox>)
        }
      </ScrollView>


      {/* <AddTask></AddTask> */}

      <View style={styles.inputFiledContainer}>
        <TextInput defaultValue={taskTextDefault ? '' : taskText} placeholder='Write something' style={styles.inputFiled} onChangeText={newText => setTaskText(newText) + settaskTextDefault(false)}></TextInput>
        <View style={styles.inputFiledSendBtnContainer}>
          {/* <Text>{taskText}</Text> */}
          <Button
            onPress={AddTaskFunction}
            title="ADD"
            fontSize="12px"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
          {/* <Image onPress={() => AddTaskFunction + setTasks({ id: 3, ss: 'ssami' })} style={styles.inputFiledSendBtn} source={require('./assets/fi_send.png')}></Image> */}

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFBF5',
  },
  body: {
    top: 10,
  },
  headingContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.13)',
    // backdrop-filter: blur(8px);
    blur: 8,
    textAlign: 'center',
    top: 10,
    paddingTop: 40,
    paddingBottom: 10,
    fontWeight: 'bold',
    fontSize: 24,
  },

  // add text css
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
  },
  inputFiledSendAddBtn: {
    fontSize: 28,
  }
});