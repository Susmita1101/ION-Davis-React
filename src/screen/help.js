import React from "react";
import { View,Text, TextInput, SafeAreaView, FlatList, StyleSheet, Image , TouchableOpacity, ImageBackground , Dimensions , ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './tabs'
import colors from '../assets/colors/color';
import {calcH,calcW} from '../utils/common';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default Help = ({route, navigation }) => {
  return (
    <View style={{height: "100%", alignItems: 'center', justifyContent: 'flex-start' , backgroundColor: colors.background}}>             
      <View style={{height:calcH(0.25), width:'100%', borderTopLeftRadius: 30 ,borderTopRightRadius :30}}>
          <TouchableOpacity style={{position:'absolute', left:10, top:20, zIndex:99}}
                  onPress={() =>
                    navigation.navigate('Setting')               
                  }>   
            <Image  source={require('../assets/images/icon.png')} />
          </TouchableOpacity>
          <ImageBackground source={require('../assets/images/help.png')} resizeMode="cover" style={styles.image} imageStyle={{borderTopLeftRadius: 30 ,borderTopRightRadius :30 }}>
              <Text style={styles.text}>Help and Support</Text>
          </ImageBackground>
      </View>
      <ScrollView>
          <View style={{height:calcH(0.75), width:'100%', padding:16}}>            
              <View style={styles.btnContainer}>
                  <TouchableOpacity
                  onPress={() =>
                navigation.navigate('Home')
              }
                   style={styles.issueSelect}>
                      <Text style={{color:colors.white, fontSize:15, fontFamily: 'Roboto-Bold',fontWeight: '700', width:'100%', textAlign:'center'}}>
                      Select An Issue 
                      </Text>
                      <Image style={{position:'absolute', right:18, top:calcH(0.02)}} source={require('../assets/images/drop-arrow.png')}/>
                  </TouchableOpacity>
                  </View>

              <TextInput placeholderTextColor="#ccc" 
              placeholder="Please select issue and specify in details of the issue you are facing and hit submit" style={styles.incolor} multiline={true} />             
              <View style={styles.btnContainer}>
                  <TouchableOpacity
                  onPress={() =>
                navigation.navigate('Home')
              }
                   style={styles.submit}>
                      <Text style={{color:colors.white, fontSize:18 , fontFamily: 'Roboto-Bold', fontWeight:'700'}}>
                      SUBMIT
                      </Text>
                  </TouchableOpacity>
                  </View>
                  </View>   
        </ScrollView>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22,  
   
  },
  submit: {     
    backgroundColor:colors.primary, 
    borderRadius:8,
    width:calcW(0.93),
    height:calcH(0.07), 
    top:calcH(0.17), 
    alignItems:'center',
    justifyContent:'center'

},
  image: {
    flex: 1,
    justifyContent: "flex-start"
  },
  text: {
    color: "white",
    fontSize: 25,
    lineHeight: 60,
    fontFamily: 'Roboto-Bold',
    fontWeight: '700',
    textAlign: "center",
    backgroundColor: "#1E2429c0",
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
    height:calcH(0.30),
    borderRadius:4,
    borderStyle:'solid',
    borderColor:colors.primary,
    borderWidth:1,
    justifyContent: "flex-start",
    textAlignVertical: 'top',
    paddingHorizontal:24,
    paddingVertical:8,
    marginVertical:12,
    textAlign:'center',
    fontSize:18,
    fontFamily: 'Roboto-Regular',
    fontWeight:'400',
  },
  item: {
    paddingVertical:12,
    paddingHorizontal:10,
    fontSize: 20,
    color: colors.white,
    width:'80%'
  },
  btnContainer:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:calcH(0.01)
},
issueSelect: {
  backgroundColor:colors.primary, 
  borderRadius:8,
  width:calcW(0.93),
  height:calcH(0.07),  
  alignItems:'center',
  justifyContent:'center'
}
});


