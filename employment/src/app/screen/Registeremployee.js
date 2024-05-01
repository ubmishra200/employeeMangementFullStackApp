import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';

const Registeremployee = () => {
  const navigation = useNavigation('');
  const [name, setName] = useState('');
  const [designation, setdesignation] = useState('');
  const [joinDate, setjoinDate] = useState('');
  const [salary, setsalary] = useState('');
  const [activeEmployee, setactiveEmployee] = useState('');
  const [phone, setphone] = useState('');
  const [address, setaddress] = useState('');

  const registerHandler = async () => {
    try {
      const posted = await axios.post(
        'http://192.168.18.67:8080/api/v1/user/register',
        {
          employeeName: name,
          designation: designation,
          joindate: joinDate,
          salary: salary,
          activeEmployee: activeEmployee,
          phoneNumber: phone,
          address: address,
        },
      );
      navigation.navigate('Home');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ScrollView>
      <Text
        style={{
          margin: 20,
          fontSize: 22,
          fontWeight: '700',
          justifyContent: 'center',
          textAlign: 'center',
        }}>
        Employee Registation
      </Text>
      <View
        style={{
          width: '90%',
          backgroundColor: 'white',
          alignSelf: 'center',
          borderRadius: 20,
          padding: 20,
        }}>
        <TextInput
          value={name}
          autoFocus={true}
          onChangeText={e => setName(e)}
          placeholder="Name"
          style={{
            borderRadius: 10,
            borderWidth: 0.5,
            padding: 10,
            fontSize: 20,
            margin: 10,
          }}
        />
        <TextInput
          value={designation}
          onChangeText={e => setdesignation(e)}
          placeholder="Designation"
          enterKeyHint="next"
          style={{
            borderRadius: 10,
            borderWidth: 0.5,
            padding: 10,
            fontSize: 20,
            margin: 10,
          }}
        />
        <TextInput
          value={joinDate}
          onChangeText={e => setjoinDate(e)}
          placeholder="Join Date"
          style={{
            borderRadius: 10,
            borderWidth: 0.5,
            padding: 10,
            fontSize: 20,
            margin: 10,
          }}
        />
        <TextInput
          value={salary}
          keyboardType="number-pad"
          onChangeText={e => setsalary(e)}
          placeholder="Salary"
          style={{
            borderRadius: 10,
            borderWidth: 0.5,
            padding: 10,
            fontSize: 20,
            margin: 10,
          }}
        />
        <TextInput
          value={activeEmployee}
          onChangeText={e => setactiveEmployee(e)}
          placeholder="Active Employee"
          style={{
            borderRadius: 10,
            borderWidth: 0.5,
            padding: 10,
            fontSize: 20,
            margin: 10,
          }}
        />
        <TextInput
          value={phone}
          keyboardType="number-pad"
          onChangeText={e => setphone(e)}
          placeholder="Phone Number"
          style={{
            borderRadius: 10,
            borderWidth: 0.5,
            padding: 10,
            fontSize: 20,
            margin: 10,
          }}
        />
        <TextInput
          value={address}
          onChangeText={e => setaddress(e)}
          placeholder="Address"
          style={{
            borderRadius: 10,
            borderWidth: 0.5,
            padding: 10,
            fontSize: 20,
            margin: 10,
          }}
        />

        <View>
          <TouchableOpacity
            onPress={registerHandler}
            style={{
              width: 150,
              height: 50,
              alignItems: 'center',
              alignSelf: 'center',

              backgroundColor: 'blue',
              borderRadius: 10,
              justifyContent: 'center',
              margin: 20,
            }}>
            <Text style={{color: 'white', fontSize: 20, fontWeight: '600'}}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Registeremployee;

const styles = StyleSheet.create({});
