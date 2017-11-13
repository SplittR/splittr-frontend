import React, {Component} from 'react';
import {
  TextInput,
  View,
  Button,
  TouchableHighlight,
  Text,
  AppRegistry,
  ScrollView,
} from 'react-native';
import { StackNavigator } from 'react-navigation'
import { NavigationActions } from 'react-navigation'
import profileGroupStyles from '../Styles/profileGroupStyles'

class ProfileGroup extends Component {
  render() {
    const { navigation, groups } = this.props;
    return(
      <View style={profileGroupStyles.container}>
        <Text style={profileGroupStyles.group}>Your Groups</Text>
        <ScrollView style={{flex: 3}}>
          <View>
            {groups.map(function(group, index){
              return (
                <TouchableHighlight onPress = {() => navigation.navigate('GroupShow', {groupId: group.id})} style={profileGroupStyles.list}>
                  <Text
                    style={profileGroupStyles.text}
                    key={index}>{group.group_name}</Text>
                </TouchableHighlight>
              )
            })}
        </View>
      </ScrollView>
    </View>
    );
  }
}

export default ProfileGroup;
