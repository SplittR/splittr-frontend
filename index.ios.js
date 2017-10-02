import { Tabs } from './App/Components/router.js';
import { StackNavigator } from 'react-navigation';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  TextInput,
  View,
  Image,
  Button,
  AsyncStorage
} from 'react-native';

import LoginScene from './App/Scenes/login.ios.js';
import RegisterScene from './App/Scenes/register.ios.js';
import UserShowScene from './App/Scenes/user_show.ios.js';
import ExpenseShowScene from './App/Scenes/expenses_show.ios.js';
import ExpenseNewScene from './App/Scenes/expenses_new.ios.js';
import GroupShowScene from './App/Scenes/group_show.ios.js';
import GroupNewScene from './App/Scenes/new_group.ios.js';
import LinearGradient from 'react-native-linear-gradient';
import CameraAccess from './App/Components/camera.js';
import backgroundImage from './waterdrop-3.jpg'

var styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  button: {
    backgroundColor: '#00ff00',
    fontWeight: 'bold',
  }
})


class Home extends React.Component {
  // static navigationOptions = {
  //   title: 'Welcome',
  //   headerStyle: {backgroundColor: '#F7F9FB'}
  // };
  constructor() {
    super();
    this.state = {
      sessionId: ''
    }
  }

  componentWillMount(){
    AsyncStorage.getItem('sessionId', (err, result) => this.setState({sessionId: result}) )
    // AsyncStorage.removeItem('sessionId')
  }


  render() {
    const { navigate } = this.props.navigation;
    if(this.state.sessionId){
      return(
        <UserShowScene navigation={this.props.navigation}/>
      )
    }else {
      return (
        <Image
          style={styles.backdrop}
          source={backgroundImage}>
          <View style={styles.container}>
            <TouchableHighlight style={styles.welcome} onPress={() => navigate('Login')}>
              <Text style={styles.text}>Login</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.welcome} onPress={() => navigate('Register')}>
              <Text style={styles.text}>Register</Text>
            </TouchableHighlight>
          </View>
        </Image>
      );
    }
  }


}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  backdrop: {
    color: 'blue',
    fontSize: 20,
    backgroundColor: 'transparent',
    width: '100%',
    height: '100%',
  },
  welcome: {
    fontSize: 50,
    paddingTop:5,
    paddingBottom:5,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'justify',
    margin: 20,
    backgroundColor: '#8FC1E3',
    borderRadius: 40,
    opacity: 0.7
  },
  text:{
    fontSize: 40,
    backgroundColor: 'transparent',
    color:'#F7F9FB',
    fontWeight: '400',
  }

});
const splittr = StackNavigator({
  Home: { screen: Home },
  CameraAcc:{ screen: CameraAccess},
  Login: {
    screen: LoginScene,
  },
  Register: {
    screen: RegisterScene,
  },
  User: {
    screen: UserShowScene,
  },
  Expense: {
    screen: ExpenseNewScene,
  },
  ExpenseShow: {
    screen: ExpenseShowScene,
  },
  GroupShow: {
    screen: GroupShowScene,
  },
  GroupNewScene: {
    screen: GroupNewScene,
  }
});


AppRegistry.registerComponent('splittr', () => splittr);
