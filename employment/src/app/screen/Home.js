import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import Employeelist from './Employeelist';

const Home = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <LinearGradient colors={['#7F7FD5', '#E9E4F0']} style={{flex: 1}}>
        <View style={{margin: 10}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 20,
            }}>
            <Feather name="bars" size={25} color="black" />
            <Text style={{fontWeight: '600', fontSize: 20, color: 'black'}}>
              Employee Mangement
            </Text>
            <Feather name="lock" size={25} color="black" />
          </View>

          <View
            style={{
              marginTop: '20',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 20,
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                padding: 10,
                backgroundColor: '#D3CCE3',
                borderRadius: 6,
                margin: 10,
                flex: 1,
              }}
              onPress={() => navigation.navigate('Employeelist')}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  padding: 7,
                  borderRadius: 50,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Ionicons name="people" size={35} color="black" />
              </View>
              <Text style={{fontWeight: '600', color: 'black'}}>
                Employees List
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('Attendence')}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                padding: 10,
                backgroundColor: '#D3CCE3',
                borderRadius: 6,
                margin: 10,
                flex: 1,
              }}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  padding: 7,
                  borderRadius: 50,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Ionicons name="people" size={35} color="black" />
              </View>
              <Text style={{fontWeight: '600', color: 'black'}}>
                Mark Attendence
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              padding: 10,
              backgroundColor: 'white',
              borderRadius: 7,
            }}>
            <TouchableOpacity
              style={{
                marginTop: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderRadius: 7,
                backgroundColor: '#be93c5',
                padding: 10,
              }}>
              <View
                style={{
                  width: 45,
                  height: 45,
                  padding: 7,
                  borderRadius: 5,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Ionicons name="newspaper" size={25} color="black" />
              </View>
              <Text style={{color: 'black', fontWeight: '600', fontSize: 18}}>
                Attendence Report
              </Text>
              <View
                style={{
                  width: 45,
                  height: 45,
                  padding: 7,
                  borderRadius: 5,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Ionicons
                  name="chevron-forward-outline"
                  size={25}
                  color="black"
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('SummaryReport')}
              style={{
                marginTop: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderRadius: 7,
                backgroundColor: '#be93c5',
                padding: 10,
              }}>
              <View
                style={{
                  width: 45,
                  height: 45,
                  padding: 7,
                  borderRadius: 5,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Octicons name="repo-pull" size={25} color="black" />
              </View>
              <Text style={{color: 'black', fontWeight: '600', fontSize: 18}}>
                Summary Report
              </Text>
              <View
                style={{
                  width: 45,
                  height: 45,
                  padding: 7,
                  borderRadius: 5,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Ionicons
                  name="chevron-forward-outline"
                  size={25}
                  color="black"
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                marginTop: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderRadius: 7,
                backgroundColor: '#be93c5',
                padding: 10,
              }}>
              <View
                style={{
                  width: 45,
                  height: 45,
                  padding: 7,
                  borderRadius: 5,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Octicons name="report" size={25} color="black" />
              </View>
              <Text style={{color: 'black', fontWeight: '600', fontSize: 18}}>
                All Generate Report
              </Text>
              <View
                style={{
                  width: 45,
                  height: 45,
                  padding: 7,
                  borderRadius: 5,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Ionicons
                  name="chevron-forward-outline"
                  size={25}
                  color="black"
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                marginTop: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderRadius: 7,
                backgroundColor: '#be93c5',
                padding: 10,
              }}>
              <View
                style={{
                  width: 45,
                  height: 45,
                  padding: 7,
                  borderRadius: 5,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Ionicons name="people" size={25} color="black" />
              </View>
              <Text style={{color: 'black', fontWeight: '600', fontSize: 18}}>
                Overtime Employees
              </Text>
              <View
                style={{
                  width: 45,
                  height: 45,
                  padding: 7,
                  borderRadius: 5,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Ionicons
                  name="chevron-forward-outline"
                  size={25}
                  color="black"
                />
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 10,
              gap: 10,
              flexDirection: 'row',
            }}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 7,
                backgroundColor: '#f79d00',
                paddingHorizontal: 25,
                padding: 10,
                flex: 1,
              }}>
              <View
                style={{
                  width: 45,
                  height: 45,
                  padding: 7,
                  borderRadius: 50,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <MaterialCommunityIcons
                  name="guy-fawkes-mask"
                  size={25}
                  color="black"
                />
              </View>
              <Text style={{color: 'black', fontWeight: '600'}}>
                Attendence Criteria
              </Text>
            </View>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 7,
                backgroundColor: '#abcaba',
                paddingHorizontal: 25,
                padding: 10,
                flex: 1,
              }}>
              <View
                style={{
                  width: 45,
                  height: 45,
                  padding: 7,
                  borderRadius: 50,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Ionicons name="bar-chart" size={25} color="black" />
              </View>
              <Text style={{color: 'black', fontWeight: '600'}}>
                Increase Workflow
              </Text>
            </View>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 10,
              gap: 10,
              flexDirection: 'row',
            }}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 7,
                backgroundColor: '#d3cce3',
                paddingHorizontal: 25,
                padding: 10,
                flex: 1,
              }}>
              <View
                style={{
                  width: 45,
                  height: 45,
                  padding: 7,
                  borderRadius: 50,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <MaterialCommunityIcons
                  name="guy-fawkes-mask"
                  size={25}
                  color="black"
                />
              </View>
              <Text style={{color: 'black', fontWeight: '600'}}>
                Cost Saving
              </Text>
            </View>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 7,
                backgroundColor: '#bdc3c7',
                paddingHorizontal: 25,
                padding: 10,
                flex: 1,
              }}>
              <View
                style={{
                  width: 45,
                  height: 45,
                  padding: 7,
                  borderRadius: 50,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Ionicons name="bar-chart" size={25} color="black" />
              </View>
              <Text style={{color: 'black', fontWeight: '600'}}>
                Employe Performence
              </Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
