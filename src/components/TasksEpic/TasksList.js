import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import TasksTile from './TasksTile'

const TasksList = ({tasks, onChangeStatus, onDeleteTask}) => {
    const _renderItem = ({item}) => <TasksTile
        id= {item.id}
        title = {item.title}
        completed={item.completed}
        onChangeStatus={onChangeStatus}
        onDeleteTask= {onDeleteTask}>

     </TasksTile>
    return (
        <FlatList style = {styles.container}
        data={tasks}
        renderItem={_renderItem}
        keyExtractor={item => item.title}
      />
    )
}


const styles = StyleSheet.create({
    container:{
        
    }
})
export default TasksList;