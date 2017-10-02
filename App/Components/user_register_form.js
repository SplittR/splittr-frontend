import React, {Component} from 'react';
import { StackNavigator } from 'react-navigation';
import { FormLabel, FormInput, labelStyle } from 'react-native-elements'
import { StyleSheet,
         TextInput,
         TouchableHighlight,
         View,
         Button,
         Text,
       } from 'react-native';

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
    // const url = "https://rocky-forest-46725.herokuapp.com/users"
    const url = "http://localhost:3000/users"
    fetch(url, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user})
    }).then((response) => console.log(response))
    .then(this.props.navigation.navigate("User"))
  }

  handleNewUserSubmit = this.handleHighLightPress.bind(this)

  render() {
    return(
      <View style={styles.text}>
        <View style={styles.container}>
          <Text style={styles.label}>First Name</Text>
          <TextInput
            style={styles.input}
            name="first_name"
             onChangeText={this.onChangeFirstName} />

          <Text style={styles.label}>Last Name</Text>
          <TextInput name="last_name"
            style={styles.input}
            onChangeText={this.onChangeLastName}/>
          <Text style={styles.label}>Email</Text>
          <TextInput name="email"
              style={styles.input}
              onChangeText={this.onChangeEmail}/>
          <Text style={styles.label}>Password</Text>
          <TextInput name="password"
                style={styles.input}
                onChangeText={this.onChangePassword}/>

          <TouchableHighlight >
            <Text style={styles.signIn} onPress = {this.handleNewUserSubmit}>Create User</Text>
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



export {RegisterForm};
