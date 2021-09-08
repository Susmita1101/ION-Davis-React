import React, { useState } from "react";
import { View, Text , SafeAreaView, FlatList, StyleSheet, StatusBar, Image , TouchableOpacity, ImageBackground, ScrollView} from 'react-native';
import Tabs from './tabs'
import colors from '../assets/colors/color';

const DATA = [
  {
    id: '1',
    title: 'PVC Boards',
    url:'ItemDetails'
  },
  {
    id: '2',
    title: 'Hardwood Boards',
    url:''
  },
  {
    id: '3',
    title: 'Barn Wood',
    url:''
  },
  {
    id: '4',
    title: 'MDF Boards',
    url:''
  },
  {
    id: '5',
    title: 'Softwood Boards',
    url:''
  },
  {
    id: '6',
    title: 'Shiplap',
    url:''
  },
];

export default NextchildSubcategory = ({route, navigation }) =>  {

  return (
    <View style={{ flex:1,height: "100%",  justifyContent: 'flex-start' , backgroundColor: colors.background }}>      
        
      
      <View style={{paddingHorizontal: 0}}>
          <View style={{height: 120, width:'100%', marginBottom:20 , borderTopLeftRadius: 25 ,borderTopRightRadius :25}}>
            <ImageBackground source={require('../assets/images/boards.png')} resizeMode="cover" style={styles.image} imageStyle={{borderTopLeftRadius: 25 ,borderTopRightRadius :25 }}>
          <Text style={styles.text}>Boards & Planks</Text>
          <TouchableOpacity style={{position:'absolute', left:10, top:20}}
                  onPress={() =>
                    navigation.navigate('CategoriesConstruction')
                    
                  }>   
          <Image source={require('../assets/images/icon.png')} />
          </TouchableOpacity>
        </ImageBackground>
          </View>

          <View style={{width:'100%', paddingHorizontal:10}}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Home')
                  } style={{width:'100%'}}>
                      <View style={{backgroundColor:colors.primary, padding:16, borderRadius:8, width:'100%', alignItems:'center' }}>
                          <Text style={{color:colors.white, fontSize:18, fontWeight: "bold"}}>
                              VIEW ALL ITEMS
                          </Text>
                      </View>
                </TouchableOpacity>
         </View>   
     
        
         <ScrollView >   
        <View style={{width:'100%', paddingLeft:10}}>
          <Text style={{textAlign:'left', color:'#9B9B9B', fontSize:18, paddingTop:10 }}>
            Choose category
          </Text>
        </View>
       
        <View style={{ }}>
            <FlatList 
              data={DATA}
              
              renderItem={({item}) =>
              <TouchableOpacity
                  onPress={() =>
                    navigation.navigate(item.url)
                  } >
                    <View style={{borderStyle:'solid', paddingHorizontal:16, borderBottomColor:'#333', borderBottomWidth:1, width:'100%', justifyContent:'space-between', flex:1, alignItems:'center', flexDirection:'row' }}>
                      <Text style={styles.item}>{item.title}</Text>
                     
                      </View>
             </TouchableOpacity> 
             }
              keyExtractor={item => item.id}
            />
        
        </View>

        </ScrollView>
      </View>
     
    </View> 
    
  );
}
const styles = StyleSheet.create({
    conview:{
      borderRadius:10,
      overflow:'hidden',
      marginBottom:20,
      height: 150, 
      width:'100%',
      padding:0,
      backgroundColor:colors.primary
    },
    container: {
     flex: 1,
     paddingTop: 22,
     
    },
    image: {
      resizeMode: "stretch",
      width:'100%',
      height: 120,
      borderTopLeftRadius: 25 ,
      borderTopRightRadius :25 
    },
    imagelist:{
      justifyContent: "flex-end",
      height:170,
      left:0,
      borderRadius:0,
      marginBottom:20,
      marginTop:-10,
      width:'120%',
      marginLeft:-15
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
    }
  });