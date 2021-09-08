import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Fontpage from './fontpage';
import cart from './cart';
import Setting from './setting';
import Orders from './orders';
import colors from '../assets/colors/color';
import { View, Text, Image } from 'react-native';
import {calcH,calcW} from '../utils/common';

const Tab = createBottomTabNavigator();
const Tabs = () => {
  return (
    <Tab.Navigator
    initialRouteName="Home"
    

    screenOptions={{
     tabBarShowLabel:false,
      tabBarInactiveBackgroundColor: colors.background,
      tabBarActiveBackgroundColor: '#1E2429',
      tabBarStyle: { paddingBottom:0,
        paddingTop:0,
        height: calcH(0.14), 
    },
    }}
  >

    <Tab.Screen name="Home" component={Fontpage} 
            options={{
                tabBarIcon: ({focused}) =>(
                    <View style={{
                        alignItems:'center'
                    }}>
                        <Image source={require('../assets/images/home.png')}
                        style={{
                            tintColor: focused ? '#D99100' : '#fff',
                        }} /> 
                        <Text style={{
                            color: focused ? '#D99100' : '#fff',
                            fontSize:12
                        }}>Home</Text>
                    </View>
                ),
                headerShown: false,
            }}
            />


        <Tab.Screen name="cart" component={cart} 
                options={{
                    tabBarIcon: ({focused}) =>(
                        <View style={{
                            alignItems:'center'
                        }}>
                            <Image source={require('../assets/images/cart.png')}
                            style={{
                                tintColor: focused ? '#D99100' : '#fff',
                            }} /> 
                            <Text style={{
                                color: focused ? '#D99100' : '#fff',
                                fontSize:12
                            }}>Cart</Text>
                        </View>
                    ),
                    headerShown: false,
                }}/>


    <Tab.Screen name="Orders" component={Orders} 
            options={{
                tabBarIcon: ({focused}) =>(
                    <View style={{
                        alignItems:'center'
                    }}>
                        <Image source={require('../assets/images/order.png')}
                        style={{
                            tintColor: focused ? '#D99100' : '#fff',
                        }} /> 
                        <Text style={{
                            color: focused ? '#D99100' : '#fff',
                            fontSize:12
                        }}>Orders</Text>
                    </View>
                ),
                headerShown: false,
            }}/>


        <Tab.Screen name="Setting" component={Setting} 
                options={{
                    tabBarIcon: ({focused}) =>(
                        <View style={{
                            alignItems:'center'
                        }}>
                            <Image source={require('../assets/images/setting.png')}
                            style={{
                                tintColor: focused ? '#D99100' : '#fff',
                            }} /> 
                            <Text style={{
                                color: focused ? '#D99100' : '#fff',
                                fontSize:12
                            }}>Setting</Text>
                        </View>
                    ),
                    headerShown: false,
                }} />
  </Tab.Navigator> 
 
  );
}
export default Tabs;