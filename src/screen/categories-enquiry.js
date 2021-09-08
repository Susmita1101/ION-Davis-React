import React, { useState } from "react";
import { View , TextInput,
  Text, SafeAreaView, FlatList, StyleSheet, StatusBar, Image , TouchableOpacity, ImageBackground, ScrollView} from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './tabs'
import colors from '../assets/colors/color';


export default CategoriesEnquiry = ({route, navigation }) =>  {

  return (
    <View style={{height: "100%", alignItems: 'center', justifyContent: 'flex-start' , backgroundColor: colors.background}}>      
        
      <View style={{height: '100%', width:'100%',}}>
      <TouchableOpacity style={{position:'absolute', left:10, top:20, zIndex:99}}
              onPress={() =>
                navigation.navigate('Fontpage')
                
              }>   
      <Image  source={require('../assets/images/icon.png')} />
      </TouchableOpacity>
        <ImageBackground source={require('../assets/images/construction.png')} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>Remodeling Services</Text>
     <View style={{justifyContent: 'flex-end', height:'91%', }}>
      <View style={{ width:'100%', backgroundColor:colors.background,  padding:16}}>
              <View style={{marginBottom:24}}>
              <Text style={styles.context}>
        Do you require contractor for hire?</Text> 
      <Text style={styles.context}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas turpis mi ac feugiat lobortis et, sed pellentesque suscipit. Dui est mi amet enim tellus, sit consequat neque. Euismod diam enim molestie consequat. Nunc libero amet, amet pretium venenatis risus, at in. Tellus consequat adipiscing ultricies morbi commodo cursus.
      </Text>
              </View>
      

            <TextInput placeholderTextColor="#ccc" 
 placeholder="Type in your requirements (OPTIONAL)" style={styles.incolor} multiline={true} />
      <TouchableOpacity
              onPress={() =>
                navigation.navigate('CategoriesConstruction')
              } style={{width:'100%'}}>
                  <View style={{backgroundColor:colors.primary, padding:16, borderRadius:8, width:'100%', alignItems:'center' }}>
                      <Text style={{color:colors.white, fontSize:18}}>
                          REQUEST QUOTE
                      </Text>
                  </View>
        </TouchableOpacity>
      </View>
     </View>
    </ImageBackground>
      </View>
     <View>
       
     </View>
     
    </View> 
  );
}
const styles = StyleSheet.create({
    conview:{
        borderRadius:10,
      overflow:'hidden',
      marginBottom:20,
      height: 150, 
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
      height:170,
            left:0,
             borderRadius:0,
      marginBottom:20,
      marginTop:-10,
      width:'120%',
      marginLeft:-15
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
      fontSize:18
    }
  });