/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
{/* <script src="http://localhost:8097"></script> */}
import React from 'react';


import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import colors from './src/assets/colors/color';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  Login from './src/screen/login';
import  Signup from './src/screen/sign-up';
import  ForgotPassword from './src/screen/forgot-password';
import  Home from './src/screen/home';
import Fontpage from './src/screen/tabs';
import CategoriesConstruction from './src/screen/categories-construction';
import CategoriesEnquiry from './src/screen/categories-enquiry';
import SubCategory from './src/screen/sub-category';
import About from './src/screen/about';
import Notification from './src/screen/notification';
import Privacy from './src/screen/privacy';
import Help from './src/screen/help';
import Terms from './src/screen/terms'; 
import Request from './src/screen/request'; 
import ChildSubcategory from './src/screen/child-subcategory';
import NextchildSubcategory from './src/screen/nextchild-subcategory';
import ItemDetails from './src/screen/item-details'; 
import Product from './src/screen/product'; 
import Checkout from './src/screen/checkout';
import Shipping from './src/screen/shipping';
import AddShipping from './src/screen/add-shipping';
import Success from './src/screen/success';
import Account from './src/screen/account';
import OrderDetails from './src/screen/order-details';

const Stack = createStackNavigator();

function App() {
  return (

    <NavigationContainer>
      <StatusBar
        animated={true}
        backgroundColor="#000000"
       />
      <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} 
      options={{
        headerShown: false,
      }}
      />
      <Stack.Screen name="Signup" component={Signup}
      options={{
        headerShown: false,
      }}
      />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword}
      options={{
        headerShown: false,
      }}
      />
      <Stack.Screen name="Home" component={Home}
      options={{
        headerShown: false,
      }}
      />
      <Stack.Screen name="Fontpage" component={Fontpage}
      options={{
        headerShown: false,
      }}
      />
      <Stack.Screen name="CategoriesConstruction" component={CategoriesConstruction}
    options={{
      headerShown: false,
    }}
    />
   <Stack.Screen name="CategoriesEnquiry" component={CategoriesEnquiry}
    options={{
      headerShown: false,
    }}
    />
     <Stack.Screen name="SubCategory" component={SubCategory}
    options={{
      headerShown: false,
    }}
    />
    <Stack.Screen name="About" component={About}
    options={{
      headerShown: false,
    }}
    />
    <Stack.Screen name="Notification" component={Notification}
    options={{
      headerShown: false,
    }}   
    />
    <Stack.Screen name="Privacy" component={Privacy}
    options={{
      headerShown: false,
    }}   
    />
    <Stack.Screen name="Help" component={Help}
    options={{
      headerShown: false,
    }}   
    />
     <Stack.Screen name="Terms" component={Terms}
    options={{
      headerShown: false,
    }}   
    />
     <Stack.Screen name="Request" component={Request}
    options={{
      headerShown: false,
    }}   
    />
     <Stack.Screen name="ChildSubcategory" component={ChildSubcategory}
    options={{
      headerShown: false,
    }}   
    />
    <Stack.Screen name="NextchildSubcategory" component={NextchildSubcategory}
    options={{
      headerShown: false,
    }}   
    />
    <Stack.Screen name="ItemDetails" component={ItemDetails}
    options={{
      headerShown: false,
    }}   
    />
    <Stack.Screen name="Product" component={Product}
    options={{
      headerShown: false,
    }}   
    />
    <Stack.Screen name="Checkout" component={Checkout}
    options={{
      headerShown: false,
    }}   
    />
    <Stack.Screen name="Shipping" component={Shipping}
    options={{
      headerShown: false,
    }}   
    />
    <Stack.Screen name="AddShipping" component={AddShipping}
    options={{
      headerShown: false,
    }}   
    />
    <Stack.Screen name="Success" component={Success}
    options={{
      headerShown: false,
    }}   
    />
    <Stack.Screen name="Account" component={Account}
    options={{
      headerShown: false,
    }}   
    />
    <Stack.Screen name="OrderDetails" component={OrderDetails}
    options={{
      headerShown: false,
    }}   
    />
      </Stack.Navigator>
    </NavigationContainer>

    
  );
}

 export default App;
