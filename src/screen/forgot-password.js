import React, { useState } from "react";
import Reinput from 'reinput';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TextInput,
  Image,
  Text,
  useColorScheme,
  View,
  Button,
  TouchableOpacity
} from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import colors from '../assets/colors/color';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {calcH,calcW} from '../utils/common';

export default ForgotPassword = ({route, navigation }) => {
  const [cont, setCont] = useState('');
  const [show, setShow] = useState(false);

    return (   
      <ScrollView style={styles.container}>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:colors.background, padding:16, }}>
      <View style={{alignItems:'flex-start', width:'100%', position:'absolute', left:16, top:16, }}>
      <TouchableOpacity
          onPress={() =>
            navigation.navigate('Login')
          }>
      <Image  source={require('../assets/images/icon.png')} /> 
      </TouchableOpacity>
    </View> 
    <View style={{ marginTop:calcH(0.2)}}>
      <View style={{ alignItems:"center", }}>
      <Text style={{color:colors.white, marginBottom:20, fontSize:34, fontFamily: 'Roboto-Medium', fontWeight:'500', marginBottom:calcH(0.02) }}>Forgot Password</Text>
      </View>
   
    <Text style={{color:colors.white, marginBottom:5, fontSize:18, textAlign:'center', fontFamily: 'Roboto-Medium', fontWeight:'500'}}>Please enter your email address. You will receive a link to reset your password.</Text>
    
  <View style={{ paddingHorizontal:0, width:'100%'}}>
  <SafeAreaView>
    {/* <View style={styles.inputde}>
        <Text style={styles.ftcolor}>Email</Text>
        <TextInput 
            style={styles.incolor}
            placeholder=""
  />
    </View> */}

          <View style={styles.row}>
              <View style={styles.inputContainer}>
                      <View style={styles.left}>
                      <Reinput label='Email'
                  color="#ffffff"
                  labelColor="#9B9B9B"
                  labelActiveColor="#9B9B9B"
                  underlineHeight={0}
                  underlineActiveHeight={0}
                  labelActiveTop={-16.5}
                // height={calcH(0.05)}
              // marginBottom={calcH(-0.02)}
                  marginLeft={calcW(0.04)}
              
                
                  />
                  </View>

                  <View style={styles.right}>
                      {/* <Image source={require('../assets/images/right_check.png')} style={styles.inputIcon}/> */}
                  </View>
              </View>
           </View>
</SafeAreaView>
<View style={styles.btnContainer}>                 
    <TouchableOpacity
          onPress={() =>
            navigation.navigate('Signup')
          } style={{ width:calcW(0.93),height:calcH(0.085),}}>
              <View style={{backgroundColor:colors.primary, padding:16, borderRadius:8, width:'100%', alignItems:'center' }}>
                  <Text style={{color:Colors.white, fontSize:18, fontFamily: 'Roboto-Bold', fontWeight:'700'}}>
                      SEND
                  </Text>
              </View>
                
          </TouchableOpacity>
          </View>    
          </View>    
  </View>
  </View>
  </ScrollView>

);
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:colors.background,
},
inputde:{
    borderRadius:4,
    padding:10,
    paddingBottom:0,
    borderColor:colors.primary,
    borderWidth:1,
    marginBottom:16,
    color:colors.white
},

ftcolor:{
    color:'#9b9b9b',
    fontFamily: 'Roboto-Regular',
    fontWeight:'400',
    fontSize: 14
},
incolor:{
    color:colors.white,
    height:40,
    fontFamily: 'Roboto-Regular',
    fontWeight:'400',
    fontSize: 18
},
inputContainer:{
  flexDirection:'row',
  width:calcW(0.93),
  height:calcH(0.09),
  borderRadius:calcH(0.005),
  borderColor:colors.primary,
  borderWidth:1,
 // justifyContent:'center',
  alignItems:'center'
},
row:{
  alignItems:'center',
  marginTop:calcH(0.015)
},
inputIcon:{
  width:calcH(0.02),
  height:calcH(0.02)
},
left:{
  width:calcW(0.82),
  justifyContent: 'center'
},
right:{
  width:calcW(0.1)
},
btnContainer:{
  marginTop:calcH(0.13),
  justifyContent:'center',
  alignItems:'center'
}
});