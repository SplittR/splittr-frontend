import React, {Component} from 'react';
import {
  AppRegistry,
  Text,
  View,
  ScrollView,
  TouchableHighlight
} from 'react-native';
import  MemberList from '../Components/member_list';
import LinearGradient from 'react-native-linear-gradient';
import ExpenseForm from './expenses_new.ios.js';
import { StackNavigator } from 'react-navigation';
import AddNewMember from '../Components/finder.js'
import GroupShowSceneStyles from '../Styles/groupShowSceneStyles'

class GroupShowScene extends Component {
  constructor() {
    super();
    this.state = {group: {
      groupName: "",
      details: "",
      settledUp: false,
    }, totalSpend: 0,
       memberSplit: 0,
       members: []
     }
   }

   findGroup = (group) => {
     this.setState({
       group: {
         groupName: group.group.group_name,
         details: group.group.details,
         settledUp: group.group.settled_up
       },
       totalSpend: group.total_spend,
       memberSplit: group.member_split,
       members: group.members})
   }


  componentWillMount = function() {
    const id = this.props.navigation.state.params.groupId
    //const url = "https://rocky-forest-46725.herokuapp.com/groups/"
    const url = "http://localhost:3000/groups/"
    const fetchUrl = url + id;
    fetch(fetchUrl,
      {method: 'GET'}
    ).then((response) => response.json()
  ).then((responseJson) => {this.setState({
    group: {
      groupName: responseJson.group.group_name,
      details: responseJson.group.details,
      settledUp: responseJson.group.settled_up
    },
    totalSpend: responseJson.total_spend,
    memberSplit: responseJson.member_split,
    members: responseJson.members
  })})
  }

  settleUpHandler = function() {
    const { group } = this.state
    // const url = "https://rocky-forest-46725.herokuapp.com/groups/"
    const url = "http://localhost:3000/groups/"
    const id = this.props.navigation.state.params.groupId
    fetch(url + id + "/settle", {
      method: 'POST'
    }).then((response) => response.json()
  ).then(function(responseJson) {
    alert(responseJson.message);
    group.settledUp = true;
    this.setState({group: group})
    console.log(this.state)
  }.bind(this)
    )
  }

  settleUpHandler = this.settleUpHandler.bind(this);

  render() {
    const { navigate } = this.props.navigation;
    const { navigation } = this.props
    const id = this.props.navigation.state.params.groupId;
    if(this.state.group.settledUp === false){
      return(
        // <ScrollView style={{flex: 1}}>
        <LinearGradient colors={['#b6fbff', '#83a4d4']} style={GroupShowSceneStyles.linearGradient}>
          <View style={GroupShowSceneStyles.container}>
            <View>
              <View>
                <Text style={GroupShowSceneStyles.groupHeader}>{this.state.group.groupName}</Text>
                <Text style={GroupShowSceneStyles.details}>{this.state.group.details}</Text>
              </View>
              <View style={GroupShowSceneStyles.sumHeader}>
                <View style={GroupShowSceneStyles.sumContainer}>
                  <View style={GroupShowSceneStyles.sumBox}>
                    <Text style={GroupShowSceneStyles.expenseHeader}>Group Spent</Text>
                    <Text>${this.state.totalSpend}</Text>
                  </View>
                  <View style={GroupShowSceneStyles.sumBox}>
                    <Text style={GroupShowSceneStyles.expenseHeader}>Member Split</Text>
                    <Text>${this.state.memberSplit}</Text>
                    <Text style={GroupShowSceneStyles.membersList}>Member Expenses:</Text>
                  </View>
                </View>
                <TouchableHighlight style={GroupShowSceneStyles.button} onPress={() => navigate('Expense', {groupId: id})}>
                  <Text style={GroupShowSceneStyles.buttonText}>Add Expense</Text>
                </TouchableHighlight>

              </View>
              </View>
              </View>
              <ScrollView >
                <MemberList settledUp={this.state.group.settledUp} groupId={id} members={this.state.members} navigate={ navigate }/>
              </ScrollView>

              <View>
                <AddNewMember groupId={id} navigation={navigation} findGroup={this.findGroup}/>
              </View>

              <View style={GroupShowSceneStyles.footer}>
                <TouchableHighlight style={GroupShowSceneStyles.settleButton} onPress={this.settleUpHandler}>
                  <Text style={GroupShowSceneStyles.settleText}>Settle up</Text>
                </TouchableHighlight>
              </View>
        </LinearGradient>
          // </ScrollView>
      )
    } else if(this.state.group.settledUp === true) {
      return(
        <LinearGradient colors={['#b6fbff', '#83a4d4']} style={GroupShowSceneStyles.linearGradient}>
          <View style={GroupShowSceneStyles.container}>
            <View>
              <View>
                <Text style={GroupShowSceneStyles.groupHeader}>{this.state.group.groupName}</Text>
                <Text style={GroupShowSceneStyles.details}>{this.state.group.details}</Text>
              </View>
              <View style={GroupShowSceneStyles.sumHeader}>
                <View style={GroupShowSceneStyles.sumContainer}>
                  <View style={GroupShowSceneStyles.sumBox}>
                    <Text style={GroupShowSceneStyles.expenseHeader}>Group Spent</Text>
                    <Text>${this.state.totalSpend}</Text>
                  </View>
                  <View style={GroupShowSceneStyles.sumBox}>
                    <Text style={GroupShowSceneStyles.expenseHeader}>Member Split</Text>
                    <Text>${this.state.memberSplit}</Text>
                  </View>
                </View>
              </View>
              <MemberList settledUp={this.state.group.settledUp} groupId={id} members={this.state.members} navigate={ navigate }/>
              </View>
          </View>
        </LinearGradient>
      )
    }
  }
}

export default GroupShowScene;
