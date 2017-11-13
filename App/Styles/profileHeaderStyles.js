import { StyleSheet } from 'react-native';

const ProfileHeaderStyles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    padding:5,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    margin: 20,
    backgroundColor: '#8FC1E3',
    opacity: 0.9,
    borderRadius: 40,
  },
  header:{
    backgroundColor: 'transparent',
  },
  user:{
    padding:10,
    textAlign: 'right',
    fontSize: 20,
    color:'#F7F9FB',
    fontWeight: 'bold',
  },
  text:{
    padding:5,
    fontSize: 20,
    backgroundColor: 'transparent',
    color:'#F7F9FB',
    fontWeight: 'bold',
  }
})

export default ProfileHeaderStyles;
