import React, {Component} from 'react';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { Keyboard, TextInput } from 'react-native';
import { AppRegistry,
         StyleSheet,
         TouchableHighlight,
         Button,
         View,
         Text,
         AsyncStorage
       } from 'react-native';
import { StackNavigator } from 'react-navigation';
import UserShowScene from '../Scenes/user_show.ios.js';

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

  handleHighLightPress() {
    const { user } = this.state;
    // const url = "https://rocky-forest-46725.herokuapp.com/sessions"
    const url = "http://localhost:3000/sessions"
    fetch(url, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user})
    }).then(function(response) {return response.json()}.bind(this) )
    .then(function(responseJson) {
      let sessionId = responseJson.id
      AsyncStorage.setItem('sessionId', JSON.stringify(sessionId),
    () => { AsyncStorage.getItem('sessionId', (err, result) => {
      const userId = result;
      this.props.navigation.navigate("User", {userId: userId})
    }) } )
  }.bind(this))
  }

  handleUserSubmit = this.handleHighLightPress.bind(this)

  render() {
    return(
      <View>
        <View style={styles.container}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            name="email"
             onChangeText={this.onChangeEmail}
          />
          <Text style={styles.label}>Password</Text>
          <TextInput name="password"
            style={styles.input}
            onChangeText={this.onChangePassword}/>

          <TouchableHighlight >
            <Text style={styles.signIn} onPress = {this.handleUserSubmit}>Sign In</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    marginLeft: 25,
    marginRight:25,
    paddingTop:30
  },
  label: {
    paddingTop:10,
    backgroundColor: "transparent",
    height: 35,
    color: '#666666'
  },
  input: {
    backgroundColor: "transparent",
    height: 30,
    color: '#666666',
    borderBottomColor: "#666666",
    borderBottomWidth: 1
  },
  signIn:{
    marginTop: 8,
    textAlign: "center",
    fontSize: 25,
    color: '#666666'
  }
});

export { LoginForm };
