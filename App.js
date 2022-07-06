import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View,ActivityIndicator } from 'react-native';
import *as Location from "expo-location";
import Weather from './components/Weather';
import Picker from './components/appPicker';
import Refresh from './components/Refresh';
import Details from './components/Details';


export default function App() {
  const[errormsg,seterrormsg]=useState(null);
  const api_key='d73a1ce7756b1d8d1a24b23612699f53'
  const[weather,setweather]=useState(null)
  const[unit,setunit]=useState('metric')

  useEffect(()=>{
    load()
  },[unit])
 async function load(){
   setweather(null)
   seterrormsg(null)
    try {
      let {user}= await Location.requestForegroundPermissionsAsync()
      if(user!='granted'){
        seterrormsg('acess the location to run the app');

      }

      const location= await Location.getCurrentPositionAsync()
    
      const{latitude,longitude}=location.coords

     // alert(`latitude: ${latitude}, longitude:${longitude}`)

      const uri=`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${unit}&appid=${api_key}`

      const response= await fetch(uri)
      const result= await response.json()
      if(response.ok){
        setweather(result)
      }else{
        seterrormsg(result.errormsg)
      }
    }
    catch(err){
      //console.log(err);
    }
  }
    if(weather){
     // const{main :{temp}}=weather
  return (
    <View style={styles.container}>
       <StatusBar style="auto" />
      <View style={styles.main}>
        <Picker style={styles.Picker} unit={unit} setunit={setunit} />
        <Refresh load={load} />
      <Weather weather={weather}></Weather>
      <Details weather={weather} unit={unit} />
      <Text style={{alignSelf:'center' ,color:'#fff8dc',padding:20}}>Developed by @shehzad</Text>
      </View>
    </View>
  )
}
// else if (errormsg){
//   return (
//     <View style={styles.container}>
//      <Text>{errormsg}</Text>
//       <StatusBar style="auto" />
//     </View>
//   )
// }
else{
  return (
    <View style={styles.container}>
            <ActivityIndicator size="large" color="#a52a2a"/>
      <StatusBar style="auto" />
    </View>
    )
}
 }
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#9932cc',
    borderTopEndRadius:140,
    borderBottomLeftRadius:120,
    marginTop:0,
       // alignItems: 'center',
    justifyContent: 'center',
  },
  main:{
     justifyContent:'center',
     marginBottom:30
  },
  Picker:{
  }
});
