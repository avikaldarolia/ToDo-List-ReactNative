import { useState } from 'react';
import { Button, StyleSheet, TextInput, View,  FlatList } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([])
  
  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals, { text: enteredGoalText , id: Math.random.toString()},])
  }

  return (
    <View style={styles.appContainer}>
     <GoalInput onAddGoal = {addGoalHandler} />
      <View  style={styles.goalsContainer}>
        <FlatList data={courseGoals} renderItem={(itemData) => {
          return (
            <GoalItem text={itemData.item.text} />
          )
        }}
        keyExtractor={ (item,index)=> { return index; }} 
        />
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
  goalsContainer: {
    flex: 5,
  }
});
