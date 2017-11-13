import React, {Component} from 'react';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { TextInput,
  StyleSheet,
  TouchableHighlight,
  View,
  Button,
  Text,
  AsyncStorage
} from 'react-native';
import ExpenseFormStyles from '../Styles/newExpenseFormStyles';

class ExpenseForm extends Component {
  render() {
    return(
      <View>
        <View style={ExpenseFormStyles.container}>
          <Text style={ExpenseFormStyles.label}>Vendor</Text>
          <TextInput
            style={ExpenseFormStyles.input}
            name="vendor"
            onChange={(evt) => this.props.handleInputChange('vendor',evt)}
          />
          <Text style={ExpenseFormStyles.label}>Description</Text>
          <TextInput name="description"
            style={ExpenseFormStyles.input}
            onChange={(evt) => this.props.handleInputChange('description',evt)} />
          <Text style={ExpenseFormStyles.label}>Amount</Text>
          <TextInput name="amount"
              style={ExpenseFormStyles.input}
              onChange={(evt) => this.props.handleInputChange('amount',evt)} value={this.props.expense.amount}/>

          <TouchableHighlight onPress={this.props.handleButtonPress}>
            <Text style={ExpenseFormStyles.confirm}>Confirm Expense</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

export default ExpenseForm;
