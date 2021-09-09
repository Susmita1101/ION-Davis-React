import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  Image,
  Text,
  useColorScheme,
  View,
  ImageBackground,
  Button,
  TouchableOpacity
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import colors from '../assets/colors/color';
import { NavigationContainer } from '@react-navigation/native';
import {calcH,calcW} from '../utils/common';

export default Home = ({route, navigation }) => {
    return (
      
    <View style={styles.container}>  
    <StatusBar hidden={true}/>
        <ImageBackground  resizeMode="cover"   source={require('../assets/images/bg.jpg')} style={styles.image}  >
            {/* <View style={{flex:1,alignItems:'flex-start', }}> */}
            <View style={{marginHorizontal: calcW(0.08)}}>
                <Text style={styles.headst} numberOfLines= {1} adjustsFontSizeToFit> 
                        ION DASH
                    </Text>

                    <Text style={styles.commtext}>
                    FOR DELIVERY
                    </Text>
                    <Text style={styles.commtext}>
                    OF ALL YOUR
                    </Text>
                    <Text style={styles.commtext}>
                    CONSTRUCTION 
                    </Text>
                    <Text style={styles.commtext}>
                    LANDSCAPING & 
                    </Text>
                    <Text style={styles.commtext}>
                    SPECIAL REQUEST
                    </Text>
                    <Text style={styles.commtext}>
                    NEEDS
                    </Text>

            </View>
                
       

            {/* </View> */}
            <View style={styles.btnContainer}>          
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Fontpage')
              } style={{borderRadius:8,borderColor:colors.primary, borderWidth:2,
                width:calcW(0.84),height:calcH(0.07), alignItems:'center',justifyContent:'center'}}>
                  {/* <View style={{borderColor:colors.primary, borderWidth:2, padding:16, borderRadius:8, width:'100%', alignItems:'center' }}> */}
                      <Text style={{color:Colors.white, fontSize:25, fontWeight:'700', fontFamily: 'Roboto-Bold'}}>
                            START SHOPPING
                      </Text>
                  {/* </View>                */}
              </TouchableOpacity>
        </View>  
      
      </ImageBackground>
</View>

    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  borderTopWidth: 3,
  borderColor: '#1E2429'

  },
  image: {
    flex: 1,
     justifyContent: "space-between",

  },
    headst:{
        fontSize:30,
        fontFamily: 'Roboto-Medium',
        fontWeight:'500',
        color:colors.white,
       // textDecorationLine:'underline',
         borderBottomWidth: 3,
         borderColor:colors.white,
         marginTop:calcH(0.060),
        width:calcW(0.36),
    },

    commtext:{
        fontSize:25,
        fontFamily: 'Roboto-Black',
        fontWeight:'900',
        color:colors.white,
        marginTop:calcH(0.03),
    },
    btnContainer:{
     // justifyContent:'center',
      alignItems:'center',
      marginBottom:calcH(0.14)
     
  },
});

