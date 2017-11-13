import { StyleSheet } from 'react-native';

const profileGroupStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  list: {
    fontSize: 20,
    padding: 10,
    margin: 10,
    alignItems: 'center',
    backgroundColor: '#AAA0A0',
    borderRadius: 700,
    marginRight: 70,
    marginLeft: 70,
    opacity: .80,
  },
header:{
  justifyContent: 'center',
  backgroundColor: 'transparent',
  fontSize: 15,
  color:'#F7F9FB',
  fontWeight: '400',
},
group: {
  padding:10,
  color:'#F7F9FB',
  fontWeight: 'bold',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  fontSize: 20,
  backgroundColor: 'transparent',

},
text:{
  padding:5,
  fontSize: 15,
  color:'#F7F9FB',
  fontWeight: '800',
  opacity: 1,
  }
})

export default profileGroupStyles;
