import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SearchBar} from 'react-native-screens';

const Searchcompo = ({data, input, setinput}) => {
  return (
    <View>
      <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 10}}>
        Employee List
      </Text>
      <FlatList
        data={data}
        renderItem={({item, index}) => {
          if (item?.employeeName.toLowerCase().includes(input?.toLowerCase())) {
            return (
              <View style={{flexDirection: 'row', margin: 10}}>
                <View
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 7,
                    backgroundColor: '#1D72FF',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{fontSize: 25, fontWeight: '700', color: 'white'}}>
                    {item.employeeName.charAt(0).toUpperCase()}
                  </Text>
                </View>
                <View style={{marginHorizontal: 15}}>
                  <Text style={{fontSize: 20}}>{item.employeeName}</Text>
                  <Text style={{fontSize: 15}}>{item.designation}</Text>
                </View>
              </View>
            );
          }
        }}
      />

      {/* {data.map((item, index) => {
        return (
          <View key={index}>
            <Text>{item._id}</Text>
          </View>
        );
      })} */}
    </View>
  );
};

export default Searchcompo;

const styles = StyleSheet.create({});
