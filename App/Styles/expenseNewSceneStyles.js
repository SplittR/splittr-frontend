import { StyleSheet } from 'react-native';

const ExpenseNewStyles = StyleSheet.create({
  linearGradient: {
    height: "100%",
  },
  background: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  button: {
    backgroundColor: '#00ff00',
    fontWeight: 'bold',
  },
  scanButton:{
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#8BBFC2',
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30,
    color: '#666666'
  },
  scanText:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#666666'
  }
});

export default ExpenseNewStyles;
