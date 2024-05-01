import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import moment from 'moment';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {it} from '@jest/globals';

export const SummaryReport = () => {
  const navigation = useNavigation();
  const [employees, setemployees] = useState([]);
  const [currentdate, setcurrentdate] = useState(moment());
  const gotonextday = () => {
    const nextday = moment(currentdate).add(1, 'month');
    setcurrentdate(nextday);
  };
  const gotoprevday = () => {
    const prevday = moment(currentdate).subtract(1, 'month');
    setcurrentdate(prevday);
  };
  const formatdate = date => {
    return date.format('MMMM-YYYY');
  };

  const fetchdata = async () => {
    const moth = moment(currentdate).format('MM');

    const years = moment(currentdate).format('YYYY');
    try {
      const {data} = await axios.get(
        'http://192.168.18.67:8080/api/v1/attendance/getattendanceallemployeetotals',
        {params: {month: moth, year: years}},
      );

      console.log(data);
      setemployees(data.report);
    } catch (error) {
      console.log(' i am response error fetch data employe', error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, [currentdate]);

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
      {employees && (
        <View>
          <FlatList
            data={employees}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity>
                  <View
                    style={{
                      margin: 10,
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
                          {item.name.charAt(0).toUpperCase()}
                        </Text>
                      </View>
                      <View style={{marginHorizontal: 15}}>
                        <Text style={{fontSize: 20}}>{item.name}</Text>
                        <Text style={{fontSize: 15}}>
                          {item.designation}( {item._id})
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        marginVertical: 10,
                        backgroundColor: '#CCFFE6',
                        paddingVertical: 10,
                        alignItems: 'center',
                      }}>
                      <View>
                        <View>
                          <Text
                            style={{
                              marginBottom: 10,

                              fontSize: 20,
                              fontWeight: '600',
                            }}>
                            P
                          </Text>
                        </View>
                        <View>
                          <Text
                            style={{
                              marginBottom: 10,

                              fontSize: 20,
                            }}>
                            {item.present}
                          </Text>
                        </View>
                      </View>
                      <View>
                        <View>
                          <Text
                            style={{
                              marginBottom: 10,

                              fontSize: 20,
                              fontWeight: '600',
                            }}>
                            A
                          </Text>
                        </View>
                        <View>
                          <Text
                            style={{
                              marginBottom: 10,

                              fontSize: 20,
                            }}>
                            {item.absent}
                          </Text>
                        </View>
                      </View>
                      <View>
                        <View>
                          <Text
                            style={{
                              marginBottom: 10,

                              fontSize: 20,
                              fontWeight: '600',
                            }}>
                            HD
                          </Text>
                        </View>
                        <View>
                          <Text
                            style={{
                              marginBottom: 10,

                              fontSize: 20,
                            }}>
                            {item.halfday}
                          </Text>
                        </View>
                      </View>
                      <View>
                        <View>
                          <Text
                            style={{
                              marginBottom: 10,

                              fontSize: 20,
                              fontWeight: '600',
                            }}>
                            H
                          </Text>
                        </View>
                        <View>
                          <Text
                            style={{
                              marginBottom: 10,

                              fontSize: 20,
                            }}>
                            {item.holiday}
                          </Text>
                        </View>
                      </View>
                      <View>
                        <View>
                          <Text
                            style={{
                              marginBottom: 10,

                              fontSize: 20,
                              fontWeight: '600',
                            }}>
                            NW
                          </Text>
                        </View>
                        <View>
                          <Text
                            style={{
                              marginBottom: 10,

                              fontSize: 20,
                            }}>
                            0
                          </Text>
                        </View>
                      </View>
                      {/* <View>
                        <View>
                          <Text
                            style={{
                              marginBottom: 10,

                              fontSize: 20,
                              fontWeight: '600',
                            }}>
                            p
                          </Text>
                        </View>
                        <View>
                          <Text
                            style={{
                              marginBottom: 10,

                              fontSize: 20,
                            }}>
                            2
                          </Text>
                        </View>
                      </View> */}
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
export default SummaryReport;
