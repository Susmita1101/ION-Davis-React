import React, { useState } from "react";
import { View, Text , ImageBackground ,Dimensions, StyleSheet, SafeAreaView ,TouchableOpacity,StatusBar } from 'react-native';
import SegmentedControlTab from "react-native-segmented-control-tab";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {calcH,calcW} from '../utils/common';
import colors from '../assets/colors/color';
import { ScrollView } from 'react-native-gesture-handler';

export default Orders = ({route, navigation }) =>  {
  const [index, setIndex] = useState(0);
  const handleTabsChange = (index) => {
    setIndex(index);
  };


  return (
  
    <View style={{ height: "100%",  justifyContent: 'flex-start' , backgroundColor: colors.background }}>
      <StatusBar hidden={false}/>
      <View style={{height:calcH(0.25), width:'100%' , borderTopLeftRadius: 30 ,borderTopRightRadius :30}}>
        <ImageBackground source={require('../assets/images/order-details.png')} resizeMode="cover" style={styles.image} imageStyle={{borderTopLeftRadius: 30 ,borderTopRightRadius :30 }}>
        <Text style={styles.text}>Orders</Text>
            </ImageBackground>
      </View>
    <View>
      <SegmentedControlTab
             values             = { ["Purchased", "In Route", "Delivered"] }
             selectedIndex      = {index}
             onTabPress         = {handleTabsChange}           
             tabStyle           = { styles.tabStyle }
             tabTextStyle       = { styles.tabTextStyle }
             activeTabStyle     = { styles.activeTabStyle }
             activeTabTextStyle = { styles.activeTabTextStyle }        
             borderRadius       = {10}
      />
  

     {index === 0 ? 
      <View style={{top:calcH(0.03), paddingHorizontal:15}}>
          <SafeAreaView>
              <View style={[styles.inputde]}>
                  <View style={styles.cardtp}>
                      <Text style={styles.ftcolor}>Order No : 1456</Text> 
                      <Text style={styles.ftcolor}>06-17-2021</Text>  
                  </View>
                  <View style={styles.cardtp}>
                    <Text style={styles.ftcolor}>Quantity : 30000</Text> 
                    <Text style={styles.ftcolor}>Total: $ 101.79</Text>                           
                </View>  
                <View style={styles.cardtp}>
                <TouchableOpacity onPress={() =>
                    navigation.navigate('OrderDetails') }
                    style={{ padding:11, borderRadius:50, width:calcW(0.30), alignItems:'center',borderWidth: 1, borderColor:colors.white , marginVertical: 8}}>
                          {/* <View style={{ padding:12, borderRadius:65, width:'100%', alignItems:'center',borderWidth: 1, borderColor:colors.white , marginVertical: 8}}> */}
                              <Text style={styles.details}>
                              DETAILS
                              </Text>
                          {/* </View> */}
                    </TouchableOpacity>
                    <Text style={styles.markorder}>PROCESSSED</Text>                           
                </View>                       
              </View>
              
          </SafeAreaView> 
        </View> :
      index === 1 ?
      <View style={{top:30, paddingHorizontal:15}}>
          <SafeAreaView>
              <View style={[styles.inputde]}>
                  <View style={styles.cardtp}>
                      <Text style={styles.ftcolor}>Order No : 0001</Text> 
                      <Text style={styles.ftcolor}>06-17-2021</Text>  
                  </View>
                  <View style={styles.cardtp}>
                    <Text style={styles.ftcolor}>Quantity : 30000</Text> 
                    <Text style={styles.ftcolor}>Total: $ 101.79</Text>                           
                </View>  
                <View style={styles.cardtp}>
                <TouchableOpacity onPress={() =>
                    navigation.navigate('OrderDetails')
                  }
                  style={{ padding:11, borderRadius:50, width:calcW(0.30), alignItems:'center',borderWidth: 1, borderColor:colors.white , marginVertical: 8}}>
                          {/* <View style={{ padding:12, borderRadius:50, width:'100%', alignItems:'center',borderWidth: 1, borderColor:colors.white , marginVertical: 8}}> */}
                              <Text style={styles.details}>
                              DETAILS
                              </Text>
                          {/* </View> */}
                    </TouchableOpacity>
                    <Text style={styles.markordernew}>IN ROUTE</Text>                           
                </View>                                      
              </View>
              
          </SafeAreaView> 
        </View> :
      index === 2 ?
      <View style={{top:30, paddingHorizontal:15}}>
          <SafeAreaView>
              <View style={[styles.inputde]}>
                  <View style={styles.cardtp}>
                      <Text style={styles.ftcolor}>Order No : 0001</Text> 
                      <Text style={styles.ftcolor}>06-17-2021</Text>  
                  </View>
                  <View style={styles.cardtp}>
                    <Text style={styles.ftcolor}>Quantity : 30000</Text> 
                    <Text style={styles.ftcolor}>Total: $ 101.79</Text>                           
                </View>  
                <View style={styles.cardtp}>
                <TouchableOpacity onPress={() =>
                    navigation.navigate('OrderDetails')
                  }
                  style={{ padding:11, borderRadius:50, width:calcW(0.30), alignItems:'center',borderWidth: 1, borderColor:colors.white , marginVertical: 8}}>
                          {/* <View style={{ padding:12, borderRadius:60, width:'100%', alignItems:'center',borderWidth: 1, borderColor:colors.white , marginVertical: 8}}> */}
                              <Text style={styles.details}>
                              DETAILS
                              </Text>
                          {/* </View> */}
                    </TouchableOpacity>
                    <Text style={styles.markorderdeliver}>DELIVERED</Text>                           
                </View>                       
              </View>             
          </SafeAreaView>         
        </View> :
     null }
      </View>
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22,  
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 250,
    width: '100%',
  },
  text: {
    color: "white",
    fontSize: 30,
    lineHeight: 60,
    fontWeight: "700",
    fontFamily: 'Roboto-Bold',
    textAlign: "center",
    backgroundColor: "#1E2429c0",
   // backgroundColor: "red",
    borderTopLeftRadius: 30 ,
    borderTopRightRadius :30
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
cardtp:{
  justifyContent:'space-between',
  flexDirection: "row",
  marginBottom:10,  
  alignItems: "center"
},
cardtpnext: {
  marginBottom:10, 
  flexDirection: "row",
  //top:0
  bottom: 2
},
  ftcolor:{
    color:'#FFFFFF',
    fontFamily: 'Roboto-Regular',
    fontSize:16,
    fontWeight:'400'
  },
  image: {
    flex: 1,
    justifyContent: "flex-start"
    // resizeMode: "stretch",
    // width:'100%',
    // height: calcH(0.18),
    // borderTopLeftRadius: 30,
    // borderTopRightRadius :30 
  },
  tabContainerStyle: {
    backgroundColor: 'transparent',
    width: '100%', height: '8%',
    borderRadius: 10
 },
 tabStyle: {         
    backgroundColor: colors.background,
    borderRadius: 10, borderColor: 'transparent',
    fontSize: 18,
    margin: 5
 },
 tabTextStyle: {
    color:colors.white,
    fontSize: 16,
    fontFamily:'Roboto-Medium',
    fontWeight: "500",
    paddingBottom:8,
 },
 
 activeTabStyle: { 
    backgroundColor: 'transparent',
   borderRadius: 0,   
   margin: 5,
   
   
 },
 activeTabTextStyle: {
   color: colors.white ,
   fontSize: 16,
    borderBottomColor: colors.primary,
    borderTopWidth:0,
    width:calcW(0.22),
    borderBottomWidth: 3,    
    
 },
 textStyle: {
    color: 'white',
    fontSize: 20, fontWeight: '700',
    marginTop: 40 
 }, 
 markorder:{
   color: "red",
   fontSize: 16,
   fontFamily: 'Roboto-Regular',
   fontWeight:'400'
 },
 markordernew: {
  color: colors.primary,
  fontSize: 16
 },
 markorderdeliver:{
  color: "#30CC52",
  fontSize: 16
 },
 details: {
  color:colors.white,
  fontSize:14,
  fontFamily:'Roboto-Bold',
  fontWeight: '700'
 }
});
