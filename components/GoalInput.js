import { useState } from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";

function GoalInput(props) {
  const [goalText, setGoalText] = useState("");

  function addGoalHandler() {
    props.onAddGoal(goalText);
    setGoalText("");
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your Course goul!"
        onChangeText={(e) => {
          setGoalText(e);
        }}
        value={goalText}
      />
      <Button disabled={!goalText} title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "70%",
    borderRadius: 10,
    padding: 8,
    marginRight: 8,
  },
});
