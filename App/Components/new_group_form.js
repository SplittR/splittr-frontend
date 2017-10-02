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

class GroupForm extends Component {
  constructor() {
    super();
    this.state = {group: {
        group_name: "",
        details: "",
        creator_id: 0
      }};
  }

  findCreatorId() {
    AsyncStorage.getItem('sessionId', (err, result) => {
      this.setState({group: { creator_id: result, group_name: "", details: "" }})
    })
  }

  componentWillMount = function() {
    this.findCreatorId()
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
    // const url = "https://rocky-forest-46725.herokuapp.com/groups"
    const url = "http://localhost:3000/groups"
    fetch(url, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({group})
    }).then(function(response) {
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
        <Text>Group Name:</Text>
        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}} value={this.state.group.group_name} onChangeText={this.onChangeGroupName}/>
        <Text>Description:</Text>
        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}} value={this.state.group.details} onChangeText={this.onChangeDetails}/>
        <TouchableHighlight onPress={this.onButtonPress}>
          <Text>Create Group:button</Text>
        </TouchableHighlight>
      </View>
    )
  }
}


export default GroupForm;
