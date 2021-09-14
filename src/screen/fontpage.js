import React, { useState } from "react";
import { View, Text , SafeAreaView, FlatList, StyleSheet, StatusBar, Image , TouchableOpacity ,Dimensions} from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './tabs'
import colors from '../assets/colors/color';
import { SliderBox } from "react-native-image-slider-box";
  
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'CONSTRUCTION',
    pic: require('../assets/images/Category1.png'),
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'LANDSCAPING',
    pic: require('../assets/images/landscape.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'REQUESTS',
    pic: require('../assets/images/requestcategory.png'),
  },
];

 const images = [
  require('../assets/images/constructionslider.png'),
  require('../assets/images/landscapeslider.png'),
  require('../assets/images/specialrequestslider.png'),
]

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    height:180,
  },
 
});

export default Fontpage = ({route, navigation }) =>  {

  const renderItem = ( item ) => (
    <View style={{height: 140, width:120 ,borderTopLeftRadius: 12 ,borderTopRightRadius: 12 , margin: 4}}>
      <TouchableOpacity
              onPress={() =>
                navigation.navigate('CategoriesConstruction')              
              }>                
             <Image style={{width: '100%', height:125, resizeMode: "cover" , borderTopLeftRadius: 12 ,borderTopRightRadius: 12 }}  source={require('../assets/images/requestcategory.png')}/>
    <Text style={{ height: 25 ,backgroundColor: '#9B9B9B' , fontSize: 14 ,color: colors.white , textAlign: "center" , padding: 2}}>REQUESTS</Text>                       
        </TouchableOpacity>      
    </View>
  );

  return (
    <View style={{height:screenHeight, alignItems: 'center',   backgroundColor: colors.background, flex:2 }}> 
        
      <View style={{ height: screenHeight - 370, width:"100%", alignItems: 'center', justifyContent: 'flex-start' }}>
      <SliderBox images={images} sliderBoxHeight={400} dotColor="#DB3022"
  inactiveDotColor="#FFFFFF" /> 
      </View>


      <View style={{ padding: 10 , backgroundColor: colors.background, height:50 }}><Text style={{color: colors.white, fontSize: 25 }}>CATEGORIES</Text></View>
    
      <SafeAreaView style={styles.container}>
        <FlatList horizontal
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
        
      </SafeAreaView> 

      <TouchableOpacity
              onPress={() =>
                navigation.navigate('Home')
              } style={{width:'100%'}}>                
                  <Image style={{width:"100%",  bottom:0,}} source={require('../assets/images/adinstall.png')}/>                  
        </TouchableOpacity>       
    </View>  
  );
}
