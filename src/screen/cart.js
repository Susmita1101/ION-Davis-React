import React, { useState } from "react";
import { View, Text , FlatList, StyleSheet, Image , TouchableOpacity, ImageBackground ,ScrollView,Dimensions} from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './tabs'
import colors from '../assets/colors/color';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


export default Cart = ({route, navigation }) => {
  return (
    <View style={{ flex:1,height: "100%",  justifyContent: 'flex-start' , backgroundColor: colors.background }}>      
        
      <View style={{height: 120, width:'100%'}}>
        <ImageBackground source={require('../assets/images/cartpage.png')} resizeMode="stretch" style={styles.image}>
        <Text style={styles.text}>Cart</Text>
            </ImageBackground>
      </View>
        <View style={{marginTop:20,paddingHorizontal:15}}>
           <View style={styles.srollsection}>
             <ScrollView>
           
            <View style={styles.inputde}>
                      <View style={styles.cardleft}>
                        <Image style={styles.cardimg} source={require('../assets/images/veranda.png')} />
                      </View>
                      <View style={styles.cardright}>
                        <View style={styles.cardtp}>
                            <Text style={styles.title}>
                            Veranda
                            </Text>
                            <Text style={styles.price}>
                            $ 52.36
                            </Text>
                        </View>
                       
                        <View style={styles.cardbt}>
                          <View style={styles.count}>
                            <View style={styles.countmin}><Text style={styles.countcommon}>-</Text></View>
                            <View  style={styles.countnu}><Text style={styles.countNo}>2</Text></View>
                            <View  style={styles.countmin}><Text style={styles.countcommon}>+</Text></View>
                          </View>                       
                        </View>
                      </View>
                </View>
                
                <View style={styles.inputde}>
                      <View style={styles.cardleft}>
                        <Image style={styles.cardimg} source={require('../assets/images/reversableTrim.png')} />
                      </View>
                      <View style={styles.cardright}>
                        <View style={styles.cardtp}>
                            <Text style={styles.title}>
                            Reversible Trim
                            </Text>
                            <Text style={styles.price}>
                            $ 24.43
                            </Text>
                        </View>
                      
                        <View style={styles.cardbt}>
                          <View style={styles.count}>
                            <View style={styles.countmin}><Text style={styles.countcommon}>-</Text></View>
                            <View  style={styles.countnu}><Text style={styles.countNo}>1</Text></View>
                            <View  style={styles.countmin}><Text style={styles.countcommon}>+</Text></View>
                          </View>                         
                        </View>
                      </View>
                </View>
           </ScrollView>
          </View> 
            <View style={styles.information}>
                <Text style={styles.inoftext}>Order Total:</Text><Text style={styles.inoftext}>$ 76.79</Text>
            </View>
            <View style={styles.information}>
                <Text style={styles.inoftext}>Delivery:</Text><Text style={styles.inoftext}>$ 25</Text>
            </View>
            <View style={styles.information}>
                <Text style={styles.inoftext}>Summary:</Text><Text style={styles.inoftext}>$ 101.79</Text>
            </View>
            <View style={styles.checkButton}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Checkout')
                  } style={{width:'100%'}}>
                      <View style={{backgroundColor:colors.primary, padding:16, borderRadius:8, width:'100%', alignItems:'center' }}>
                          <Text style={{color:colors.white, fontSize:18}}>
                          CHECK OUT
                          </Text>
                      </View>
                </TouchableOpacity> 
            </View>            
        </View> 

              
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22,
   
  },
  information:{
    justifyContent:'space-between',
    bottom:10,
    flexDirection: "row"
  },
  srollsection: {
    height:screenHeight - 380,
  },
  image: {
    resizeMode: "stretch",
    width:'100%',
    height: 120,
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
  inputde:{
      borderRadius:5,
      paddingBottom:0,
      borderColor:colors.primary,
      borderWidth:1,
      marginBottom: 8,
      color:colors.white,
      height: 120,
      width:'100%',
      flexDirection:'row'
      
  },
  cardleft:{
    width:'30%',
    height:'100%',
  },
  cardimg:{
    width:'100%',
    height:'100%',
    resizeMode:'cover'
  },
  cardright:{
    padding:10,
    width:'70%',

  },
  cardtp:{
    justifyContent:'space-between',
    flexDirection: "row",
    marginBottom:10,
    
  },
  title:{
    fontSize:18,
    color:colors.white,
  },
  description:{
    fontSize:16,
    color:colors.white,
  },
  price:{
    fontSize:16,
    color:colors.white,
  },
  cardmd:{

  },
  cardbt:{
    width:'100%',
    flexDirection: "row",
    top:20
  },
  count: {
    width:'50%',
    padding:10,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  ftcolor:{
      color:'#9b9b9b'
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

  },
 
  countNo: {
    color:colors.white,
    lineHeight: 25
  },
  countcommon: {
    color:colors.white,
    fontSize:20,
    textAlign:"center",
    width:'100%',
    lineHeight: 21  
  },
  cartbutton: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    padding:4,
    width: '100%',

  },
  cartname: {
    color:colors.white,
    textAlign:"center",
    width: "100%"
  }, 
  overallcartbutton: {
    width:'50%',
    paddingTop:10,
    paddingLeft:10
  },
  advertise: {
    position:"absolute",
    bottom: 15,
    left:0,
    width:'100%',
    height: 50
  },
  inoftext:{
    color:'#fff',
  },
  checkButton:{

  }
});

