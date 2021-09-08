import React from "react";
import { View,Text, TextInput, SafeAreaView, StyleSheet, Image , TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './tabs'
import colors from '../assets/colors/color';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default Request = ({route, navigation }) => {
  return (
    <View style={{height: "100%", alignItems: 'center', justifyContent: 'flex-start' , backgroundColor: colors.background}}>             
      <View style={{height: '30%', width:'100%',}}>
      <TouchableOpacity style={{position:'absolute', left:10, top:20, zIndex:99}}
              onPress={() =>
                navigation.navigate('Setting')               
              }>   
      <Image  source={require('../assets/images/icon.png')} />
      </TouchableOpacity>
        <ImageBackground source={require('../assets/images/request.png')} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>Special Request</Text>
    </ImageBackground>
      </View>
      <View style={{ width:'100%', backgroundColor:colors.background,  padding:16, }}>            
          <Text style={styles.context}>Please type in the items you are looking for and set the desired quanity and hit submit. You will be contacted with a Quote for the items you have requested at the earliest.</Text>             
      </View>

      <View style={{ paddingHorizontal:12, width:'100%'}}>
          <SafeAreaView>
            <View style={{width:'100%', flexDirection: "row"}} >
              <View style={styles.inputde}>
                <Text style={styles.ftcolor}>Item Name</Text>
                <Text style={styles.ftcolorInner}>Captive Screws</Text>
              </View>
              <View style={styles.inputnext}>
                <Text style={styles.ftcolor}>Quantity</Text>
                <Text style={[styles.ftcolorInner , styles.specificText]}>5</Text>
              </View>
            </View>

            <View style={{width:'100%', flexDirection: "row"}} >
              <View style={styles.inputde}>
              <Text style={styles.ftcolor}>Item Name</Text>
                <Text style={styles.ftcolorInner}>Tamper Resistant Screw</Text>
              </View>
              <View style={styles.inputnext}>
                <Text style={styles.ftcolor}>Quantity</Text>
                <Text style={[styles.ftcolorInner , styles.specificText]}>5</Text>
              </View>
            </View> 
            <View style={{ alignItems: 'flex-end'}}>
              <Image source={require('../assets/images/add.png')}/> 
            </View>          
                 
          </SafeAreaView>

          <TouchableOpacity
              onPress={() =>
                navigation.navigate('')
              } style={{width:'100%'}}>
                  <View style={{backgroundColor:colors.primary, padding:16, borderRadius:8, width:'100%', alignItems:'center', marginTop:50 }}>
                      <Text style={{color:colors.white, fontSize:18}}>
                      REQUEST QUOTE
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
    height:30,
    borderRadius:4,
    borderStyle:'solid',
    justifyContent: "flex-start",
    textAlignVertical: 'top',
    padding:8,
    marginVertical:12
  },
  ftcolorInner: {
    color:colors.white,
    height:30,
    borderRadius:4,
    borderStyle:'solid',
    justifyContent: "flex-start",
    textAlignVertical: 'top',
  //  textAlign:"center"
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
  inputde:{
    width:screenWidth - 109,
    marginRight:10,
    borderRadius:10,
    padding:10,
    paddingBottom:0,
    borderColor:colors.primary,
    borderWidth:1,
    marginBottom:16,
    color:colors.white,
    },
inputnext: {
  width:75,
    borderRadius:10,
    padding:10,
    paddingBottom:0,
    borderColor:colors.primary,
    borderWidth:1,
    marginBottom:16,
    color:colors.white,
},
specificText: {
  textAlign: 'center'
}
});


