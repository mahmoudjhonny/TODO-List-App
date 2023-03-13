import { useState } from "react";
import { Button, StyleSheet, TextInput, View, FlatList } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [goals, setGoals] = useState([]);
  function addGoalHandler(goalText) {
    setGoals((prevState) => [
      ...prevState,
      { text: goalText, id: Math.random().toString() },
    ]);
  }

  function deleteGoal() {
    console.log("deleted");
  }
  return (
    <View style={styles.Appcontainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goals}>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} onDelete={deleteGoal} />;
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Appcontainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goals: {
    flex: 5,
  },
});
