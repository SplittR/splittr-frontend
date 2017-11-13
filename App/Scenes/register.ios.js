import React, {Component} from 'react';
import {
  AppRegistry,
  TouchableHighlight,
  Text,
  View,
  Button
} from 'react-native';
import { RegisterForm } from '../Components/user_register_form';
import LinearGradient from 'react-native-linear-gradient';
import RegisterSceneStyles from '../Styles/registerSceneStyles'

class RegisterScene extends Component {
  static navigationOptions = {
    title: 'Join the Family',
    headerStyle: {backgroundColor: '#F7F9FB'}
  };
  render(){
    return(
      <View style={RegisterSceneStyles.background}>
        <LinearGradient colors={['#b6fbff', '#83a4d4']} style={RegisterSceneStyles.linearGradient}>
      <RegisterForm navigation={this.props.navigation} />
      </LinearGradient>
    </View>
    )
  }
}

export default RegisterScene;
