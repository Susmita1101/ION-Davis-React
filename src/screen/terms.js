import React from "react";
import { View,Text, SafeAreaView, FlatList, StyleSheet, Image , TouchableOpacity, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './tabs'
import colors from '../assets/colors/color';

export default Terms = ({route, navigation }) => {
  return (
    <View style={{height: "100%", alignItems: 'center', justifyContent: 'flex-start' , backgroundColor: colors.background}}>             
      <View style={{height: '30%', width:'100%',}}>
      <TouchableOpacity style={{position:'absolute', left:10, top:20, zIndex:99}}
              onPress={() =>
                navigation.navigate('Privacy')               
              }>   
      <Image  source={require('../assets/images/icon.png')} />
      </TouchableOpacity>
        <ImageBackground source={require('../assets/images/privacy.png')} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>Privacy and Security</Text>
    </ImageBackground>
      </View>
      <View style={{ width:'100%', backgroundColor:colors.background,  padding:16, }}>            
          <Text style={styles.context}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget blandit orci mattis lorem tortor netus nunc pharetra consectetur. Cursus purus gravida bibendum at sit. Id neque integer amet, purus volutpat pellentesque eget egestas tempus. Purus vestibulum eu massa ultrices. Sapien risus vitae, amet hendrerit id porta in cras. Leo laoreet amet sed cras integer.</Text>             
      </View>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22  
  },
  image: {
    flex: 1,
    justifyContent: "flex-start"
  },
  text: {
    color: "white",
    fontSize: 25,
    lineHeight: 60,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#1E2429c0"
  },
  textbottom: {
    color: "white",
    fontSize: 25,
    lineHeight: 60,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#1E2429c0"
  },
  ftcolor:{
    color:'#9b9b9b'
  },
  incolor:{
    color:colors.white,
    height:150,
    borderRadius:4,
    borderStyle:'solid',
    borderColor:colors.primary,
    borderWidth:1,
    justifyContent: "flex-start",
    textAlignVertical: 'top',
    padding:8,
    marginVertical:12
  },
  item: {
    paddingVertical:12,
    paddingHorizontal:10,
    fontSize: 20,
    color: colors.white,
    width:'80%'
  },
  context: {
    color:colors.white,
    marginBottom:4,
    fontSize:18,  
  },
});


