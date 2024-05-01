import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import moment from 'moment';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Attendence from './Attendence';
import axios from 'axios';
const Markemployee = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [attendancestatus, setattendancestatus] = useState('present');
  const [currentdate, setcurrentdate] = useState(route.params.currentdate);
  const gotonextday = () => {
    const nextday = moment(currentdate).add(1, 'days');
    setcurrentdate(nextday);
  };
  const gotoprevday = () => {
    const prevday = moment(currentdate).subtract(1, 'days');
    setcurrentdate(prevday);
  };
  const formatdate = date => {
    return date.format('MMMM-DD-YYYY');
  };
  const submitattendancehandler = async () => {
    try {
      const attendancedata = {
        employeeName: route.params.name,
        phoneNumber: route.params.phone,
        date: moment(currentdate).format('MMMM-DD-YYYY'),
        status: attendancestatus,
      };
      const postattendance = await axios.post(
        'http://192.168.18.67:8080/api/v1/attendance/markattendance',
        attendancedata,
      );

      if (attendancedata.status === 200) {
        alert('successfully attendance mark');
      }
      navigation.navigate('Home');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          flexDirection: 'row',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginVertical: 20,
          gap: 10,
        }}>
        <TouchableOpacity
          onPress={() => {
            gotoprevday();
          }}>
          <Ionicons name="chevron-back" size={25} color="black" />
        </TouchableOpacity>
        <Text style={{fontSize: 20, color: 'black'}}>
          {formatdate(currentdate)}
        </Text>
        <TouchableOpacity
          onPress={() => {
            gotonextday();
          }}>
          <Ionicons color="black" name="chevron-forward" size={25} />
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', margin: 10}}>
        <View
          style={{
            width: 50,
            height: 50,
            borderRadius: 10,
            backgroundColor: '#1D72FF',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 25, fontWeight: '700', color: 'white'}}>
            {route.params.name.charAt(0).toUpperCase()}
          </Text>
        </View>
        <View style={{marginHorizontal: 15}}>
          <Text style={{fontSize: 20}}>{route.params.name}</Text>
          <Text style={{fontSize: 15}}>
            {route.params.designation}({route.params.phone})
          </Text>
        </View>
      </View>
      <Text style={{margin: 10, fontSize: 20, color: 'black'}}>
        Basic Pay : {route.params.salary}
      </Text>

      <View style={{marginHorizontal: 10}}>
        <Text style={{fontSize: 20, color: 'black'}}>Attendence Mark</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            marginVertical: 16,
          }}>
          <TouchableOpacity
            onPress={() => setattendancestatus('present')}
            style={{
              padding: 10,
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
              backgroundColor: '#c4e0e5',
              flex: 1,
              borderRadius: 7,
            }}>
            {attendancestatus === 'present' ? (
              <FontAwesome name="dot-circle-o" size={25} color="black" />
            ) : (
              <FontAwesome size={25} color="black" name="circle-o" />
            )}
            <Text style={{marginHorizontal: 10, fontSize: 20, color: 'black'}}>
              Present
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setattendancestatus('absent')}
            style={{
              padding: 10,
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
              backgroundColor: '#c4e0e5',
              flex: 1,
              borderRadius: 7,
            }}>
            {attendancestatus === 'absent' ? (
              <FontAwesome name="dot-circle-o" size={25} color="black" />
            ) : (
              <FontAwesome size={25} color="black" name="circle-o" />
            )}
            <Text style={{marginHorizontal: 10, fontSize: 20, color: 'black'}}>
              Absent
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            marginVertical: 5,
          }}>
          <TouchableOpacity
            onPress={() => setattendancestatus('halfday')}
            style={{
              padding: 10,
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
              backgroundColor: '#c4e0e5',
              flex: 1,
              borderRadius: 7,
            }}>
            {attendancestatus === 'halfday' ? (
              <FontAwesome name="dot-circle-o" size={25} color="black" />
            ) : (
              <FontAwesome size={25} color="black" name="circle-o" />
            )}
            <Text style={{marginHorizontal: 10, fontSize: 20, color: 'black'}}>
              Halfday
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setattendancestatus('holiday')}
            style={{
              padding: 10,
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
              backgroundColor: '#c4e0e5',
              flex: 1,
              borderRadius: 7,
            }}>
            {attendancestatus === 'holiday' ? (
              <FontAwesome name="dot-circle-o" size={25} color="black" />
            ) : (
              <FontAwesome size={25} color="black" name="circle-o" />
            )}
            <Text style={{marginHorizontal: 10, fontSize: 20, color: 'black'}}>
              Holiday
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flexDirection: 'row', margin: 10, gap: 10}}>
        <TextInput
          keyboardType="number-pad"
          placeholderTextColor={'black'}
          placeholder="Advance/Loan"
          style={{
            borderColor: '#e0e0e0',
            borderWidth: 1,
            fontSize: 15,
            flex: 1,
            borderRadius: 10,
          }}
        />
        <TextInput
          keyboardType="number-pad"
          placeholder="Advance/Loan"
          placeholderTextColor={'black'}
          style={{
            borderColor: '#e0e0e0',
            borderWidth: 1,
            fontSize: 15,
            flex: 1,
            borderRadius: 10,
          }}
        />
      </View>
      <TouchableOpacity
        onPress={() => submitattendancehandler()}
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 30,
          padding: 10,
          borderRadius: 7,
          backgroundColor: 'blue',
        }}>
        <Text style={{color: 'white', fontSize: 20}}>Submit Attendance</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Markemployee;

const styles = StyleSheet.create({});
