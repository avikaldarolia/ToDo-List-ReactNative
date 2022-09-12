import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';

export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState('')
  const [courseGoals, setCourseGoals] = useState([])
  function goalInputHandler(enteredText) {
    // console.log(enteredText);
    setEnteredGoalText(enteredText)
  }

  function addGoalHandler() {
    // console.log(enteredGoalText);
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals, enteredGoalText])
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your Course Goals!' onChangeText={goalInputHandler} />
        <Button title='Add Goal!' onPress={addGoalHandler} />
      </View>
      <View  style={styles.goalsContainer}>
        <ScrollView>
          {courseGoals.length > 0 ?
            courseGoals.map((goal, index) => (
              <View style={styles.goalItem} key={index}>
                <Text  style={styles.goalText}>{goal}</Text>
              </View>)
            )
            :
            <Text>List of goals</Text>
          }
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 6
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc"
  }, 
  goalText: {
    color: "white"
  }
});
