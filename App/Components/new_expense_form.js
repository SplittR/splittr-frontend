import React, {Component} from 'react';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { TextInput,
         StyleSheet,
         TouchableHighlight,
         View,
         Button,
         Text,
       } from 'react-native';

class ExpenseForm extends Component {
  constructor() {
    super();
    this.state = {expense: {
      description: "description",
      amount: 12.34,
      vendor: "Rico's Seaside Bar & Grill",
      membership_id: 3
    }};
  }

  handleInputChange(name, text) {
    const expense = this.state.expense;
    expense[name] = text;
    this.setState({expense: expense})
  }

  onChangeDescription = this.handleInputChange.bind(this, "description")
  onChangeAmount = this.handleInputChange.bind(this, "amount")
  onChangeVendor = this.handleInputChange.bind(this, "vendor")
  onButtonPress = this.handleButtonPress.bind(this)

  handleButtonPress() {
    const expense = this.state.expense;
    const url = "http://localhost:3000/groups/1/expenses"
    // const url = "https://rocky-forest-46725.herokuapp.com/groups/1/expenses"
    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({expense})
    }).then((response) => console(response))
  }

  render() {
    return(
      <View>
        <View style={styles.container}>
          <Text style={styles.label}>Vendor</Text>
          <TextInput
            style={styles.input}
            name="vendor"
             onChangeText={this.onChangeVendor}
          />
          <Text style={styles.label}>Description</Text>
          <TextInput name="description"
            style={styles.input}
            onChangeText={this.onChangeDescription}/>
          <Text style={styles.label}>Amount</Text>
          <TextInput name="amount"
              style={styles.input}
              onChangeText={this.onChangeAmount}/>

          <TouchableHighlight >
            <Text style={styles.signIn} onPress = {this.onButtonPress}>Create Expense</Text>
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

export default ExpenseForm;
