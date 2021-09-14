import React, { useState } from "react";
import {Alert, View,Text,Modal, SafeAreaView, FlatList, StyleSheet, Image , TouchableOpacity, ImageBackground ,ScrollView} from 'react-native';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './tabs'
import colors from '../assets/colors/color';
import {calcH,calcW} from '../utils/common';

export default Account = ({route, navigation }) => {
  const [actionTriggered, setActionTriggered] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
 
  return (
    <View style={{height: "100%",  justifyContent: 'flex-start' , backgroundColor: colors.background , alignItems: 'center'}}>
        <View style={{height:calcH(0.25), width:'100%', borderTopLeftRadius: 30 ,borderTopRightRadius :30}}>
          <ImageBackground source={require('../assets/images/settingheader.png')} resizeMode="cover" style={styles.image} imageStyle={{borderTopLeftRadius: 30 ,borderTopRightRadius :30 }} >
                <Text style={styles.text}>Account</Text>
          </ImageBackground>
          <TouchableOpacity style={{position:'absolute', left:10, top:20, zIndex:99}}
              onPress={() =>
                navigation.navigate('Setting')               
              }>   
            <Image  source={require('../assets/images/icon.png')} />
          </TouchableOpacity>
      </View>

      <View style={{marginTop:20,paddingHorizontal:10}}>
          <ScrollView>
          <TouchableOpacity 
             onPress={() => {
              setModalVisible(true);
              setActionTriggered('ACTION_1'); // HERE
            }}
              >
              <View style={styles.information}>
                <Text style={styles.inoftext}>Personal Information</Text> 
                <Text style={styles.inoftext}>Change</Text>
              </View>
              </TouchableOpacity>    
              <View style={styles.inputsmall}>
                  <Text style={styles.ftcolor}>Full Name</Text>
                  <Text style={styles.ftcolorInner}>Anthony</Text> 
              </View>
              <View style={styles.inputsmall}>
                  <Text style={styles.ftcolor}>Date of Birth</Text>
                  <Text style={styles.ftcolorInner}>12/12/1989</Text> 
              </View>
              <View style={styles.inputsmall}>
                  <Text style={styles.ftcolor}>Sex</Text>
                  <Text style={styles.ftcolorInner}>Male</Text> 
              </View>
              <View style={styles.inputsmall}>
                  <Text style={styles.ftcolor}>Phone Number</Text>
                  <Text style={styles.ftcolorInner}>xxx-xxx-xxxx</Text> 
              </View>

          <TouchableOpacity 
             onPress={() => {
              setModalVisible(true);
              setActionTriggered('ACTION_2'); // HERE
            }} style={styles.martop} >  
              <View style={styles.information}>
                <Text style={styles.inoftext}>Password</Text> 
                <Text style={styles.inoftext}>Change</Text>
              </View>
          </TouchableOpacity>        
              <View style={styles.inputsmall}>
                  <Text style={styles.ftcolor}>Password</Text>
                  <Text style={styles.ftcolorInner}>************</Text> 
              </View>

              <TouchableOpacity 
                  onPress={() => {
                    setModalVisible(true);
                    setActionTriggered('ACTION_3'); // HERE
                  }} style={styles.martop}>  
              <View style={styles.information}>
                <Text style={styles.inoftext}>Edit Home/Work Group</Text> 
                <Text style={styles.inoftext}>Change</Text>
              </View>
              </TouchableOpacity> 
              <View style={styles.inputsmall}>
                  <Text style={styles.ftcolor}>Address line 1</Text>
                  <Text style={styles.ftcolorInner}>Lorem ipsum dolor sit amet</Text> 
              </View>
              <View style={styles.inputsmall}>
                  <Text style={styles.ftcolor}>Address line 2</Text>
                  <Text style={styles.ftcolorInner}>Lorem ipsum dolor sit amet</Text> 
              </View>            
          </ScrollView>
      </View>

      <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
          
          {actionTriggered === 'ACTION_1' ? 
              <View style={styles.mdovdet}>
                        <View style={styles.mdclose}></View>
                        <Text style={styles.modalheading}>Personal Information</Text>
                        <View style={styles.inputmodal}>
                            <Text style={styles.ftcolor}>Full Name</Text>
                            <Text style={styles.ftcolorInner}>Anthony</Text>
                        </View>
                        <View style={styles.inputmodal}>
                            <Text style={styles.ftcolor}>Date of Birth</Text>
                            <Text style={styles.ftcolorInner}>12/12/1989</Text>
                        </View>
                        <View style={styles.inputmodal}>
                            <Text style={styles.ftcolor}>Sex</Text>
                            <Text style={styles.ftcolorInner}>Male</Text>
                        </View>
                        <View style={styles.inputmodal}>
                            <Text style={styles.ftcolor}>Phone Number</Text>
                            <Text style={styles.ftcolorInner}>xxx-xxx-xxxxx</Text>
                        </View>

                    <TouchableOpacity 
                      onPress={() => setModalVisible(!modalVisible)} style={{width:'100%', }}>
                          <View style={{backgroundColor:colors.primary, padding:16, borderRadius:8, width:'100%', alignItems:'center' }}>
                              <Text style={{color:colors.white, fontSize:18}}>
                              SAVE INFORMATION
                              </Text>
                          </View>
                    </TouchableOpacity>
              </View>         
             : actionTriggered === 'ACTION_2' ?
             <View style={styles.mdovdet}>
                        <View style={styles.mdclose}></View>
                        <Text style={styles.modalheading}>Password Change</Text>
                        <View style={styles.inputmodal}>                          
                            <Text style={styles.ftcolorModal}>Old Password</Text>
                        </View>
                        <View>
                            <Text style={{color:colors.white, marginBottom:20, fontSize:14, textAlign:'right'}} 
                            onPress={() => navigation.navigate('ForgotPassword')
                                  }>Forgot your password? <Image source={require('../assets/images/right-icon.png')} /></Text>
                          </View>
                        <View style={styles.inputmodal}>                            
                            <Text style={styles.ftcolorModal}>New Password</Text>
                        </View>
                        <View style={styles.inputmodal}>                          
                            <Text style={styles.ftcolorModal}>Repeat New Password</Text>
                        </View>
                        
                        <TouchableOpacity 
                      onPress={() => setModalVisible(!modalVisible)} style={{width:'100%', }}>
                          <View style={{backgroundColor:colors.primary, padding:16, borderRadius:8, width:'100%', alignItems:'center' }}>
                              <Text style={{color:colors.white, fontSize:18}}>
                              SAVE PASSWORD
                              </Text>
                          </View>
                    </TouchableOpacity>    
             </View> :
                
                actionTriggered === 'ACTION_3' ? 
                <View style={styles.mdovdet}> 
                    <View style={styles.mdclose}></View>
                    <Text style={styles.modalheading}>Address Change</Text>
                    <View style={styles.inputmodal}>
                            <Text style={styles.ftcolor}>Full Name</Text>
                            <Text style={styles.ftcolorInner}>Anthony</Text>
                    </View>
                    <View style={styles.inputmodal}>
                        <Text style={styles.ftcolor}>Address</Text>
                        <Text style={styles.ftcolorInner}>3 Newbridge Court </Text>
                    </View>
                    <View style={styles.inputmodal}>
                        <Text style={styles.ftcolor}>City</Text>
                        <Text style={styles.ftcolorInner}>Chino Hills</Text>
                    </View>
                    <View style={styles.inputmodal}>
                        <Text style={styles.ftcolor}>State</Text>
                        <Text style={styles.ftcolorInner}>CA</Text>
                    </View>
                    <View style={styles.inputmodal}>
                        <Text style={styles.ftcolor}>Zip Code</Text>
                        <Text style={styles.ftcolorInner}>91709</Text>
                    </View>
                    <View style={styles.inputmodal}>
                        <Text style={styles.ftcolor}>Country</Text>
                        <Text style={styles.ftcolorInner}>United States</Text>
                    </View>
                    <TouchableOpacity 
                      onPress={() => setModalVisible(!modalVisible)} style={{width:'100%' }}>
                          <View style={{backgroundColor:colors.primary, padding:16, borderRadius:8, width:'100%', alignItems:'center' }}>
                              <Text style={{color:colors.white, fontSize:18}}>
                              SAVE ADDRESS
                              </Text>
                          </View>
                    </TouchableOpacity>                                        

                </View> :
            null }        
        </Modal> 
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
  item: {
    paddingVertical:12,
    paddingHorizontal:10,
    fontSize: 20,
    color: colors.white,
    width:'80%'
  },
  text: {
    color: "white",
    fontSize: 30,
    lineHeight: 60,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#1E2429c0"
  },
  information:{
    bottom:5,
    justifyContent:'space-between',
    flexDirection: "row"
  },
  inoftext: {
    color:'#fff',
  },
  inputsmall:{
 //   borderColor:colors.primary,
  //  borderWidth:1,
    paddingHorizontal:20,
    borderRadius:5,
    paddingLeft:16,
    paddingBottom:0,
    marginBottom: 8,
    color:colors.white,
    height: 50,
    position:'relative',
    top:8 ,
    
},
ftcolor:{
  color:'#9b9b9b'
},
ftcolorModal:{
  color:'#9b9b9b',
  fontSize: 18,
  top:5
},
ftcolorInner: {
  color:colors.white,
  height:30,
  borderRadius:4,
  borderStyle:'solid',
  justifyContent: "flex-start",
  textAlignVertical: 'top',
},
  inputmodal: {
    borderRadius:5,
    padding:10,
    paddingBottom:0,
    borderColor:colors.primary,
    borderWidth:1,
    marginBottom: 8,
    color:colors.white,
    height: 60,
  },
  martop:{
    marginTop:30
  },
  modalheading: {
    width:'100%',
    textAlign:'center',
    color: colors.white,
    fontSize:18,
    marginBottom: 18,
  },
  mdclose:{
    height:6,
    width:60,
    backgroundColor:colors.white,
    borderRadius:50,
    alignSelf:'center',
    marginVertical:16
  },
  mdovdet:{  justifyContent: 'flex-end',
  backgroundColor: colors.modalbackground, 
  position:'absolute',
  width:'100%', 
  bottom:0, 
  padding:10, 
  borderTopRightRadius:30,
  borderTopLeftRadius:30
}
});




