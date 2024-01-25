import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Button, TextInput, View,Text } from 'react-native';

export default function App() {
  const [enteredGoalText,setEnteredGoalState] = useState();
  function goalInputHandler (enteredText) {
    setEnteredGoalState(enteredText);
  }

  function addGoalHandler() {
    console.log(enteredGoalText);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your course goal' onChangeText={goalInputHandler}/>
        <Button title='Add Goal' onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of Goals</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop:50,
    flex:1,
    paddingHorizontal:16,
  },
  inputContainer: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems: 'center',
    marginBottom:24,
    borderBottomWidth:1,
    borderBottomColor:'#ccc',
    flex:1,
  },
  textInput: {
    borderWidth:1,
    borderColor:'#cccccc',
    width:'70%',
    marginRight:8,
    padding:8
  },
  goalsContainer: {
    flex:5
  },
});
