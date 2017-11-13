import React, {Component} from 'react';
import {
  TextInput,
  View,
  Button,
  TouchableHighlight,
  Text,
  AppRegistry,
} from 'react-native';
import GroupForm from './new_group_form';
import { StackNavigator } from 'react-navigation';
import ProfileHeaderStyles from '../Styles/profileHeaderStyles'

class ProfileHeader extends Component {
  static navigationOptions = {
    title: 'Welcome',
    headerStyle: {backgroundColor: '#F7F9FB'}
  };
  render(){
    const { navigate } = this.props.navigation;
    return(
      <View style={ProfileHeaderStyles.header}>
        <Text style={ProfileHeaderStyles.user}> Hi {this.props.userName}!</Text>
        <TouchableHighlight style={ProfileHeaderStyles.welcome}>
          <Text style={ProfileHeaderStyles.text} onPress={() => navigate('GroupNewScene')}>Create New Squad</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const splittr = StackNavigator({
  GroupForm: {
    screen: GroupForm,
  },
});

export default ProfileHeader;
