import React, {Component} from 'react';
import { StackNavigator } from 'react-navigation';
import { FormLabel, FormInput, labelStyle } from 'react-native-elements'
import {
  TextInput,
  TouchableHighlight,
  View,
  Button,
  Text,
  AsyncStorage
} from 'react-native';
import UserRegisterFormStyles from '../Styles/userRegisterFormStyles'

class RegisterForm extends Component {
  constructor() {
    super();
    this.state = {user: {
      first_name: "First Name",
      last_name: "Last Name",
      email: "email",
      password: "password"
    }};
  }

  handleInputChange(name, text) {
    const user = this.state.user;
    user[name] = text;
    this.setState({user: user})
  }

  onChangeFirstName = this.handleInputChange.bind(this, "first_name")
  onChangeLastName = this.handleInputChange.bind(this, "last_name")
  onChangeEmail = this.handleInputChange.bind(this, "email")
  onChangePassword = this.handleInputChange.bind(this, "password")

  handleHighLightPress() {
    const { user } = this.state
    //const url = "https://rocky-forest-46725.herokuapp.com/users"
    const url = "http://localhost:3000/users"
    fetch(url, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user})
    }).then((response) => response.json())
    .then((responseJson) => AsyncStorage.setItem('sessionId', JSON.stringify(responseJson.id)))
    .then(() => this.props.navigation.navigate("User"))
  }

  handleNewUserSubmit = this.handleHighLightPress.bind(this)

  render() {
    return(
      <View style={UserRegisterFormStyles.text}>
        <View style={UserRegisterFormStyles.container}>
          <Text style={UserRegisterFormStyles.label}>First Name</Text>
          <TextInput
            style={UserRegisterFormStyles.input}
            name="first_name"
             onChangeText={this.onChangeFirstName} />

          <Text style={UserRegisterFormStyles.label}>Last Name</Text>
          <TextInput name="last_name"
            style={UserRegisterFormStyles.input}
            onChangeText={this.onChangeLastName}/>
          <Text style={UserRegisterFormStyles.label}>Email</Text>
          <TextInput name="email"
              style={UserRegisterFormStyles.input}
              onChangeText={this.onChangeEmail}/>
          <Text style={UserRegisterFormStyles.label}>Password</Text>
          <TextInput name="password"
                style={UserRegisterFormStyles.input}
                onChangeText={this.onChangePassword}/>

          <TouchableHighlight >
            <Text style={UserRegisterFormStyles.signIn} onPress = {this.handleNewUserSubmit}>Create User</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

export {RegisterForm};
