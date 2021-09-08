import React, { useState } from "react";
import { View, Text , TextInput, FlatList, StyleSheet, Image , TouchableOpacity, ImageBackground, SafeAreaView, Dimensions ,} from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './tabs'
import colors from '../assets/colors/color';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
 

export default AddShipping = ({route, navigation }) => {
  
  return (
    <View style={{ flex:1,  justifyContent: 'flex-start' , backgroundColor: colors.background }}>      
       <View style={{height: 80, width:'100%'}}>
          <TouchableOpacity style={{position:'absolute', left:10, top:20, zIndex:99}}
                  onPress={() =>
                    navigation.navigate('Shipping')               
                  }>   
              <Image  source={require('../assets/images/icon.png')} />
          </TouchableOpacity>
          <Text style={styles.text}>Add Shipping Address</Text>  
      </View> 
      <View style={{marginTop:20,paddingHorizontal:15, height: screenHeight - 124}}>
              <View style={styles.inputsmall}>
                <Text style={styles.ftcolor}>Full Name</Text>
                <Text style={styles.ftcolorInner}>Anthony</Text>
              </View>
              <View style={styles.inputsmall}>
                <Text style={styles.ftcolor}>Address</Text>
                <Text style={styles.ftcolorInner}>3 Newbridge Court</Text>
              </View>
              <View style={styles.inputsmall}>
                <Text style={styles.ftcolor}>City</Text>
                <Text style={styles.ftcolorInner}>Chino Hills</Text>
              </View>
              <View style={styles.inputsmall}>
                <Text style={styles.ftcolor}>State</Text>
                <Text style={styles.ftcolorInner}>CA</Text>
              </View>
              <View style={styles.inputsmall}>
                <Text style={styles.ftcolor}>Zip Code</Text>
                <Text style={styles.ftcolorInner}>91709</Text>
              </View>
              <View style={styles.inputsmall}>
                <Text style={styles.ftcolor}>Country</Text>
                <Text style={styles.ftcolorInner}>United States</Text>
              </View>
      </View> 
      <View>
          <TouchableOpacity 
                  onPress={() =>
                    navigation.navigate('Shipping')
                  } style={{width:'100%', paddingHorizontal:15, position:'absolute', alignSelf:'center', bottom:0}}>
                      <View style={{backgroundColor:colors.primary, padding:16, borderRadius:8, width:'100%', alignItems:'center' }}>
                          <Text style={{color:colors.white, fontSize:18}}>
                          SAVE ADDRESS
                          </Text>
                      </View>
          </TouchableOpacity> 
      </View>               
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22,   
  },
  inputsmall:{
      borderRadius:5,
      padding:10,
      paddingBottom:0,
      borderColor:colors.primary,
      borderWidth:1,
      marginBottom: 8,
      color:colors.white,
      height: 60,       
  }, 
  text: {
    color: "white",
    fontSize: 25,
    lineHeight: 60,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#1E2429c0"
  },
  inputde:{
      width:'100%',
      borderRadius:5,
      padding:20,
      paddingBottom:20,
      borderColor:colors.primary,
      borderWidth:1,
      marginBottom: 8,
      color:colors.white,
      position:'relative'
  },
  ftcolor:{
    color:'#9b9b9b'
  },
  ftcolorInner: {
    color:colors.white,
    height:30,
    borderRadius:4,
    borderStyle:'solid',
    justifyContent: "flex-start",
    textAlignVertical: 'top',
  },
});

