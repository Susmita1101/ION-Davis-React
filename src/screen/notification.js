import React from "react";
import { View,Text, SafeAreaView, FlatList, StyleSheet, Image , TouchableOpacity, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './tabs'
import colors from '../assets/colors/color';
import {calcH,calcW} from '../utils/common';

const DATA = [
  {
    id: '1',
    icon: require('../assets/images/purchase.png'), 
    title: 'Your made a purchase',
    time: '10.25 am' 
  },
  {
    id: '2',
    icon: require('../assets/images/order-notify.png'),   
    title: 'Your order (123456) was processed',
    time: '10:30 am'
  },
  {
    id: '3',
    icon: require('../assets/images/car.png'), 
    title: 'Your driver is on the way',
    time: '11.00 am'
  },
  {
    id: '4',
    icon: require('../assets/images/package.png'),
    title: 'Your order (123456) was delivered',
    time: '11.00 am'
  },
];

export default Notification = ({route, navigation }) => {
  return (
    <View style={{height: "100%", alignItems: 'center', justifyContent: 'flex-start' , backgroundColor: colors.background}}>             
      <View style={{height:calcH(0.25), width:'100%', borderTopLeftRadius: 30 ,borderTopRightRadius :30}}>
      <TouchableOpacity style={{position:'absolute', left:10, top:20, zIndex:99}}
              onPress={() =>
                navigation.navigate('Setting')               
              }>   
      <Image  source={require('../assets/images/icon.png')} />
      </TouchableOpacity>
        <ImageBackground source={require('../assets/images/notification.png')} resizeMode="cover" style={styles.image} imageStyle={{borderTopLeftRadius: 30 ,borderTopRightRadius :30 }}>
      <Text style={styles.text}>Notifications</Text>
    </ImageBackground>
      </View>
      <View style={{width:'100%'}}>     
            <FlatList 
              data={DATA}
              renderItem={({item}) =>             
                    <View style={{borderStyle:'solid', padding:2, borderBottomColor:'#333', borderBottomWidth:1, width:'100%', justifyContent:'space-between', paddingHorizontal: 6,flex:1, alignItems:'center', flexDirection:'row' }}>
                      <Image source={item.icon} style={styles.icons}/>
                      <Text style={styles.item}>{item.title}</Text>
                      <Text style={styles.time}>{item.time}</Text>
                      </View>            
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
  item: {
    paddingVertical:12,
    paddingHorizontal:30,
    fontSize: 15,
    fontWeight: '400',
    fontFamily: 'Roboto-Regular',
    color: colors.white,
    width:'80%'
  },
  time: {
    fontSize: 15,
    color: colors.white,
    fontWeight: '400',
    fontFamily: 'Roboto-Regular',
    right: calcW(0.039),
  },
  icons: {
    width: calcW(0.06), 
    height: calcH(0.03), 
    left: calcW(0.030), 
    resizeMode:"stretch"
  }
});


