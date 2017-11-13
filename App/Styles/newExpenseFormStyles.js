import { StyleSheet } from 'react-native';

const ExpenseFormStyles = StyleSheet.create({
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

export default ExpenseFormStyles;
