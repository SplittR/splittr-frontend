import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import GroupForm from '../Components/new_group_form';
import { StackNavigator } from 'react-navigation';
import {Container, Footer, Title, Button, Icon} from 'native-base';
import UserShowScene from './user_show.ios.js';

class GroupNewScene extends Component {
  static navigationOptions = {
    title: 'New Group',
    headerStyle: {backgroundColor: '#F7F9FB'}
  };
  render(){
    const { navigate } = this.props.navigation
    const { navigation } = this.props

    return(
      <Container style={styles.container}>
    <View>
      <GroupForm style={styles.bottom} navigation={this.props.navigation} />
    </View>
      <Footer>
        <TouchableHighlight onPress={() => navigate('User')}>
          <Text style={styles.text}>Profile</Text>
        </TouchableHighlight>
      </Footer>
    </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
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

export default GroupNewScene;
