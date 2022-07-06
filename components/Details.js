import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {FontAwesome5,MaterialCommunityIcons,SimpleLineIcons,Ionicons}from "@expo/vector-icons"

const Details = ({weather,unit}) => {
    const{
        main: {feels_like,humidity,pressure,sea_level,grnd_level},
        wind: {speed}
    }=weather
    const windspeed=unit=='metric' ? `${Math.round(speed)} m/s` : `${Math.round(speed)} m/h`

  return (
    <View style={styles.Details}>
        <View style={styles.detailsview}>
            <View style={{...styles.Detailsbox,borderRightWidth:1,borderRightColor:"black",}}>
            <View style={styles.detailsview}>
        <FontAwesome5 name="temperature-low" size={25} color={'#ff8c00'}/>
        
        <Text>Feels_like: </Text>
        <Text style={styles.secondary}>{feels_like}°</Text>
        </View>
      </View>
      <View style={styles.Detailsbox}>
      <View style={styles.detailsview}>
      <MaterialCommunityIcons name="water" size={25} color={'#00bfff'}/>
        <Text>Humidity: </Text>
        <Text style={styles.secondary}>{humidity}%</Text>
      </View>
      </View>
        </View>
        <View style={styles.detailsview}>
            <View style={{...styles.Detailsbox,borderRightWidth:1,borderRightColor:"black",}}>
            <View style={styles.detailsview}>
        <MaterialCommunityIcons name="weather-windy" size={25} color={'#87cefa'}/>
        
        <Text>Windspeed: </Text>
        <Text style={styles.secondary}>{windspeed}</Text>
        </View>
      </View>
      <View style={styles.Detailsbox}>
      <View style={styles.detailsview}>
      <MaterialCommunityIcons name="speedometer" size={25} color={'#dc143c'}/>
        <Text>Pressure: </Text>
        <Text style={styles.secondary}>{pressure}hPa</Text>
      </View>
      </View>
        </View>
        <View style={styles.detailsview}>
            <View style={{...styles.Detailsbox,borderRightWidth:1,borderRightColor:"black",}}>
            <View style={styles.detailsview}>
        <SimpleLineIcons name="speedometer" size={25} color={'#48d1cc'}/>
        
        <Text>Sea_level: </Text>
        <Text style={styles.secondary}>{sea_level}hPa</Text>
        </View>
      </View>
      <View style={styles.Detailsbox}>
      <View style={styles.detailsview}>
      <Ionicons name="md-speedometer-sharp" size={25} color={'#faf0e6'}/>
        <Text>Ground_level: </Text>
        <Text style={styles.secondary}>{grnd_level}hPa</Text>
      </View>
      </View>
        </View>
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
    Details:{
        marginTop:"auto",
        margin:10,
        borderRadius:10,
        borderColor:"softgreen",
        borderWidth:1,

    },
    detailsview:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',

    },
    Detailsbox:{
        flex:1,
        padding:20
    },
    secondary:{
        fontSize:15,
        color:'#00008b'
    }
})