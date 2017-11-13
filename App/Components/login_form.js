import React, {Component} from 'react';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { Keyboard, TextInput } from 'react-native';
import { AppRegistry,
         TouchableHighlight,
         Button,
         View,
         Text,
         AsyncStorage
       } from 'react-native';
import { StackNavigator } from 'react-navigation';
import UserShowScene from '../Scenes/user_show.ios.js';
import LoginFormStyles from '../Styles/loginFormStyles';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {user: {
      email: "email",
      password: ""
    }};
  }

  handleInputChange(name, text) {
    const user = this.state.user;
    user[name] = text;
    this.setState({user: user})
  }

  onChangeEmail = this.handleInputChange.bind(this, "email");
  onChangePassword = this.handleInputChange.bind(this, "password")

  async handleHighLightPress() {
    const { user } = this.state;
    //const url = "https://rocky-forest-46725.herokuapp.com/sessions"
    const url = "http://localhost:3000/sessions"
    var responseJson = await fetch(url, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user})
    }).then(response => response.json() )

    let sessionId = responseJson.id
    await AsyncStorage.setItem('sessionId', JSON.stringify(sessionId))
    var userId = await AsyncStorage.getItem('sessionId')
    this.props.navigation.navigate("User", {userId: userId})
  }

  handleUserSubmit = this.handleHighLightPress.bind(this)

  render() {
    return(
      <View>
        <View style={LoginFormStyles.container}>
          <Text style={LoginFormStyles.label}>Email</Text>
          <TextInput
            autoCapitalize= {false}
            style={LoginFormStyles.input}
            name="email"
             onChangeText={this.onChangeEmail}
          />
          <Text style={LoginFormStyles.label}>Password</Text>
          <TextInput name="password"
            style={LoginFormStyles.input}
            autoCapitalize= {false}
            secureTextEntry = {true}
            onChangeText={this.onChangePassword}/>

          <TouchableHighlight >
            <Text style={LoginFormStyles.signIn} onPress = {this.handleUserSubmit}>Sign In</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

export { LoginForm };
