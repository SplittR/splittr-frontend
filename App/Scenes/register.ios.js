import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { RegisterForm } from '../Components/user_register_form'

class RegisterScene extends Component {
  render(){
    return(
    <View>  
      <RegisterForm />
    </View>
    )
  }
}

export default RegisterScene;
