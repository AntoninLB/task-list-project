import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TasksList from './TasksList'
import TaskForm from './TaskForm'
import CountersContainer from './CountersContainer';
import FloatingButton from '../_Shared/FloatingButton';


function TasksContainer(props) {
    const[tasks, setTasks] = useState([{id: new Date().getTime(),title: 'Nouvelle tâche', completed: false}]);

    const [isFormOpened, setIsFormOpened] = useState(false)


    const onAddTask = (title) => {
        const newTask = {id: new Date().getTime(),title: title, completed : false}
        setTasks([newTask, ...tasks])
    }

    const onChangeStatus = (id) => {
        let newTasks = []

        tasks.forEach(task => {
            if (task.id === id){
                newTasks.push({id :id, title:task.title, completed : !task.completed})
            }else{
                newTasks.push(task)
            }
            
        })

        setTasks(newTasks)
    }

    const onDeleteTask = (id) => {
        let newTasks = []

        tasks.forEach(task => {
            if (task.id !== id){

                newTasks.push(task)

            }
        })

        setTasks(newTasks)
    }

    const getTasksCompleted = ()=>{
        let counter = 0
        tasks.forEach(task =>{
            if(task.completed){
                counter++;
            }
        })
    }

    const toggleForm = () => {
        setIsFormOpened(!isFormOpened)
    }


    return(
        <View style = {styles.container}>
            {isFormOpened && <TaskForm  onAddTask={onAddTask}/>}
            <CountersContainer nbTasks= { tasks.length} nbTasksCompleted ={tasks.filter(task => task.completed).length}/>
            <TasksList tasks = {tasks} onChangeStatus = {onChangeStatus} onDeleteTask = {onDeleteTask} />
            <FloatingButton toggleForm = {toggleForm} isFormOpened= {isFormOpened}/>
        </View>
    )
}


const styles= StyleSheet.create({
    container : {
        flex : 1,
        position: 'relative',
    }
})


export default TasksContainer;