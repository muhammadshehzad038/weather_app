import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Picker } from '@react-native-picker/picker'

const appPicker = ({unit,setunit}) => {
  return (
    <View style={styles.Picker}>
        <Picker selectedValue={unit} onValueChange={setunit} mode="dropdown" >
            <Picker.Item label="C°" value="metric" />
            <Picker.Item label="F°" value="imperial" />
        </Picker>
    </View>
  )
}

export default appPicker

const styles = StyleSheet.create({
  Picker:{
    position:"relative",
    top:50,
    left:30,
    width:100,
    height:100,
    borderColor:"red"
  },
})