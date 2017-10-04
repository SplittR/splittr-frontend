import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  AsyncStorage,
  ImageBackground,
  TouchableHighlight,
} from 'react-native';
import { LoginForm } from '../Components/login_form';
import { StackNavigator } from 'react-navigation';
import ProfileHeader  from '../Components/profile_header';
import ProfileGroup  from '../Components/profile_group_list';
import backgroundImage from '../../ocean.jpg';
import {Container, Footer, Title, Button, Icon} from 'native-base';
import GroupNewScene from './new_group.ios.js';

class UserShowScene extends React.Component {
  static navigationOptions = {
    title: 'Salutation',
    headerStyle: {backgroundColor: '#F7F9FB'}
  };
  constructor() {
    super();
    this.state = { user: {
      firstName: "",
      lastName: "",
      groups: []
    }}
  }

  componentWillMount = function() {
    AsyncStorage.getItem('sessionId', (err, result) => {
      const userId = result;
      const url = "https://rocky-forest-46725.herokuapp.com/users/";
      // const url = "http://localhost:3000/users/"
      const fetchUrl = url + parseInt(userId)
      fetch(fetchUrl,
            {method: 'GET'}
          ).then(function(response) { return response.json();
          }
        ).then((responseJson) => { console.log(responseJson);
          this.setState(
            {user: {
              firstName: responseJson.user.first_name,
              lastName: responseJson.user.last_name,
              groups: responseJson.user_groups}
            })
      })
    })
  }

  render(){
    const { user } = this.state
    const { navigate } = this.props.navigation
    const { navigation } = this.props

    return(
      <Container>
      <View style={{flex: 1 }}>
        <Image
        style={styles.backdrop}
        source={backgroundImage}>
        <ProfileHeader userName={user.firstName} navigation={navigation}/>
        <ProfileGroup style={styles.bottom} groups={user.groups} navigation={navigation}/>
        </Image>
        </View>
          <Footer>
            <TouchableHighlight onPress={() => navigate('Group')}>
                <Text style={styles.text}>Create Group</Text>
            </TouchableHighlight>
          </Footer>
      </Container>
    )
  }
}
const styles = StyleSheet.create({
  backdrop: {
    width: '100%',
    height: '100%',
  },
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

export default UserShowScene ;
