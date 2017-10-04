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

class ExpenseForm extends Component {
  constructor() {
    super();
    this.state = {expense: {
      description: "",
      amount: 0,
      vendor: "",
      user_id: 0,
      group_id: 0
    }};
  }

  componentWillMount = function() {
    const groupId = this.props.navigation.state.params.groupId;
    console.log("groupId" + groupId);
    AsyncStorage.getItem('sessionId', (err, result) => {
      this.setState({expense: { description: "", amount: 0, vendor: "", user_id: parseInt(result), group_id: groupId}})
    })
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
    const navigation = this.props.navigation;
    const groupId = this.props.navigation.state.params.groupId
    console.log("this is what you need " + groupId)
    //const url = "http://localhost:3000/groups/" + groupId + "/expenses"
    const url = "https://rocky-forest-46725.herokuapp.com/groups/" + groupId + "/expenses"
    console.log(url)
    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({expense})
    }).then(function() {
      navigation.navigate("GroupShow", {groupId: groupId})
    })
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
                <Text style={styles.confirm} onPress = {this.onButtonPress}>Confirm Expense</Text>
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
      confirm:{
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: "#666666",
        marginTop: 30,
        marginLeft: 30,
        marginRight: 30,
        color: '#666666',
        textAlign: "center",
        fontSize: 25
      }
    });

export default ExpenseForm;
