import React, {useState} from 'react';
import {View,TextInput,Button,FlatList,Text,StyleSheet,TouchableOpacity} from 'react-native';


export default function App() {
  
  const [enteredGoalText, setEnteredGoalText] = useState('');

  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText (enteredText)
  };

  const addGoalHandler = () => {
    if (enteredGoalText.trim() === '') return;
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals, enteredGoalText]);
    setEnteredGoalText('');
  };

//update the state for delete function
  const deleteGoal = (index) => {
    const updatedGoals = [...courseGoals];
    updatedGoals.splice(index, 1);
    setCourseGoals(updatedGoals);
  };

//background of each using array
  const getRainbowColor = (index) => {
    const colors = ['#ffb8ce', '#ff77a1', '#fe175e', '#c3003c']
    return {backgroundColor: colors[index % colors.length]}
  }

  return(
    <View style = {styles.container}>
     <Text style = {styles.title}>-----MY GOALS-----</Text>
      <View>
        <TextInput style = {styles.text}
          placeholder = "|ENTER ANYTHING|"
          onChangeText = {goalInputHandler}
          value = {enteredGoalText}
        />

        <Button 
          color = "#800128"
          title = "Click Here To Save" 
          onPress = {addGoalHandler}
        />
      </View>

      <FlatList
      data = {courseGoals}
      renderItem = {({item, index}) => (
        <View style = {[styles.goalContainer, getRainbowColor(index)]}>
          <Text style = {styles.textitem}>{item}</Text>
          <TouchableOpacity onPress = {() => deleteGoal(index)} style = {styles.touchbutton}>
            <Text style = {styles.paneltext}>Delete</Text>
          </TouchableOpacity>
        </View>
      )}

      keyExtractor = {(item,index) => index.toString()}

      />
    </View>

  );

}


const styles = StyleSheet.create({
  goalContainer: {
    paddingTop: 20,
    padding: 10,
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    padding: 30,
    margin: 10,
    backgroundColor: 'black'
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    paddingTop: 30,
    paddingBottom: 30,
    color: 'white',
  },
  paneltext: {
    padding: 10,
    color: 'blue',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  touchbutton: {
    backgroundColor: '#f7e5e9'
  },
  textitem: {
    color: 'black',
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'
  }

});