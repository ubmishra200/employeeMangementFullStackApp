import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Searchcompo from './../componets/Searchcompo';
import Addregisterbtn from '../componets/Addregisterbtn';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const Employeelist = () => {
  const [input, setinput] = useState('');
  const [employee, setemployee] = useState([]);
  const navigation = useNavigation();
  const fetchdata = async () => {
    try {
      const response = await axios.get(
        'http://192.168.18.67:8080/api/v1/user/getuser',
      );
      const {employees} = response.data; // Assuming employees are in response.data

      setemployee(employees);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <>
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',

            alignItems: 'center',
            backgroundColor: 'white',
            padding: 15,
          }}>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <Ionicons name="arrow-back" size={25} />
            </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 5,
              }}
              name="search"
              size={30}
            />

            <TextInput
              value={input}
              onChangeText={e => {
                setinput(e);
              }}
              placeholder="search name.."
              style={{
                borderRadius: 10,
                borderWidth: 1,
                width: 250,
                height: 40,
                fontWeight: '500',
                fontSize: 18,
                paddingHorizontal: 20,
              }}
            />
            <Addregisterbtn />
          </View>
        </View>
        <View style={{margin: 15}}>
          {employee.length > 0 ? (
            <View>
              <Searchcompo data={employee} input={input} setinput={setinput} />
            </View>
          ) : (
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                height: 700,
              }}>
              <View style={{textAlign: 'center'}}>
                <Text style={{fontSize: 25, fontWeight: '700', margin: 20}}>
                  data is not
                </Text>
                <Text
                  style={{
                    fontSize: 25,
                    fontWeight: '700',
                    marginHorizontal: 20,
                  }}>
                  New Add{' '}
                  <Addregisterbtn
                    style={{fontSize: 25, fontWeight: '700', margin: 20}}
                  />
                </Text>
              </View>
            </View>
          )}
        </View>
      </View>
    </>
  );
};

export default Employeelist;

const styles = StyleSheet.create({});
