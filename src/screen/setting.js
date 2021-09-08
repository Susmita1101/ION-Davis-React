import * as React from 'react';
import { View, Text,  SafeAreaView ,FlatList , StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import colors from '../assets/colors/color';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const DATA = [
  {
    id: '1',
    title: 'Accounts',
    url:'Account'
  },
  {
    id: '2',
    title: 'Notifications',
    url:'Notification'
  },
  {
    id: '3',
    title: 'Special Request',
    url:'Request'
  },
  {
    id: '4',
    title: 'Privacy and Security',
    url:'Privacy'
  },
  {
    id: '5',
    title: 'Help and Support',
    url:'Help'
  },
  {
    id: '6',
    title: 'About',
    url:'About'
  }
];

const image = { uri: "../assets/images/settingheader.png" };

export default Setting = ({route, navigation }) =>  {
  return (
    <View style={{height: "100%", alignItems: 'flex-start', justifyContent: 'flex-start' , backgroundColor: colors.background }}>
      <View style={{height: 120, width:'100%'}}>
        <ImageBackground source={require('../assets/images/settingheader.png')} resizeMode="cover" style={styles.image}>
              <Text style={styles.text}>Settings</Text>
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
                      <Text style={styles.item}>{item.title}</Text>
                      <Image style={{marginRight:8}} source={require('../assets/images/chevron-right.png')}/>
                      </View>
             </TouchableOpacity> 
             }
              keyExtractor={item => item.id}
            />
        
        </View>
        <View style={{height: "20%" , marginTop:40, width: '100%', alignItems:'flex-end', padding:10}}>
        <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Home')
                  }  style={{flexDirection:'row', }}>
                      <View style={{ height:50 , backgroundColor:colors.primary, padding:15, borderRadius:8, alignItems:'center',  }}>
                          <Text style={{color:Colors.white, fontSize:18}}>
                              LOG OUT
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
  }
});