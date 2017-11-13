import { StyleSheet } from 'react-native';

const UserRegisterFormStyles = StyleSheet.create({
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

export default UserRegisterFormStyles;
