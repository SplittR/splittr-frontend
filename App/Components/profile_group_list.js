import React, {Component} from 'react';
import {
  TextInput,
  View,
  Button,
  TouchableHighlight,
  Text,
  AppRegistry,
  StyleSheet,
} from 'react-native';
import { StackNavigator } from 'react-navigation'
import { NavigationActions } from 'react-navigation'

class ProfileGroup extends Component {
  render() {
    const { navigation, groups } = this.props;
    return(
      <View style={styles.header}>
        <Text style={styles.group}>Your Groups</Text>
        {groups.map(function(group, index){
          return (
            <View>
              <TouchableHighlight style={styles.list}>
                <Text style={styles.text} key={index} onPress = {() => navigation.navigate('GroupShow', {groupId: group.id})}>{group.group_name}</Text>
              </TouchableHighlight>
              {/* <TouchableHighlight key={index}>
                <Text onPress = {() => navigation.navigate('GroupShow', {group: group})}>{group.group_name}: button</Text>
              </TouchableHighlight> */}
            </View>
          )
        })}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  list: {
    fontSize: 20,
    padding:2.5,
    alignItems: 'center',
    margin: 5,
    backgroundColor: '#AAA0A0',
    borderRadius: 700,
  },
header:{
  justifyContent: 'center',
  backgroundColor: 'transparent',
  fontSize: 15,
  color:'#F7F9FB',
  fontWeight: '400',
},
group: {
  paddingBottom:5,
  color:'#F7F9FB',
  fontWeight: 'bold',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  fontSize: 20,
},
text:{
  padding:5,
  fontSize: 15,
  color:'#F7F9FB',
  fontWeight: 'bold',
}
})

export default ProfileGroup;
