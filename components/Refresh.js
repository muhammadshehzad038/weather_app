import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';

const Refresh = ({load}) => {
  return (
    <View style={styles.Refresh}>
        <FontAwesome onPress={load} name="refresh" size={24} color="#dc143c" />
    </View>
  )
}

export default Refresh

const styles = StyleSheet.create({
    Refresh:{
        position:"relative",
       top:-40,
       left:340
    }
})