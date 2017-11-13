import React, {Component} from 'react';
import {
  AppRegistry,
  TouchableHighlight,
  Text,
  View,
  AsyncStorage
} from 'react-native';
import ExpenseForm from '../Components/new_expense_form.js'
import LinearGradient from 'react-native-linear-gradient';
import Camera from '../Components/camera.js';
import ExpenseNewStyles from '../Styles/expenseNewSceneStyles'

class ExpenseNewScene extends Component {
  constructor() {
    super();
    this.state = {expense: {
      description: "",
      amount: 0,
      vendor: "",
      user_id: 0,
      group_id: 0
    }};
    this.handleOnChangeCamera = this.handleOnChangeCamera.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleButtonPress = this.handleButtonPress.bind(this)
  }

  handleOnChangeCamera(amount, groupId){
    let expense = this.state.expense
    expense.amount = amount
    expense.group_id = groupId
    AsyncStorage.getItem('sessionId', (err, result) => {
      var resultInt = parseInt(result);
      expense.user_id = resultInt
    })
    this.setState({expense: expense})
  }

  handleInputChange(name, event) {
    let expense = this.state.expense;
    expense[name] = event.nativeEvent.text;
    this.setState({expense: expense})
  }

  handleButtonPress() {
    const expense = this.state.expense;
    const navigation = this.props.navigation;
    const groupId = this.state.expense.group_id
    const url = "http://localhost:3000/groups/" + groupId + "/expenses"
    //const url = "https://rocky-forest-46725.herokuapp.com/groups/" + groupId + "/expenses"
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
    const { navigation } = this.props
    return(
      <View>
        <LinearGradient colors={['#b6fbff', '#83a4d4']} style={ExpenseNewStyles.linearGradient}>
          <TouchableHighlight style={ExpenseNewStyles.scanButton} onPress={() => navigation.navigate('Camera', {handleOnChange: this.handleOnChangeCamera, groupId: this.props.navigation.state.params.groupId, userId: this.state.expense.user_id})}>
            <Text style={ExpenseNewStyles.scanText}>Scan Receipt</Text>
          </TouchableHighlight>
          <ExpenseForm navigation={navigation} expense={this.state.expense} handleInputChange={this.handleInputChange} handleButtonPress={this.handleButtonPress} />
        </LinearGradient>
      </View>
    )
  }
}

export default ExpenseNewScene;
