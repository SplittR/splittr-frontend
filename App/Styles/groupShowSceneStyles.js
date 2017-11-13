import { StyleSheet } from 'react-native';

const GroupShowSceneStyles = StyleSheet.create({
  background: {
  backgroundColor: 'transparent',

  },
  linearGradient: {
    height: "100%",
    paddingLeft: 15,
    paddingRight: 15,
  },
  groupHeader:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 2.5,
  },
  details: {
    textAlign: 'center',
    fontSize: 15,
    marginTop:2,
    marginBottom: 30
  },
  sumBox: {
    marginTop:5,
    marginBottom: 5,
    flexDirection: 'column',
  },
  membersList: {
    padding : 5,
    textAlign: 'center',
    fontSize: 30,
    marginTop:5,
    marginBottom: 15,
  },
  sumHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sumContainer: {
    flexDirection: 'column',
    margin: "-5%",
    marginLeft: "5%"
  },
  button: {
    marginTop:5,
    padding: 5,
    // marginRight: 5,
    marginLeft: "-20%",
  },
  expenseHeader: {
    fontWeight: 'bold',
    fontSize: 18
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
    padding: 5,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#8BBFC2'
  },
  settleText:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20
  },
  settleButton:{
    backgroundColor: '#83a4d4',
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#8BBFC2',
    marginBottom:50
  },
  container: {
    flex:1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'transparent'
  }
})

export default GroupShowSceneStyles;
