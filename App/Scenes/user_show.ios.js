import React, {Component} from 'react';
import {
  AppRegistry,
  Text,
  TextInput,
  View,
  Image,
  Button,
  AsyncStorage,
  ImageBackground
} from 'react-native';
import ProfileHeader  from '../Components/profile_header';
import ProfileGroup  from '../Components/profile_group_list';
import LinearGradient from 'react-native-linear-gradient';
import { Tabs } from '../Components/router.js';
import backgroundImage from '../../ocean.jpg'
import UserShowSceneStyles from '../Styles/userShowSceneStyles'

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
      //const url = "https://rocky-forest-46725.herokuapp.com/users/";
      const url = "http://localhost:3000/users/"
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
    const { navigation } = this.props
    return(
      <LinearGradient colors={['#83a4d4', '#b6fbff']} style={UserShowSceneStyles.linearGradient}>
      <View style={{flex: 1 }}>
        <Image
        style={UserShowSceneStyles.backdrop}
        source={backgroundImage}>
        <ProfileHeader userName={user.firstName} navigation={navigation}/>
        <ProfileGroup style={UserShowSceneStyles.bottom} groups={user.groups} navigation={navigation}/>
        </Image>
        </View>
      </LinearGradient>
    )
  }
}

export default UserShowScene ;
