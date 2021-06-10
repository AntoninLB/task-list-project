import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native'


const TaskForm = ({onAddTask}) => {
    const [title, setTitle] = useState('')
    const _onChangeText = (value) => {
        setTitle(value);
    }

    const _onPressBtn = () => {
        if (title.length > 0){
            onAddTask(title);
            setTitle('');
        }
        
    }
    return(
        <View style = {styles.container}>
            <View style = {styles.containerInput}>
                <TextInput value= {title} onChangeText={_onChangeText} />   
            </View>
            <Button onPress={_onPressBtn}
                    title="Ajouter"
                    color="#841584" />
            </View>
        
    )
}

const styles = StyleSheet.create({
    containerInput: {
        borderWidth:1,
        borderColor: 'black',
        borderRadius: 4,
        paddingLeft:7,
        
        width:'75%',
        
    },

    container :{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        marginBottom: 15,
    }
})

export default TaskForm