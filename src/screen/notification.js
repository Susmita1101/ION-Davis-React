import React from "react";
import { View,Text, SafeAreaView, FlatList, StyleSheet, Image , TouchableOpacity, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './tabs'
import colors from '../assets/colors/color';

const DATA = [
  {
    id: '1',
    icon: require('../assets/images/car.png'), 
    title: 'Your made a purchase',
    time: '10.25 am' 
  },
  {
    id: '2',
    icon: require('../assets/images/package.png'), 
    title: 'Your order (123456) was processed',
    time: '10:30 am'
  },
  {
    id: '3',
    icon: require('../assets/images/order-notify.png'), 
    title: 'Your driver is on the way',
    time: '11.00 am'
  },
  {
    id: '4',
    icon: require('../assets/images/purchase.png'), 
    title: 'Your order (123456) was delivered',
    time: '11.00 am'
  },
];

export default Notification = ({route, navigation }) => {
  return (
    <View style={{height: "100%", alignItems: 'center', justifyContent: 'flex-start' , backgroundColor: colors.background}}>             
      <View style={{height: '30%', width:'100%',}}>
      <TouchableOpacity style={{position:'absolute', left:10, top:20, zIndex:99}}
              onPress={() =>
                navigation.navigate('Setting')               
              }>   
      <Image  source={require('../assets/images/icon.png')} />
      </TouchableOpacity>
        <ImageBackground source={require('../assets/images/notification.png')} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>Notifications</Text>
    </ImageBackground>
      </View>
      <View style={{width:'100%'}}>
      
            <FlatList 
              data={DATA}
              renderItem={({item}) =>             
                    <View style={{borderStyle:'solid', padding:2, borderBottomColor:'#333', borderBottomWidth:1, width:'100%', justifyContent:'space-between', flex:1, alignItems:'center', flexDirection:'row' }}>
                      <Image source={item.icon} style={styles.icons}/>
                      <Text style={styles.item}>{item.title}</Text>
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
  item: {
    paddingVertical:12,
    paddingHorizontal:10,
    fontSize: 20,
    color: colors.white,
    width:'80%'
  },
  icons: {
    width: 20, 
    height: 20 , 
    left:15, 
    paddingLeft:10,
    resizeMode:"stretch"
  }
});


