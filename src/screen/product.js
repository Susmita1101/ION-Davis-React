import React, { useState } from "react";
import { View , TextInput,
  Text, SafeAreaView, FlatList, StyleSheet, StatusBar, Image , TouchableOpacity, ImageBackground, ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './tabs'
import colors from '../assets/colors/color';
import {Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default Product = ({route, navigation }) => {
  return (
    <View style={{height: "100%", alignItems: 'center', justifyContent: 'flex-start' , backgroundColor: colors.background}}>             
      <View style={{height: '100%', width:'100%', borderTopRightRadius:25, borderTopLeftRadius:25, overflow:'hidden'}}>
            
      <ImageBackground source={require('../assets/images/varendafull.png')} resizeMode="cover" style={styles.image}>
    <Text style={styles.text}></Text>
     <TouchableOpacity style={{position:'absolute', left:10, top:19, zIndex:99, backgroundColor: "#000c0", width:"100%"}}
              onPress={() =>
                navigation.navigate('Cart')               
              } >   
      <Image  source={require('../assets/images/icon.png')} />
      </TouchableOpacity>
    <Image source={require('../assets/images/shortimg.png')} style={styles.smallimg} resizeMode="stretch" />
    </ImageBackground>
      
          <ScrollView style={{marginTop:300, width:'100%'}}>
            <View style={{justifyContent: 'flex-end'}}>
                    <View style={{ width:'100%', backgroundColor:colors.background,  padding:16, }}>
                            <View style={{marginBottom:24, }}>
                              <Text style={styles.title1}>Veranda</Text> 
                            </View>
                            <View style={styles.cardbt}> 
                                <Text style={styles.context}>Set Quantity</Text>                  
                                <View style={styles.count}>
                                 <View style={styles.countmin}><Text style={styles.countcommon}>-</Text></View>
                                <View style={styles.countnu}><Text style={styles.countNo}>1</Text></View>
                                <View style={styles.countmin}><Text style={styles.countcommon}>+</Text></View>
                              </View> 
                              <Text style={styles.price}>$ 21.18 </Text>
                            </View>
                             
                            <TouchableOpacity
                              onPress={() =>
                                navigation.navigate('cart')
                              } style={{width:'100%'}}>
                                <View style={{backgroundColor:colors.primary, padding:16, borderRadius:8, width:'100%', alignItems:'center' }}>
                                    <Text style={{color:colors.white, fontSize:18, fontWeight: "bold"}}>
                                    ADD TO CART
                                    </Text>
                                </View>
                            </TouchableOpacity>
                    </View>

                    <View style={{ width:'100%', backgroundColor:colors.background,  padding:16, }}>
                            <View style={{marginBottom:24}}>
                            <Text style={styles.title2}>Product Overview</Text> 
                    <Text style={styles.context}>The 3/4 in. x 5-1/2 in. x 8 ft. White Reversible PVC Trim veranda hp cellular PVC trim is a durable alternative to wood siding. It is engineered to resist expansion and contraction and has a hard surface that protects against dents and weather damage. It is the only S4S (smooth 4 sides) material that prevents dirt and ultra-easy to clean. The vinyl material is fire retardant and protected against rot and termites. It installs easily with screws or nails. Lifetime limited warranty S4S or sealed edge to prevent dirt Will not rot, crack, splinter or split Resistant to mold and mildew Impervious to moisture, insect and termite Does not require painting, accepts paints and stains well Fire retardant, class A flame spread rated</Text>
                            </View>
                    </View>
            </View> 
          </ScrollView>   
      </View>
     <View>       
     </View>     
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22,
   
  },
  image: {
    flex: 1,
    justifyContent: "flex-start",
    width:'100%',
    height:300
    
  },
  text: {
    color: "white",
    fontSize: 25,
    lineHeight: 60,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#1E2429c0",
    position:'absolute',
    width:'100%',
    height:60,
    borderTopRightRadius:25,
    borderTopLeftRadius:25
    
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
  context: {
    color:colors.white,
    marginBottom:4,
    fontSize:18,  
  },
  title1: {
    color:colors.white,
    marginBottom:15,
    fontSize:18,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
    width: 69
  },
  title2: {
    color:colors.white,
    marginBottom:15,
    fontSize:18,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
    width: 143
  },
  smallimg: {
    height:47,
    width:47,
    top:70,
    left:16,
    position:"absolute",
    zIndex:99
  },
  count: {
    // width:'50%',
    bottom:10,
    padding:10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  countmin: {
    width:25,
    height: 25,
    borderStyle:"solid",
    borderColor:colors.white,
    borderRadius:20 ,
    borderWidth: 2,
    textAlign:"center"
   
  },
  countnu: {
    width:25,
    height: 25,
    textAlign:"center"
  },
 
  countNo: {
    color:colors.white,
    lineHeight: 25,
    textAlign:'center'
  
  },
  countcommon: {
    color:colors.white,
    fontSize:20,
    textAlign:"center",
    width:'100%',
    lineHeight: 21  
  },
  cardbt:{
    width:'100%',
    flexDirection: "row",
    marginTop: -19
  },
  price: {
    fontSize:18,
    color:colors.white,
    right:0,
    textAlign:'right',
    width:screenWidth - 240,
  }
 
});


