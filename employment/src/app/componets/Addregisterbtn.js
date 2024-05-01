import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const Addregisterbtn = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Registeremployee')}>
        <Ionicons
          name="add-circle-outline"
          size={35}
          color="white"
          style={{
            width: 35,
            height: 35,
            borderRadius: 50,
            backgroundColor: 'blue',
            marginLeft: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Addregisterbtn;

const styles = StyleSheet.create({});
