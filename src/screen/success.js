import React, { useState } from "react";
import { View, Text , FlatList, StyleSheet, Image , TouchableOpacity, ImageBackground, SafeAreaView } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './tabs'
import colors from '../assets/colors/color';




export default Success = ({route, navigation }) => {
  return (
    <View style={{ flex:1, height: "100%", width:'100%' }}>  
     <ImageBackground source={require('../assets/images/Sucess.png')}  resizeMode="cover" style={styles.image}>
     <View style={{marginTop:20,paddingHorizontal:15}}>
            <Text style={[styles.heading, styles.commonText]}>Success!</Text>
            <Text style={[styles.descrip , styles.commonText]}>Your order will be delivered soon. Thank you for choosing our app!</Text>
        </View>
        <TouchableOpacity 
                  onPress={() =>
                    navigation.navigate('Home')
                  } style={styles.button} >
                      <View style={{backgroundColor:colors.primary, padding:16, borderRadius:8, width:'100%', alignItems:'center' }}>
                          <Text style={{color:colors.white, fontSize:18}}>
                          CONTINUE SHOPPING
                          </Text>
                      </View>
          </TouchableOpacity>
    </ImageBackground>
    
         
        


        {/* 

        <View style={{width:'100%', paddingHorizontal:15,top:350}}>
          <TouchableOpacity 
                  onPress={() =>
                    navigation.navigate('Home')
                  } >
                      <View style={{backgroundColor:colors.primary, padding:16, borderRadius:8, width:'100%', alignItems:'center' }}>
                          <Text style={{color:colors.white, fontSize:18}}>
                          CONTINUE SHOPPING
                          </Text>
                      </View>
          </TouchableOpacity> 
      </View>                         */}
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22,   
  },
  heading: {
    color:colors.white,
    fontSize: 34,
    height:40,
    borderRadius:4,
    borderStyle:'solid',
    justifyContent: "flex-start",
    textAlignVertical: 'top',
  },
  descrip: {
    fontSize: 20, 
    fontWeight:"bold",
    color:colors.white,
    height:90,
    
  },
  image: {
    height:'100%',
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "stretch",

  },
  commonText: {
    textAlign:"center",
    paddingHorizontal:16,

  },
  button: {
    position: "absolute",
    bottom: 24,
    width:'90%'
  }

});

