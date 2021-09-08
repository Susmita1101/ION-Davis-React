import React, { useState } from "react";
import { Alert, View, Text , Modal, Pressable, FlatList, StyleSheet, Image , TouchableOpacity, ScrollView ,ImageBackground, SafeAreaView, Button } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import CheckBox from '@react-native-community/checkbox';
import CalendarPicker from 'react-native-calendar-picker';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './tabs'
import colors from '../assets/colors/color';




export default Checkout = ({route, navigation }) => {
  
  const [modalVisible, setModalVisible] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);

  const onDateChange = (date, type) => {
    //function to handle the date change
    if (type === 'END_DATE') {
      setSelectedEndDate(date);
    } else {
      setSelectedEndDate(null);
      setSelectedStartDate(date);
    }
  };
 
  return (
    <View style={{ flex:1,height: "100%",  justifyContent: 'flex-start' , backgroundColor: colors.background }}> 
        
      <View style={{height: 50, width:'100%'}}>
        <Text style={styles.text}>Checkout</Text>
            <TouchableOpacity style={{position:'absolute', left:10, top:20}}
                    onPress={() =>
                        navigation.navigate('cart')                       
                    }>   
                <Image source={require('../assets/images/icon.png')} />
            </TouchableOpacity>   
      </View>
      <View style={{marginTop:20,paddingHorizontal:15, height: '80%', paddingBottom:16}}>
          <ScrollView>
            <View style={styles.information}>
              <Text style={styles.inoftext}>Shipping Address</Text> 
              <Text style={styles.inoftext}>change</Text>
            </View>
            
            <View style={styles.inputde}>
                     <Text style={[styles.textdescrip , styles.extra]}>Anthony</Text> 
                     <Text style={styles.textdescrip}>3 Newbridge Court 
                      </Text>    
                      <Text style={styles.textdescrip}>
                      Chino Hills, CA 91709, United States</Text>                                            
            </View>

            <View style={styles.information}>
              <Text style={styles.inoftext}>Payment</Text> 
              <Text style={styles.inoftext}>change</Text>
            </View>
               

            <View style={styles.inputsmall}>
                <Image source={require('../assets/images/card.png')} />
                <Text style={styles.cardno}>**** **** **** 3947</Text> 
            </View>
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
                
                <Text style={styles.label}>Do you require contractor for hire?</Text>
          </View>

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
                
                <Text style={styles.label}>Absentee pickup</Text>
          </View>

          <View style={styles.checkboxDiv}>              
                <Image style={styles.addcam} source={require('../assets/images/camera.png')} />
                <Text style={styles.label}>Add photo of delivery Location</Text>
          </View>

            <TouchableOpacity style={styles.inputsmall}
             onPress={() => setModalVisible(true)} >

              
                <Image style={styles.comstyl} source={require('../assets/images/clock.png')} />
                            
                <Text style={styles.cardtime}>Select Date/Time</Text> 
            </TouchableOpacity>
            <View style={[styles.inputsmall, styles.inputmedium]}>
                <Text style={styles.cardtime}>Description of Location (OPTIONAL)</Text> 
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
          </ScrollView>
      </View>
     
      <TouchableOpacity 
              onPress={() =>
                navigation.navigate('Shipping')
              } style={{width:'100%', paddingHorizontal:15}}>
                  <View style={{backgroundColor:colors.primary, padding:16, borderRadius:8, width:'100%', alignItems:'center' }}>
                      <Text style={{color:colors.white, fontSize:18}}>
                      SUBMIT
                      </Text>
                  </View>
        </TouchableOpacity>
       

        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
              <View style={styles.calender}> 
              <CalendarPicker 
                        startFromMonday={true}
                        allowRangeSelection={true}
                        minDate={new Date(2018, 1, 1)}
                        maxDate={new Date(2050, 6, 3)}
                        weekdays={
                          [
                            'Mon', 
                            'Tue', 
                            'Wed', 
                            'Thur', 
                            'Fri', 
                            'Sat', 
                            'Sun'
                          ]}
                        months={[
                          'January',
                          'Febraury',
                          'March',
                          'April',
                          'May',
                          'June',
                          'July',
                          'August',
                          'September',
                          'October',
                          'November',
                          'December',
                        ]}
                        previousTitle="Previous"
                        nextTitle="Next"
                        todayBackgroundColor="#e6ffe6"
                        selectedDayColor="#66ff33"
                        selectedDayTextColor="#000000"
                        scaleFactor={375}
                        textStyle={{
                          fontFamily: 'Cochin',
                          color: '#000000',
                        }}
                        onDateChange={onDateChange}
                      />  
              </View>
          

        <View style={styles.textStyle}>
          <Text style={styles.textStyle}>
            Selected Start Date :
          </Text>
          <Text style={styles.textStyle}>
            {selectedStartDate ? selectedStartDate.toString() : ''}
          </Text>
          <Text style={styles.textStyle}>
            Selected End Date :
          </Text>
          <Text style={styles.textStyle}>
            {selectedEndDate ? selectedEndDate.toString() : ''}
          </Text>
        </View> 
        
        <View style={{  justifyContent: 'flex-end',backgroundColor: colors.background, position:'absolute',width:'100%', bottom:0, padding:10, borderTopRightRadius:26}}>
          
            <View style={styles.inputsmall}>
                <Text style={styles.ftcolor}>From</Text>
                <Text style={styles.ftcolorInner}>10:00 AM</Text>
            </View>
            <View style={styles.inputsmall}>
                <Text style={styles.ftcolor}>To</Text>
                <Text style={styles.ftcolorInner}>12:00 AM</Text>
            </View>

            <TouchableOpacity 
              onPress={() => setModalVisible(!modalVisible)} style={{width:'100%', }}>
                  <View style={{backgroundColor:colors.primary, padding:16, borderRadius:8, width:'100%', alignItems:'center' }}>
                      <Text style={{color:colors.white, fontSize:18}}>
                        SET DELIVERY
                      </Text>
                  </View>
        </TouchableOpacity>       
        </View>
      </Modal> 
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
    bottom:5,
    flexDirection: "row"
  },
  inoftext: {
    color:'#fff',
  },
  textdescrip: {
    color:colors.white,
    fontSize:16,
    width:'100%',
    marginBottom:0
  },
  extra: {
    marginBottom:12
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
      padding:10,
      paddingBottom:0,
      borderColor:colors.primary,
      borderWidth:1,
      marginBottom: 8,
      color:colors.white,
      height: 104,
  },
  inputsmall:{
      borderRadius:5,
      paddingLeft:10,
      paddingBottom:0,
      borderColor:colors.primary,
      borderWidth:1,
      marginBottom: 8,
      color:colors.white,
      height: 50,
      alignItems:'center',
      position:'relative',
      flexDirection: "row",     
  },
  inputmedium:{
    height: 70,  
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    textAlignVertical:"center",
  },
  ftcolor:{
      color:'#9b9b9b'
  },
  cardno: {
    color:'#fff',
    left:40
  },
  cardtime: {
    color:'#fff',
    flex:1,
    justifyContent:"center",
    textAlign:"center",
    alignItems:'center',
    width:'100%',   
  },
  comstyl:{
    position:'absolute',
    top:11,
    left:10
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  ftcolorInner: {
    color:colors.white,
    height:30,
    borderRadius:4,
    borderStyle:'solid',
    justifyContent: "flex-start",
    textAlignVertical: 'top',
  },
  label: {
    margin: 8,
    color:colors.white,
    lineHeight:14
  },
  checkboxDiv: {
      flexDirection: "row",
      position:'relative',
      paddingVertical:8,
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
  addcam:{
    width:20,
    marginTop:4
  },
  calender:{
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#ffffff',
    padding: 16,
  },
  
});



