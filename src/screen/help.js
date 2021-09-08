import React from "react";
import { View,Text, TextInput, SafeAreaView, FlatList, StyleSheet, Image , TouchableOpacity, ImageBackground , Dimensions} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './tabs'
import colors from '../assets/colors/color';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default Help = ({route, navigation }) => {
  return (
    <View style={{height: "100%", alignItems: 'center', justifyContent: 'flex-start' , backgroundColor: colors.background}}>             
      <View style={{height: 190, width:'100%'}}>
      <TouchableOpacity style={{position:'absolute', left:10, top:20, zIndex:99}}
              onPress={() =>
                navigation.navigate('Setting')               
              }>   
      <Image  source={require('../assets/images/icon.png')} />
      </TouchableOpacity>
        <ImageBackground source={require('../assets/images/help.png')} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>Help and Support</Text>
    </ImageBackground>
      </View>
<View style={{height:screenHeight - 220, width:'100%', padding:16, }}>
    <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Home')
                  } style={{width:'100%'}}>
                      <View style={{backgroundColor:colors.primary, padding:16, borderRadius:8, width:'100%', alignItems:'center', position:'relative' }}>
                          <Text style={{color:colors.white, fontSize:18, width:'100%', textAlign:'center', }}>
                          Select An Issue 
                          </Text>
                          <Image style={{position:'absolute', right:18, top:18}} source={require('../assets/images/drop-arrow.png')}/>
                      </View>
    </TouchableOpacity> 
    <TextInput placeholderTextColor="#ccc" 
    placeholder="Please select issue and specify in details of the issue you are facing and hit submit" style={styles.incolor} multiline={true} />

    <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Home')
                  } style={styles.submit}>
                      <View >
                          <Text style={{color:colors.white, fontSize:18}}>
                          SUBMIT
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
   paddingTop: 22,  
   
  },
  submit:{backgroundColor:colors.primary, padding:16, borderRadius:8, width:'100%', alignItems:'center',
  position:'absolute',
  bottom:10,
  left:16

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
    height:180,
    borderRadius:4,
    borderStyle:'solid',
    borderColor:colors.primary,
    borderWidth:1,
    justifyContent: "flex-start",
    textAlignVertical: 'top',
    paddingHorizontal:24,
    paddingVertical:8,
    marginVertical:12,
    textAlign:'center',
    fontSize:18,
  },
  item: {
    paddingVertical:12,
    paddingHorizontal:10,
    fontSize: 20,
    color: colors.white,
    width:'80%'
  },
});


