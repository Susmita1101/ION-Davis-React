import React from "react";
import { View,Text, SafeAreaView, FlatList, StyleSheet, Image , TouchableOpacity, ImageBackground, Dimensions, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './tabs'
import colors from '../assets/colors/color';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default OrderDetails = ({route, navigation }) => {
  return (
    <View style={{height: "100%", alignItems: 'center', justifyContent: 'flex-start' , backgroundColor: colors.background}}>             
      <View style={{height: '30%', width:'100%',}}>
      <TouchableOpacity style={{position:'absolute', left:10, top:20, zIndex:99}}
              onPress={() =>
                navigation.navigate('Orders')               
              }>   
      <Image  source={require('../assets/images/icon.png')} />
      </TouchableOpacity>
        <ImageBackground source={require('../assets/images/order-details.png')} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>Order Details</Text>
    </ImageBackground>
      </View>
      <ScrollView>
      <View style={{top:20, paddingHorizontal:15,  width:'100%'}}>
      
      <View style={styles.srollsection}> 
              <View style={styles.inputde}>
                  <View style={styles.cardtp}>
                      <Text style={styles.ftcolor}>Order No : 1</Text> 
                      <Text style={styles.ftcolor}>06-17-2021</Text>  
                  </View>
                  <View style={styles.cardtp}>
                    <Text style={styles.ftcolor}>Quantity : 3</Text> 
                    <Text style={styles.ftcolor}>Total Amount: $ 101.79</Text>                           
                </View>  
                <View style={styles.cardtp}>
                <TouchableOpacity 
                      style={{width: 109 }}>
                          {/* <View style={{ padding:12, borderRadius:50, width:'100%', alignItems:'center',borderWidth: 1, borderColor:colors.white , marginVertical: 8}}>
                              <Text style={{color:colors.white, fontSize:14}}>
                              DETAILS
                              </Text>
                          </View> */}
                    </TouchableOpacity>
                    <Text style={styles.markorderdeliver}>DELIVERED</Text>                           
                </View>                       
              </View> 

                  
            <View style={styles.inputdetow}>
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
                 

                <View style={styles.inputdetow}>
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
                            <View  style={styles.countnu}><Text style={styles.countNo}>2</Text></View>
                            <View  style={styles.countmin}><Text style={styles.countcommon}>+</Text></View>
                          </View>                       
                        </View>
                      </View>
                </View>  

                <View style={{height:200, width:'100%'}}>
                  <Text style={styles.titleOrder}>Order information</Text>
                      <View style={styles.total}>
                            <Text style={styles.titleleft}>Shipping Addresss :</Text>
                            <Text style={styles.titleright}>3 Newbridge Court ,Chino Hills, CA 91709, United States</Text>
                     </View>
                     <View style={styles.total}>
                            <Text style={styles.titleleft}>Payment Method :</Text>
                            
                            <Text style={[styles.titleright, styles.imgposition ]}>
                            <Image style={styles.cardImg} source={require('../assets/images/card.png')} />          **** **** **** 3947</Text> 
                     </View>  
                   
                     <View style={styles.total}>
                            <Text style={styles.titleleft}>Total Amount : </Text>
                            <Text style={styles.titleright}>$ 101 .79</Text>
                     </View>                             
                </View>   
          </View> 
            
        </View>    
        </ScrollView>    
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
  inputde:{
    borderRadius:5,
    padding:10,
    paddingBottom:0,
    borderColor:colors.primary,
    borderWidth:1,
    marginBottom: 8,
    color:colors.white,
},
inputdetow:{
    borderRadius:5,
    paddingBottom:0,
    borderColor:colors.primary,
    borderWidth:1,
    marginBottom: 8,
    color:colors.white,
    height:124,
    flexDirection:'row'
},
cardtp:{
  justifyContent:'space-between',
  flexDirection: "row",
  marginBottom:10,  
  alignItems: "center",
  color:colors.white
},
markorderdeliver:{
    color: "#30CC52",
    fontSize: 16
},
srollsection: {
   height:'65%',
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
    height:94,
    justifyContent:'space-between'
  },
  title:{
    fontSize:18,
    color:colors.white,
  },
  price:{
    fontSize:16,
    color:colors.white,
  },
  cardbt:{     
    width:'100%',
    flexDirection: "row",
    top:20,
    alignSelf:'flex-end'
  },
  count: {
    width:75,
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
  titleOrder:{
      fontSize:16, 
      color:colors.white
  },
  total:{
      flexDirection:"row",
      alignItems:'center',
      marginBottom:6
  },
  titleleft: {
    width:150,
    fontSize:15,
    color:colors.white
  },
  titleright: {
    width:screenWidth - 190,
    fontSize:16,
    color:colors.white
  },
  cardImg :{
     width: 30,
     height: 30,
   // marginTop: 0,
    resizeMode: "contain",
  },
  imgposition: {
    height: 50,

  }
});


