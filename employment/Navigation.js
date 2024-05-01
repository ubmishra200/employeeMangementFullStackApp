import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './src/app/screen/Home';
import Employeelist from './src/app/screen/Employeelist';
import Registeremployee from './src/app/screen/Registeremployee';
import Addregisterbtn from './src/app/componets/Addregisterbtn';
import Attendence from './src/app/screen/Attendence';
import Markemployee from './src/app/screen/Markemployee';
import AttendanceReport from './src/app/screen/SummaryReport';
import SummaryReport from './src/app/screen/SummaryReport';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const [searchQuery, setSearchQuery] = useState();
  return (
    <>
      {console.log(searchQuery)}
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Employeelist"
            component={Employeelist}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="Registeremployee" component={Registeremployee} />
          <Stack.Screen name="Attendence" component={Attendence} />
          <Stack.Screen name="Markemployee" component={Markemployee} />
          <Stack.Screen name="SummaryReport" component={SummaryReport} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
