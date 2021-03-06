import React from "react";
import { View,Text, SafeAreaView, FlatList, StyleSheet, Image , TouchableOpacity, ImageBackground,StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './tabs'
import colors from '../assets/colors/color';
import {calcH,calcW} from '../utils/common';

const DATA = [
  {
    id: '1',
    title: 'Terms and Conditions',
    url:'Terms'
  },
  {
    id: '2',
    title: 'Privacy Policy',
    url:'Terms'
  },
  
];

export default Privacy = ({route, navigation }) => {
  return (
    <View style={{height: "100%", alignItems: 'center', justifyContent: 'flex-start' , backgroundColor: colors.background}}>             
      <View style={{height:calcH(0.25), width:'100%', borderTopLeftRadius: 30 ,borderTopRightRadius :30}}>
      <TouchableOpacity style={{position:'absolute', left:10, top:20, zIndex:99}}
              onPress={() =>
                navigation.navigate('Setting')               
              }>   
      <Image  source={require('../assets/images/icon.png')} />
      </TouchableOpacity>
        <ImageBackground source={require('../assets/images/privacy.png')} resizeMode="cover" style={styles.image} imageStyle={{borderTopLeftRadius: 30 ,borderTopRightRadius :30 }}>
      <Text style={styles.text}>Privacy and Security</Text>
    </ImageBackground>
      </View>
      <View style={{width:'100%'}}>
      
            <FlatList 
              data={DATA}
              renderItem={({item}) => 
              <TouchableOpacity
                  onPress={() =>
                    navigation.navigate(item.url)
                  } >           
                    <View style={{borderStyle:'solid', padding:2, borderBottomColor:'#333', borderBottomWidth:1, width:'100%', justifyContent:'space-between', flex:1, alignItems:'center', flexDirection:'row' }}>
                      <Image source={{uri:DATA.icon}}   />
                      <Text style={styles.item}>{item.title}</Text>
                      <Image style={{marginRight:8}} source={require('../assets/images/chevron-right.png')}/>
                      </View>   
              </TouchableOpacity>          
             }
              keyExtractor={item => item.id}
            />
        
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
    fontFamily: 'Roboto-Bold',
    fontWeight: '700',
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
  item: {
    paddingVertical:12,
    paddingHorizontal:10,
    fontSize: 18,
    color: colors.white,
    width:'80%',
    fontWeight: '400',
    fontFamily: 'Roboto-Regular',
  },
});


