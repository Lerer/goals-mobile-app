import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Button, TextInput, View,Text,ScrollView,FlatList } from 'react-native';

export default function App() {
  const [enteredGoalText,setEnteredGoalState] = useState('');
  const [courseGoals,setCourseGoals] = useState([]);
  function goalInputHandler (enteredText) {
    setEnteredGoalState(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals,{text:enteredGoalText,id:Math.random().toString()}]);
  }

  /*
    ScrollView is OK for finite known short amount of items however, not as good when there are alot as it will effect perfromance.
    Hence, we replaced it with FlotList.

    When replace ScrollView with FlatList, we get rid of the map which produces the Text elements:
          {courseGoals.map((goal) => (
            <View key={goal} style={styles.goalItem} >
            <Text style={styles.goalText}>{goal}</Text>
            </View>
          ))}

    
  */

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your course goal' onChangeText={goalInputHandler}/>
        <Button title='Add Goal' onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} renderItem={(itemData) => {
          itemData.index
          return (
            <View style={styles.goalItem} >
              <Text style={styles.goalText}>{itemData.item.text}</Text>
            </View>
          );
        }
        }
        keyExtractor={(item,index) => {
          return item.id;
        }}/>
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
  goalItem: {
    margin:8,
    padding:8,
    borderRadius:6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color:'white'
  }
});
