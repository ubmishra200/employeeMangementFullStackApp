import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import moment from 'moment';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

export const Attendence = () => {
  const navigation = useNavigation();
  const [employees, setemployees] = useState([]);
  const [currentdate, setcurrentdate] = useState(moment());
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

  const fetchdata = async () => {
    try {
      const response = await axios.get(
        'http://192.168.18.67:8080/api/v1/user/getuser',
      );
      const {employees} = response.data; // Assuming employees are in response.data

      setemployees(employees);
    } catch (error) {
      console.log(' i am response error fetch data employe', error);
    }
  };
  const [attendance, setattendance] = useState([]);
  const fetchattendancedate = async () => {
    console.log('first');
    try {
      const {data} = await axios.get(
        'http://192.168.18.67:8080/api/v1/attendance/getattendancedata',
        {
          params: {
            date: moment(currentdate).format('MMMM-DD-YYYY'),
          },
        },
      );
      console.log('i am responces attendance', data);
      setattendance(data.attendence);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, [currentdate]);
  useEffect(() => {
    fetchattendancedate();
  }, [currentdate]);
  const employeewithattendace = employees?.map(employee => {
    const attendancerecord = attendance?.find(
      record => record.phoneNumber === employee.phoneNumber,
    );
    console.log('attendance rocors', attendancerecord);
    return {
      ...employee,
      status: attendancerecord ? attendancerecord.status : '',
    };
  });
  console.log('status dibugging', employeewithattendace);

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
      {employeewithattendace && (
        <View>
          <FlatList
            data={employeewithattendace}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Markemployee', {
                      currentdate,
                      name: item.employeeName,
                      designation: item.designation,
                      phone: item.phoneNumber,
                      salary: item.salary,
                    })
                  }>
                  <View
                    style={{
                      flexDirection: 'row',
                      margin: 10,
                      justifyContent: 'space-between',
                    }}>
                    <View style={{flexDirection: 'row'}}>
                      <View
                        style={{
                          width: 50,
                          height: 50,
                          borderRadius: 10,
                          backgroundColor: '#1D72FF',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Text
                          style={{
                            fontSize: 25,
                            fontWeight: '700',
                            color: 'white',
                          }}>
                          {item.employeeName.charAt(0).toUpperCase()}
                        </Text>
                      </View>
                      <View style={{marginHorizontal: 15}}>
                        <Text style={{fontSize: 20}}>{item.employeeName}</Text>
                        <Text style={{fontSize: 15}}>
                          {item.designation}( {item.phoneNumber})
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: 50,
                        backgroundColor: '#FFAA1D',

                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Text
                        style={{
                          fontSize: 25,
                          fontWeight: '700',
                          color: 'white',
                          alignItems: 'center',
                        }}>
                        {item.status.charAt(0).toUpperCase()}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      )}
    </View>
  );
};
export default Attendence;
