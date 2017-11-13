import React, {Component} from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';
import { LoginForm } from '../Components/login_form'
import LinearGradient from 'react-native-linear-gradient';
import LoginSceneStyles from '../Styles/loginSceneStyles';

class LoginScene extends Component {
  static navigationOptions = {
    title: 'Login Here',
    headerStyle: {backgroundColor: '#F7F9FB'}
  };
  render(){
    const { navigation } = this.props;
    return(
  <LinearGradient colors={['#b6fbff', '#83a4d4']} style={LoginSceneStyles.linearGradient}>
    <View>
      <LoginForm navigation={navigation}/>
    </View>
  </LinearGradient>
    )
  }
}

export default LoginScene;
