import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableHighlight,
  AsyncStorage
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import GroupShowScene from '../Scenes/group_show.ios.js';
import NewGroupFormStyles from '../Styles/newGroupFormStyles';

class GroupForm extends Component {
  constructor() {
    super();
    this.state = {group: {
        group_name: "",
        details: "",
        creator_id: 0
      }};
  }

  componentWillMount = function() {
    AsyncStorage.getItem('sessionId', (err, result) => {
      this.setState({group: { creator_id: result, group_name: "", details: "" }})
    })
  }

  handleInputChange(name, text) {
    const group = this.state.group;
    group[name] = text;
    this.setState({group: group})
  }

  onChangeGroupName = this.handleInputChange.bind(this, "group_name")
  onChangeDetails = this.handleInputChange.bind(this, "details")
  onButtonPress = this.handleButtonPress.bind(this)

  handleButtonPress() {
    const { group } = this.state;
    const { navigation } = this.props;
    //const url = "https://rocky-forest-46725.herokuapp.com/groups"
    const url = "http://localhost:3000/groups"
    fetch(url, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({group})
    }).then(function(response) {
      console.log(response);
      return response.json()
    }).then(function(responseJson) {
      console.log(responseJson);
      navigation.navigate("GroupShow", {groupId: responseJson.group.id})
    }).catch(function(err) {
      alert(err)
    })
  }

  render() {
    return(
      <View>
        <View style={styles.container}>
          <Text style={styles.label}>Group Name:</Text>
          <TextInput
            style={styles.input}
            name="vendor"
             onChangeText={this.onChangeGroupName}
          />
          <Text style={styles.label}>Details:</Text>
          <TextInput name="description"
            style={styles.input}
            onChangeText={this.onChangeDetails}/>

          <TouchableHighlight >
            <Text style={styles.signIn} onPress = {this.onButtonPress}>Create Group</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

export default GroupForm;
