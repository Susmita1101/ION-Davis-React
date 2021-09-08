import React, { useState } from "react";
import { View, Text , TextInput, FlatList, StyleSheet, Image , TouchableOpacity, ImageBackground, SafeAreaView, Dimensions ,} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { ListItem, Avatar } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './tabs'
import colors from '../assets/colors/color';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
 

export default Shipping = ({route, navigation }) => {

  const [isSelected, setSelection] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <View style={{ flex:1,height: "100%",  justifyContent: 'flex-start' , backgroundColor: colors.background }}>      
       <View style={{height: 80, width:'100%'}}>
          <TouchableOpacity style={{position:'absolute', left:10, top:20, zIndex:99}}
                  onPress={() =>
                    navigation.navigate('Checkout')               
                  }>   
          <Image  source={require('../assets/images/icon.png')} />
          </TouchableOpacity>
          <Text style={styles.text}>Shipping Addresses</Text>  
      </View>

        <View style={{paddingHorizontal:15, height:screenHeight - 104}}>
            <SafeAreaView>
                <View style={styles.inputde}>
                     <Text style={[styles.textdescrip , styles.extra]}>Anthony</Text> 
                     <Text style={styles.textdescrip}>3 Newbridge Court 
                      Chino Hills, CA 91709, United States</Text>
                      <View style={styles.ahadd}>
                      <View style={styles.checkboxDiv}>
                          <CheckBox style={styles.checkboxBox}
                              disabled={false}
                              value={toggleCheckBox}
                              onValueChange={() => toggleCheckBox ? setToggleCheckBox(false) : setToggleCheckBox(true)}
                            />
                            <Image source={require('../assets/images/ck-check.png')} />
                           
                      </View>
                          <Text style={styles.textdescrip}>Use Shipping Address</Text> 
                      </View>
                     
                      <Text style={styles.textdefault}>Default</Text>                                               
                </View>
                <View style={styles.inputde}>
                <Text style={[styles.textdescrip , styles.extra]}>Bob</Text> 
                     <Text style={styles.textdescrip}>3 Newbridge Court 
                      Chino Hills, CA 91709, United States</Text> 
                      <View style={styles.ahadd}>
                      <View style={styles.checkboxDiv}>
                          <CheckBox style={styles.checkboxBox}
                              disabled={false}
                              value={toggleCheckBox}
                              onValueChange={() => toggleCheckBox ? setToggleCheckBox(false) : setToggleCheckBox(true)}
                            />
                            {toggleCheckBox === false ?
                            <View >
                            <Image source={require('../assets/images/uncheck.png')} />
                            </View> :
                              toggleCheckBox === true ?
                              <View >
                              <Image source={require('../assets/images/ck-check.png')} />
                              </View> :
                          null }              
                      </View>
                          <Text style={styles.textdescrip}>Use Shipping Address</Text> 
                      </View>
                      
                      <Text style={styles.textdelete}>Delete</Text>                           
                </View>
                <View style={{ alignItems: 'flex-end'}}>
                <TouchableOpacity onPress={() =>
                navigation.navigate('AddShipping')
              }>    
                      <Image source={require('../assets/images/add.png')}/> 
              </TouchableOpacity>
            </View> 
            </SafeAreaView>
            <View style={styles.checkout}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Success')
              } style={{width:'100%'}}>
                  <View style={{backgroundColor:colors.primary, padding:16, borderRadius:8, width:'100%', alignItems:'center',position:'relative' }}>
                      <Text style={{color:colors.white, fontSize:18}}>
                      CONTINUE
                      </Text>
                  </View>
            </TouchableOpacity>
            <Image style={{position:'absolute', right:18, top:23}} source={require('../assets/images/goNext.png')}/>
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
      width:'100%',
      borderRadius:5,
      padding:20,
      paddingBottom:20,
      borderColor:colors.primary,
      borderWidth:1,
      marginBottom: 8,
      color:colors.white,
      position:'relative'
  },
  ftcolor:{
      color:'#9b9b9b'
  },
  textdescrip: {
    color:colors.white,
    fontSize:16,
    width:'100%',
    marginBottom:8,
    lineHeight:20
  },
  textdefault:{
    color:"#555",
    position:'absolute',
    right:10,
    bottom:20
  }, 
  textdelete: {
    color:"#EB001B",
    position:'absolute',
    right:10,
    top:20
  },
  extra: {
    marginBottom:12
  }, 
  checkout: {
    width:'100%',
    position:'absolute' ,
    bottom:0,
    alignSelf:'center'
  },
  checkboxDiv: {
    flexDirection: "row",
    position:'relative',
    marginRight:10
},
checkboxBox: {

  opacity:0,
  borderColor: colors.white,
  borderWidth:2,
  position:'absolute',
  zIndex:9999999,
  left:-4,
  top:4,
  
},
ahadd:{
  flexDirection:'row',
  position:'relative'
},
});

