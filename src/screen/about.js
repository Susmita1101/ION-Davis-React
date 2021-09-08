import React, { useState } from "react";
import { View , TextInput,
  Text, SafeAreaView, FlatList, StyleSheet, StatusBar, Image , TouchableOpacity, ImageBackground, ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './tabs'
import colors from '../assets/colors/color';
import {Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default About = ({route, navigation }) => {
  return (
    <View style={{height: "100%", alignItems: 'center', justifyContent: 'flex-start' , backgroundColor: colors.background}}>             
      <View style={{height: '100%', width:'100%'}}>
      <TouchableOpacity style={{position:'absolute', left:10, top:19, zIndex:99}}
              onPress={() =>
                navigation.navigate('Setting')               
              }>   
      <Image  source={require('../assets/images/icon.png')} />
      </TouchableOpacity>
        <Image source={require('../assets/images/about.png')} style={{width:'100%', height:300 }} resizeMode="stretch" />
      <Text style={styles.text}>About</Text>

     <View style={{justifyContent: 'flex-end',  }}>
      <View style={{ width:'100%', backgroundColor:colors.background,  padding:16, }}>
              <View style={{marginBottom:24}}>
              <Text style={styles.title}>
              About Us</Text> 
      <Text style={styles.context}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget blandit orci mattis lorem tortor netus nunc pharetra consectetur. Cursus purus gravida bibendum at sit. Id neque integer amet, purus volutpat pellentesque eget egestas tempus. Purus vestibulum eu massa ultrices. Sapien risus vitae, amet hendrerit id porta in cras. Leo laoreet amet sed cras integer.</Text>
              </View>
      </View>
     </View>
      </View>
     <View>       
     </View>     
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22,
   
  },
  image: {
    flex: 1,
    justifyContent: "flex-start",
    height: 300
  },
  text: {
    color: "white",
    fontSize: 25,
    lineHeight: 60,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#1E2429c0",
    position:'absolute',
    width:'100%',
    
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
  context: {
    color:colors.white,
    marginBottom:4,
    fontSize:18,  
  },
  title: {
    color:colors.white,
    marginBottom:15,
    fontSize:18,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
    width: 75
  }
});


