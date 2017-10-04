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
import GroupForm from './new_group_form';
import { StackNavigator } from 'react-navigation';

class ProfileHeader extends Component {
  static navigationOptions = {
    title: 'Welcome',
    headerStyle: {backgroundColor: '#F7F9FB'}
  };
  render(){
    const { navigate } = this.props.navigation;
    return(
      <View style={styles.header}>
        <Text style={styles.user}> Hi {this.props.userName}!</Text>
        <TouchableHighlight style={styles.welcome}>
          <Text style={styles.text} onPress={() => navigate('Group')}>Create New Squad</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    padding:5,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    margin: 20,
    backgroundColor: '#8FC1E3',
    opacity: 0.9,
    borderRadius: 40,
  },
  header:{
    backgroundColor: 'transparent',
  },
  user:{
    padding:10,
    textAlign: 'right',
    fontSize: 20,
    color:'#F7F9FB',
    fontWeight: 'bold',
  },
  text:{
    padding:5,
    fontSize: 20,
    backgroundColor: 'transparent',
    color:'#F7F9FB',
    fontWeight: 'bold',
  }
})

export default ProfileHeader;
