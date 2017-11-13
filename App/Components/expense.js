import React, {Component} from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';
import ExpenseStyles from '../Styles/expenseStyle'

class Expense extends Component {
  render() {
    const { expense } = this.props;
    return(
      <View style={ ExpenseStyles.container }>
        <Text>{ expense.user}: </Text>
          <Text>Amount: { expense.amount } paid to: { expense.vendor }</Text>
      </View>
    )
  }
}
export default Expense ;
