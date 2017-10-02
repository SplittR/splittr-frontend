import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
  Button
} from 'react-native';
import { RegisterForm } from '../Components/user_register_form';
import LinearGradient from 'react-native-linear-gradient';

class RegisterScene extends Component {
  static navigationOptions = {
    title: 'Join the Family',
    headerStyle: {backgroundColor: '#F7F9FB'}
  };
  render(){
    return(
      <View style={styles.background}>
        <LinearGradient colors={['#b6fbff', '#83a4d4']} style={styles.linearGradient}>
      <RegisterForm navigation={this.props.navigation} />
      </LinearGradient>
    </View>
    )
  }
}
const styles = StyleSheet.create({
  linearGradient: {
    height: "100%",
  },
  background: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  button: {
    backgroundColor: '#00ff00',
    fontWeight: 'bold',
  },
});

export default RegisterScene;
