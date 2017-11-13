import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground
} from 'react-native';
import backgroundImage from '../../beach.jpg'


class ExpenseShowScene extends Component {
  static navigationOptions = {
    title: 'Bills Bills Bills',
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
    const url = "http://localhost:3000/expenses/"
    //const url = "https://rocky-forest-46725.herokuapp.com/expenses/"
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
    return(
      <Image
      style={styles.backdrop}
      source={backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.header}>Expense</Text>
        <Text style={styles.text}>Vendor: {expense.vendor}</Text>
        <Text style={styles.text}>Description:{expense.description}</Text>
        <Text style={styles.text}>Amount: ${expense.amount}</Text>
        <Text style={styles.text}>Paid By: {expense.user}</Text>
      </View>
      </Image>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    margin: "15%",
    backgroundColor: 'transparent',
  },
  backdrop: {
    width: '100%',
    height: '100%',
  },
  header: {
    fontSize: 40,
    paddingBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color:'#F7F9FB',
    fontWeight: 'bold',
  },
  text:{
    fontSize: 20,
    margin: "5%",
    backgroundColor: 'transparent',
    color:'black',
    fontWeight: 'bold',
  }
})

export default ExpenseShowScene ;
