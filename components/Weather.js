import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Weather = ({weather}) => {
    const{main :{temp},
          weather:[details],
        name}=weather
   const{icon, main,description}=details
   const iconurl=`https://openweathermap.org/img/wn/${icon}@4x.png`

  return (
    <View style={styles.main}>
       <Text style={styles.name}>{name}</Text>
        <Image style={styles.img} source={{uri: iconurl}}></Image>
        <Text style={styles.tmp}>{temp}°</Text>
        <Text style={styles.mn}>{main}</Text>
        <Text style={styles.description}>{description}</Text>
    </View>
  )
}

export default Weather

const styles = StyleSheet.create({
    main:{
        alignItems:"center",
        padding:10,
        marginBottom:180
    },
    img:{
       width:100,
       height:100 
    },
    description:{
        textTransform:"capitalize",
        fontSize:18,
        color:"black"
    },
    tmp:{
        fontSize:40,
        color:"#dc143c"
    },
    mn:{
        fontSize:20,
        color:"#00008b"
    },
    name:{
        fontSize:20,
        color:"black"
    },
   
})