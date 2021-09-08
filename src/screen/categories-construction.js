import React, { useState } from "react";
import { View, Text , SafeAreaView, FlatList, StyleSheet, StatusBar, Image , TouchableOpacity, ImageBackground, ScrollView} from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './tabs'
import colors from '../assets/colors/color';

export default CategoriesConstruction = ({route, navigation }) =>  {

  return (
    <View style={{height: "100%", alignItems: 'center', justifyContent: 'flex-start' , backgroundColor: colors.background}}>      
        
      <View style={{height: 128, width:'100%', marginBottom:20}}>
        <ImageBackground source={require('../assets/images/category/category2.png')} resizeMode="stretch" style={styles.image}>
      <Text style={styles.text}>Construction</Text>
      <Text style={styles.subtext}>“For Fast Delivery of Materials”</Text>
      <TouchableOpacity style={{position:'absolute', left:10, top:20}}
              onPress={() =>
                navigation.navigate('Fontpage')
                
              }>   
      <Image  source={require('../assets/images/icon.png')} />
      </TouchableOpacity>
    </ImageBackground>
      </View>
      <ScrollView style={{width:'100%', padding:10}}>
      <View style={styles.conview}>
      <TouchableOpacity 
              onPress={() =>
                navigation.navigate('CategoriesEnquiry')               
              }> 
        <ImageBackground source={require('../assets/images/category/category3.png')} resizeMode="stretch" style={styles.imagelist}>
      <Text style={styles.textbottom}>Remodeling Services</Text>     
    </ImageBackground>
    </TouchableOpacity>
      </View>
      <View style={styles.conview}>
        <ImageBackground source={require('../assets/images/category/category4.png')} resizeMode="stretch" style={styles.imagelist}>
      <Text style={styles.textbottom}>Apex Designer Epoxy Flooring</Text>
    </ImageBackground>
      </View>
      <View style={styles.conview}>
      <TouchableOpacity 
              onPress={() =>
                navigation.navigate('SubCategory')               
              }> 
        <ImageBackground source={require('../assets/images/category/category5.jpg')} style={styles.imagelist}>
      <Text style={styles.textbottom}>Construction Materials</Text>
   
      </ImageBackground>
    </TouchableOpacity>
      </View>
       
     
      </ScrollView>
     
    </View> 
  );
}
const styles = StyleSheet.create({
    conview:{
      borderRadius:10,
      overflow:'hidden',
      marginBottom:20,
      height: 180, 
      width:'100%',
      padding:0,
      backgroundColor:colors.primary
    },
    container: {
     flex: 1,
     paddingTop: 22,
     
    },
    image: {
      flex: 1,
      justifyContent: "flex-start"
    },
    imagelist:{
      justifyContent: "flex-end",
      height:200,
      left:0,
      borderRadius:0,
    //  marginBottom:20,
      marginTop:-10,
      width:'100%',
    },
    item: {
      paddingVertical:12,
      paddingHorizontal:10,
      fontSize: 20,
      color: colors.white,
      width:'80%'
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
    subtext: {
      color: "white",
      fontSize: 19,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#1E2429c0"
    }
  });