import React, { useState} from "react";


import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TextInput,
  Text,
  useColorScheme,
  Image,
  View,
  Button,
  TouchableOpacity
} from 'react-native';
import { string, func, object, number } from 'prop-types';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import Reinput from 'reinput';
//import colors from '../assets/colors/color';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {calcH,calcW} from '../utils/common';
import { ScrollView } from 'react-native-gesture-handler';
const colors={
    background: '#14181B',
    primary: '#D99100',
    dalert: '#EB001B',
    white: '#FFF',
    black: '#000',
    modalbackground: '#1E2429',
}
export default Login = ({route, navigation }) => {
  const [cont, setCont] = useState('');
  const [show, setShow] = useState(false);




    return (
      <ScrollView style={styles.container}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', 
       padding:16,marginTop:calcH(0.12)}}>
        
        <Text style={{color:colors.white, marginBottom:calcH(0.02), fontSize:34, marginTop: calcH(0.06), fontFamily: 'Roboto-Medium', fontWeight:'500'}}>Login </Text>
  
      <View style={{ paddingHorizontal:0, width:'100%'}}>
        <SafeAreaView>
          {/* <View style={styles.inputde}>
            <Text style={styles.ftcolor}>Email</Text>
            <TextInput style={styles.incolor} placeholder="" />
           
          </View>
          <View style={styles.inputde}>
            <Text style={styles.ftcolor}>Password</Text>
            <TextInput style={styles.incolor} placeholder="" />
            
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

           <View style={styles.row}>
          <View style={styles.inputContainer}>
              <View style={styles.left}>
              <Reinput label='Password'
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
        <View style={styles.forgotContainer}>
          <Text style={{color:colors.white, marginBottom:calcH(0.04), fontSize:15, textAlign:'right' , fontFamily: 'Roboto-Medium', fontWeight:'500'}} 
          onPress={() => navigation.navigate('ForgotPassword')}
          >Forgot your password? 
                 <Image source={require('../assets/images/right-icon.png')} />
                </Text>
        </View>
      
                    <View style={styles.btnContainer}>
                  <TouchableOpacity
                  onPress={() =>
                navigation.navigate('Home')
              }
                   style={{backgroundColor:colors.primary, borderRadius:8,
                   width:calcW(0.93),height:calcH(0.07), alignItems:'center',justifyContent:'center' }}>
                      <Text style={{color:colors.white, fontSize:18 , fontFamily: 'Roboto-Bold', fontWeight:'700'}}>
                      LOGIN
                      </Text>
                  </TouchableOpacity>
                  </View>
             
      </View>
      <View style={styles.facebook}>
          <Text style={{color:colors.white, fontSize:18, textAlign:'center',  fontFamily: 'Roboto-Medium', fontWeight:'500'}}>Don't have an account?
                  <Text style={{color:colors.primary,}}  
                  onPress={() =>
                    navigation.navigate('Signup')
                  }
                  > Sign Up</Text>
          </Text>
          <Text style={{color:colors.white, fontSize:18, textAlign:'center', fontFamily: 'Roboto-Medium', fontWeight:'500'}} >Or login With facebook </Text>
          <View style={{alignItems:'center', marginTop:10, marginBottom:calcH(0.02)}}>
          <Image source={require('../assets/images/logos_facebook.png')} style={styles.fbImage} /> 
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
        borderTopColor:colors.primary,
        borderWidth:1,
        borderTopWidth:1,
        marginBottom: 8,
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
    facebook: {
        marginTop:calcH(0.08)
      // position:'absolute',
      // width:'100%',
      // bottom: 30
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
    forgotContainer:{
        marginTop:calcH(0.02)
    },
    btnContainer:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:calcH(0.01)
    },
    fbImage:{
        width:calcH(0.08),
        height:calcH(0.08)
    }
});