import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid';
import AddTask from './AddTask';

const ToDoList = ({initialValues}) => {
    const [toDos, setToDos] = useState(initialValues.map((toDo) => ({ id: uuidv4(), title: toDo })));
    
    const addToDo = (newToDo) => {
        const newTask = { id: uuidv4(), title: newToDo };
        setToDos((prevToDos) => [...prevToDos, newTask]);
      }; 
    
    const removeToDo = (id) => {
        setToDos((prevToDos) =>
            prevToDos.filter((toDo) => toDo.id !== id)
        );
      };
    
    return (
        <View style={styles.container}>
            {toDos.map((toDo) => (
                <View key={toDo.id}>
                    <Text style={styles.todoItem}>{toDo.title}</Text>
                    <View style={styles.todoListContainer}>
                        <Button title="Remove" onPress={() => removeToDo(toDo.id)} />
                    </View>
                </View>
            ))}
            <AddTask onAddTask={addToDo}/>
        </View>
    );
};

ToDoList.defaultProps = {
    initialValues: [],
  };

const styles = StyleSheet.create({
    todoListContainer: {
      marginBottom: 10,
    },
    todoItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      marginVertical: 5,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
    },
});



export default ToDoList;
