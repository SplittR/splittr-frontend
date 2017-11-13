import React, {Component} from 'react';
import { StackNavigator } from 'react-navigation';
import {
  AppRegistry,
  TouchableHighlight,
  FlatList,
  Button,
  Text,
  ScrollView,
  View
} from 'react-native';
import Expense from './expense';
import ExpenseShowScene  from '../Scenes/expenses_show.ios.js'
import MemberStyles from '../Styles/memberStyles'

class Member extends Component {
  render() {
    const { member, navigate, groupId, settledUp } = this.props;
    const expenses = member.expenses
    if(settledUp === false) {
      return(
        <View style={MemberStyles.container}>
          <Text style={MemberStyles.memberName}>{member.full_name} has spent ${member.total_spend}</Text>
          <Text>Expenses:</Text>
          <View style={MemberStyles.listContainer}>
          {expenses.map(function(expense, index){
            return (
            <TouchableHighlight style={MemberStyles.expense} key={index}>
              <Text style={MemberStyles.expense} onPress = {() => navigate('ExpenseShow', { expense: expense })}>{expense.vendor + ": $" +expense.amount}</Text>
            </TouchableHighlight>
            )
          })}
        </View>
        </View>
      )
    } else if(settledUp === true && member.owes === false) {
      return(
        <View style={MemberStyles.container}>
          <Text style={MemberStyles.memberName}>{member.full_name} has spent ${member.total_spend} and is owed ${member.amount_user_is_owed} by the group</Text>
          <Text>Expenses:</Text>
          <View style={MemberStyles.listContainer}>
          {expenses.map(function(expense, index){
            return (
            <TouchableHighlight style={MemberStyles.expense} key={index}>
              <Text style={MemberStyles.expense} onPress = {() => navigate('ExpenseShow', { expense: expense })}>{expense.vendor + ": $" +expense.amount}</Text>
            </TouchableHighlight>
            )

          })}
        </View>
        </View>
      )
    } else if(settledUp === true && member.owes === true) {
      return(
        <View style={MemberStyles.container}>
          <Text style={MemberStyles.memberName}>{member.full_name} has spent ${member.total_spend} and owes ${member.amount_user_owes} to the group</Text>
          <Text>Expenses:</Text>
          <View style={MemberStyles.listContainer}>
          {expenses.map(function(expense, index){
            return (
            <TouchableHighlight style={MemberStyles.expense} key={index}>
              <Text style={MemberStyles.expense} onPress = {() => navigate('ExpenseShow', { expense: expense })}>{expense.vendor + ": $" +expense.amount}</Text>
            </TouchableHighlight>
            )
          })}
        </View>
        </View>
      )
    }
  }
}
StackNavigator({
  Expense: {
    screen: ExpenseShowScene,
  }
});

export default Member ;
