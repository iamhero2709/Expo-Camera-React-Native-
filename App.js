import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Pressable,useState } from 'react-native';
import { Camera } from 'expo-camera';
export default function App(props) {
const [startCamera,setStartCamera]=React.useState(false)
const _startCamera= async()=>{
  const {status} = await Camera.requestPermissionsAsync()
  if(status === 'granted'){
    // do something
 
  }else{
    Alert.alert("Access denied")

}
  return (
    <View style={styles.container}>

      <Camera  ref={(r) => {
    camera = r
    }}>

      </Camera>
      <Pressable style={styles.Pressable_style} onPress={_startCamera} >
        <Text style={
          styles.textColor
        }>Click</Text>

      </Pressable>
     
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Pressable_style:{
    width: 130,
    borderRadius: 4,
    backgroundColor: '#14274e',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40
  },textColor:{

      color: '#fff',
      fontWeight: 'bold',
      textAlign: 'center'
    
  }
});
