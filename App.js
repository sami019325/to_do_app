import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import AddTask from './Components/AddTask';
import TaskBox from './Components/TaskBox';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Heading ---------------- */}
      <View style={styles.headingBG}>
        <Text style={styles.headingContainer}>All Tasks</Text>
      </View>


      {/* Body------------------ */}
      <ScrollView style={styles.body}>
        <TaskBox></TaskBox>
        <TaskBox></TaskBox>
        <TaskBox></TaskBox>
        <TaskBox></TaskBox>
        <TaskBox></TaskBox>
        <TaskBox></TaskBox>
        <TaskBox></TaskBox>
        <TaskBox></TaskBox>
        <TaskBox></TaskBox>
        <TaskBox></TaskBox>
        <TaskBox></TaskBox>
        <TaskBox></TaskBox>
        <TaskBox></TaskBox>
        <TaskBox></TaskBox>
        <TaskBox></TaskBox>
        <TaskBox></TaskBox>
        <TaskBox></TaskBox>
        <TaskBox></TaskBox>
        <TaskBox></TaskBox>
      </ScrollView>
      <AddTask></AddTask>
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
});
