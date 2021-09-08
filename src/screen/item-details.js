import React from "react";
import { View, Text , FlatList, StyleSheet, Image , TouchableOpacity, ImageBackground, SafeAreaView, Button, Dimensions } from 'react-native';
import Tabs from './tabs'
import colors from '../assets/colors/color';

export default ItemDetails = ({route, navigation }) =>  {

  return (
    <View style={{ flex:1,height: "100%",  justifyContent: 'flex-start' , backgroundColor: colors.background }}>      
        
      <View style={{height: 120, width:'100%', borderTopLeftRadius: 25 ,borderTopRightRadius :25 }}>
        <ImageBackground source={require('../assets/images/pvc.png')} resizeMode="cover" style={styles.image} imageStyle={{borderTopLeftRadius: 25 ,borderTopRightRadius :25 }}>
        <Text style={styles.text}>PVC Boards</Text>
            <TouchableOpacity style={{position:'absolute', left:10, top:20}}
                    onPress={() =>
                        navigation.navigate('NextchildSubcategory')
                        
                    }>   
                <Image source={require('../assets/images/icon.png')} />
            </TouchableOpacity>
            </ImageBackground>
      </View>
        <View style={{marginTop:20,paddingHorizontal:15}}>
            <SafeAreaView>
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
                            $ 26.18
                            </Text>
                        </View>
                        <View style={styles.cardmd}>
                              <Text style={styles.description}>
                              3/4 in. x 5-1/2 in. x 8 ft. White PVC Trim
                              </Text>
                        </View>
                        <View style={styles.cardbt}>
                          <View style={styles.count}>
                            <View style={styles.countmin}><Text style={styles.countcommon}>-</Text></View>
                            <View  style={styles.countnu}><Text style={styles.countNo}>1</Text></View>
                            <View  style={styles.countmin}><Text style={styles.countcommon}>+</Text></View>
                          </View>
                          <View style={styles.overallcartbutton}>
                          <TouchableOpacity
                        onPress={() =>
                            navigation.navigate('Product')
                        } style={styles.cartbutton}>                
                                <Text style={styles.cartname}>ADD TO CART</Text>          
                          </TouchableOpacity>
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
                            $ 24.63
                            </Text>
                        </View>
                        <View style={styles.cardmd}>
                              <Text style={styles.description}>
                              3/4 in. x 3-1/2 in. x 12 ft. Reversible Cellular White PVC Trim
                              </Text>
                        </View>
                        <View style={styles.cardbt}>
                          <View style={styles.count}>
                            <View style={styles.countmin}><Text style={styles.countcommon}>-</Text></View>
                            <View  style={styles.countnu}><Text style={styles.countNo}>1</Text></View>
                            <View  style={styles.countmin}><Text style={styles.countcommon}>+</Text></View>
                          </View>
                          <View style={styles.overallcartbutton}>
                          <TouchableOpacity
                        onPress={() =>
                            navigation.navigate('Product')
                        } style={styles.cartbutton}>                
                                <Text style={styles.cartname}>ADD TO CART</Text>          
                          </TouchableOpacity>
                          </View>
                        </View>
                      </View>
                </View>
            </SafeAreaView> 
        </View>
        <View style={styles.advertise}>
            <TouchableOpacity
                            onPress={() =>
                                navigation.navigate('Home')
                            } style={{width:'100%'}}>                
                                <Image style={{width:"100%" , marginTop: 10 }} source={require('../assets/images/adinstall.png')}/>                  
            </TouchableOpacity>
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
      backgroundColor: "#1E2429c0",
      borderTopLeftRadius: 25 ,
      borderTopRightRadius :25 
    },
    inputde:{
        borderRadius:5,
        paddingBottom:0,
        borderColor:colors.primary,
        borderWidth:1,
        marginBottom: 8,
        color:colors.white,
        height: 150,
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
      fontWeight: "bold"
    },
    description:{
      fontSize:16,
      color:colors.white,
    },
    price:{
      fontSize:18,
      color:colors.white,
      fontWeight: "bold"
    },
    cardmd:{

    },
    cardbt:{
      width:'100%',
      flexDirection: "row",
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
      borderRadius: 7,
      padding:4,
      width: '100%',

    },
    cartname: {
      color:colors.white,
      textAlign:"center",
      width: "100%",
      fontWeight: "bold"
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
    }
  });