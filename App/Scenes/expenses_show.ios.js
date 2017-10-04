import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import {Container, Footer, Title, Button, Icon} from 'native-base';
import UserShowScene from './user_show.ios.js';
import GroupNewScene from './new_group.ios.js';

class ExpenseShowScene extends Component {
  static navigationOptions = {
    title: 'Expense',
    headerStyle: {backgroundColor: '#F7F9FB'}
  };
  constructor() {
    super();
    this.state = { expense: {
        vendor: "",
        amount: "",
        description: "",
        user: "",
        error: ""
    }}
  }

  componentWillMount = function() {
    const expenseId = this.props.navigation.state.params.expense.id
    console.log("expense id " + expenseId)
    // const url = "http://localhost:3000/expenses/"
    const url = "https://rocky-forest-46725.herokuapp.com/expenses/"
    const fetchUrl = url + expenseId
    fetch(fetchUrl, { method: 'get' })
    .then((response) => response.json())
    .then((responseJson) =>  {
      this.setState({
        expense: {
            vendor: responseJson.vendor,
            amount: responseJson.amount,
            description: responseJson.description,
            user: responseJson.paid_by
          }
        })
      }).catch(err => { 
        console.log(err)
      })
  }

  render() {
    const { expense } = this.state
    const { navigate } = this.props.navigation
    const { navigation } = this.props

    return(
      <Container>
          <View>
            <Text>Expense</Text>
            <Text>Vendor: {expense.vendor}</Text>
            <Text>Description: {expense.description}</Text>
            <Text>Amount: ${expense.amount}</Text>
            <Text>Paid By: {expense.user}</Text>
          </View>
        <Footer>
          <TouchableHighlight onPress={() => navigate('User')}>
              <Text style={styles.text}>Profile</Text>
          </TouchableHighlight>
            <TouchableHighlight onPress={() => navigate('Group')}>
                <Text style={styles.text}>Create Group</Text>
            </TouchableHighlight>
        </Footer>
    </Container>
    )
  }
}

const styles = StyleSheet.create({
  bottom: {
    margin: 100,
  },
  text:{
    fontSize: 25,
    backgroundColor: 'transparent',
    color:'black',
    fontWeight: 'bold',
  }
});

export default ExpenseShowScene ;
